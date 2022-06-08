import { gql } from '@apollo/client';

// =============================== //
export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;
// =============================== //

// ============== Query categories and subcategories ================= //

export const QUERY_SUBCATEGORIES = gql`
  query allSubcategories {
    subcategory,
    category,
    lessons
  }
`;
export const QUERY_SINGLE_SUBCATEGORY = gql`
  query singleSubcategory {
    subcategory,
    category,
    lessons
  }
`;


export const QUERY_CATEGORIES = gql`
  query allCategories {
    category,
    subcategory
  }
`;
export const QUERY_SINGLE_CATEGORY = gql`
  query singleCategory {
    category,
    subcategory
  }
`;

// ============ User QUERY=================== //

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      firstname
      lastname
      aboutMe
      lessons
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      firstname
      lastname
      aboutMe
      lessons
      orders
    }
  }
`;

// ============== Lesson queries ================= //

export const QUERY_LESSONS = gql`
  query allLessons {
    title,
    description,
    subcategory,
    price,
    quantity,
    coach,
    review
  }
`;

export const QUERY_SINGLE_LESSON = gql`
  query singleLesson {
    title,
    description,
    subcategory,
    price,
    quantity,
    coach,
    review
  }
`;

// ============== Review Queries ================= //

export const QUERY_REVIEWS = gql`
  query allReviews {
    reviewText,
    reviewRating,
    user,
    lesson
  }
`;

export const QUERY_SINGLE_REVIEW = gql`
  query singleReview {
    reviewText,
    reviewRating,
    user,
    lesson
  }
`;

// =============================== //