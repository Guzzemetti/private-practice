const { AuthenticationError } = require('apollo-server-express');
const { User, Lesson, Category, Order, Review, SubCategory } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

// Refractored from activity 26 in state
const resolvers = {
  Query: {
    // Find all categories
    categories: async () => {
      return await Category.find().populate('subcategory');
    },
    // Find one category
    category: async (parent, { _id }) => {
      return await Category.findById(_id).populate('subcategory');
    },
    // Find all subcategories
    subcategories: async () => {
      return await SubCategory.find().populate('category').populate('lessons');
    },
    // Find 1 subcategory
    subcategory: async (parent, { _id }) => {
      return await SubCategory.findById(_id).populate('category').populate('lessons');
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
      return await Lesson.findById(_id).populate('coach').populate('subcategory');
    },
    // find all lessons 
    lessons: async () => {

      return await Lesson.find().populate('subcategory').populate('coach');
    },
    // Find all users
    users: async (parent, args) => {

      const user = await User.find();

      return user;
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
    // Me route
    //   me: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id }).populate('thoughts');
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
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
    // -----------------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------
    // Do the args here need to be broken down into name, email and password? Resolvers in activity 22 in MERN
    // -----------------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------
    addUser: async (parent, args) => {
      const user = await User.create(args);
      // Immediately signs a JSON Web Token and log the user in after they are created
      const token = signToken(user);
      // Returns an "Auth" object that contains the toek and the user's info
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
    // Add a lesson
    addLesson: async (parent, { title, description, price, subcategory }, context) => {
      if (context.user) {
        const lesson = await Lesson.create({
          title,
          description,
          price,
          subcategory,
          coach: context.user,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { lessons: lesson._id } }
        );

        return lesson;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // To update an existing lesson
    updateLesson: async (parent, args, context) => {

      return await Lesson.findByIdAndUpdate(context.user._id, args, { new: true });
    },
    // Delete a lesson from a user
    removeLesson: async (parent, { lessonId }, context) => {
      if (context.user) {
        const lesson = await Lesson.findOneAndDelete({
          _id: lessonId,
          coach: context.user,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { lessons: lesson._id } }
        );

        return lesson;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // updateLesson: async (parent, { _id, quantity }) => {
    //   const decrement = Math.abs(quantity) * -1;

    //   return await Lesson.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    // },

    // To login in a user
    login: async (parent, { email, password }) => {
      // Locate a user based on the provided email address
      const user = await User.findOne({ email });
      // If there isn't a user with that email, provide the below error
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      // Checks to verify the user's submitted password
      const correctPw = await user.isCorrectPassword(password);
      // If the provided password doesn't match the stores password, provide the below error message
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      // If the submitted email/password are correct, log the user in with a JWT
      const token = signToken(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },
    addReview: async (parent, { lessonId, reviewText }, context) => {
      if (context.user) {
        return Review.findOneAndUpdate(
          { _id: lessonId },
          {
            $addToSet: {
              review: { reviewText, user: context.user },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Remove a review
    removeReview: async (parent, { lessonId, reviewId }, context) => {
      if (context.user) {
        return Lesson.findOneAndUpdate(
          { _id: lessonId },
          {
            $pull: {
              review: {
                _id: reviewId,
                user: context.user,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
