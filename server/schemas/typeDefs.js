const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Categories {
    _id: ID
    name: String
  }

  type SubCategories {
    _id: ID
    name: String
  }

  type Lesson {
    _id: ID
    title: String
    description: String
    subcategory: [SubCategories]
    price: Float
    quantity: Int
    user: [User]
    coach: [User]
    review: [Review]

  }

  type Review {
    reviewText: String
    reviewRating: String
    user: [User]
    lesson: [Lesson] 
  }

  type User{
    firstname: String
    lastname: String
    email: String
    password: String
    profileImage: String
    aboutMe: String
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
    categories: [Categories]
    category(_id: ID!): Categories

    subcategories: [SubCategories]
    subcategory(_id: ID!): SubCategories
    user: User

    review: [Review]
    reviews(_id: ID!): Review

    lessons: [Lesson]
    lesson(_id: ID!): Lesson

    order(_id: ID!): Order
    checkout(lessons: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, profileImage: String, aboutMe: String): Auth
    addOrder(lessons: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String, profileImage: String, aboutMe: String): User
    updateLesson(_id: ID!, title: String, description: String, user: String, price: Float, coach: String, ): Lesson
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
