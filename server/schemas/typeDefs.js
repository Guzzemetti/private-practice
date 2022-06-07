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

    review: [Review]
    reviews(_id: ID!): Review

    lessons: [Lesson]
    lesson(_id: ID!): Lesson

    order(_id: ID!): Order
    checkout(lessons: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstname: String!, lastname: String!, email: String!, password: String!, profileImage: String, aboutMe: String): Auth
    addOrder(lessons: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String, profileImage: String, aboutMe: String): User
    updateLesson(_id: ID!, title: String, description: String, user: String, price: Float, coach: String, ): Lesson
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
