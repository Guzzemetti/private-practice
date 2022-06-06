const { AuthenticationError } = require('apollo-server-express');
const { User, Lesson, Categories, Order, Review, SubCategories } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

// Refractored from activity 26 in state
const resolvers = {
  Query: {
    // Find all categories
    categories: async () => {
      return await Categories.find();
    },
    // Find one category
    category: async (parent, { _id }) => {
      return await Categories.findById(_id);
    },
    // Find all subcategories
    SubCategories: async (parent, { _id }) => {
      return await SubCategories.findById(_id);
    },
    // Find 1 lesson and populate
    lesson: async (parent, { _id }) => {
      return await Lesson.findById(_id).populate('SubCategories');
    },
    // find all lessons 
    lessons: async (parent, { subcategory, title }) => {
      const params = {};

      if (subcategory) {
        params.subcategory = subcategory;
      }

      if (title) {
        params.title = {
          $regex: title
        };
      }

      return await Lesson.find(params).populate('subcategory');
    },
    // Finds a User and populates the order history
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.lessons',
          populate: 'lesson'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    // Get order?
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.lesson',
          populate: 'lesson'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    //  Works with checkout. This is needed for stripe to funciton
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ lessons: args.lessons });
      const line_items = [];

      const { lessons } = await order.populate('lessons');

      for (let i = 0; i < lessons.length; i++) {
        const lesson = await stripe.lessons.create({
          name: lessons[i].name,
          description: lessons[i].description,
        });

        const price = await stripe.prices.create({
          lesson: lesson.id,
          unit_amount: lesson[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }
      // Checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },

  Mutation: {
    
  },
};

module.exports = resolvers;
