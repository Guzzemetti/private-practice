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
    subcategories: async () => {
      return await SubCategories.find();
    },
    // Find 1 subcategory
    subcategory: async (parent, { _id }) => {
      return await SubCategories.find(_id);
    },
    // Find all reviews
    reviews: async () => {
      return await Review.find();
    },
    // Find 1 review
    review: async (parent, { _id }) => {
      return await Review.find(_id);
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
    // To create a new user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    // To create a new order to their cart
    addOrder: async (parent, { lessons }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ lessons });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    //  To update an existing user
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    // To update an existing lesson
    updateLesson: async (parent, args, context) => {
      
      return await Lesson.findByIdAndUpdate(context.user._id, args, { new: true });
    },
    // updateLesson: async (parent, { _id, quantity }) => {
    //   const decrement = Math.abs(quantity) * -1;

    //   return await Lesson.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    // },
    // To login in a user
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  },
};

module.exports = resolvers;
