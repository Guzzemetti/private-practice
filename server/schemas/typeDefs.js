const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
    subcategory: [SubCategory]
  }

  type SubCategory {
    _id: ID
    name: String
    category: [Category]
    lessons: [Lesson]
  }

  type Lesson {
    _id: ID
    title: String
    description: String
    subcategory: [SubCategory]
    price: Float
    quantity: Int
    # user: [User]
    coach: [User]
    review: [Review]
  }

  type Review {
    _id: ID
    reviewText: String
    reviewRating: String
    user: [User]
    lesson: [Lesson] 
  }

  type User{
    _id: ID
    firstname: String
    lastname: String
    email: String
    password: String
    profileImage: String
    aboutMe: String
    lessons: [Lesson]
  }
  # ====================== Might not be needed/ For checkout ======================= #
  type Order {
    _id: ID
    purchaseDate: String
    lessons: [Lesson]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }
  # ============================================= #
  type Query {
    categories: [Category]
    category(_id: ID!): Category

    subcategories: [SubCategory]
    subcategory(_id: ID!): SubCategory
    
    user(_id: ID!): User
    users: [User]
    me: User

    review: [Review]
    reviews(_id: ID!): Review

    lessons: [Lesson]
    lesson(_id: ID!): Lesson

    order(_id: ID!): Order
    checkout(lessons: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstname: String!, lastname: String!, email: String!, password: String!, profileImage: String, aboutMe: String): Auth
    updateUser(firstname: String, lastname: String, email: String, password: String, profileImage: String, aboutMe: String): User
    deleteUser(userId: ID!): User
    login(email: String!, password: String!): Auth

    # For stripe so user can pay for lessons
    addOrder(lessons: [ID]!): Order

    # Subcategory is either a string or an ID... Should be an ID
    addLesson(title: String!, description: String!, price: Float, coach: String, subcategory: ID,): Lesson
    updateLesson(_id: ID!, title: String, description: String, price: Float, coach: String, ): Lesson
    removeLesson(lesson: ID!): Lesson

    addReview(lessonId: ID!, reviewText: String!): Review
    removeReview(lessonId: ID!, reviewId: ID!): Review
  }
`;

module.exports = typeDefs;
