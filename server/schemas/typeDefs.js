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
    price: Float
    quantity: Number
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
  # ====================== Might not be needed ======================= #
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
    category(_id: ID!): Category

    subCategories: [SubCategories]
    user: User

    lessons: [Lesson]
    lesson(_id: ID!): Lesson

    order(_id: ID!): Order
    checkout(lessons: [ID]!): Checkout
  }

  type Mutation {
    
  }
`;

module.exports = typeDefs;
