import { gql } from '@apollo/client';

// =============================== //

// Example
// export const QUERY__PRODUCT_LESSONS = gql`
//   query getProducts($category: ID) {
//     products(category: $category) {
//       _id
//       name
//       description
//       price
//       quantity
//       image
//       category {
//         _id
//       }
//     }
//   }
// `;

export const QUERY_CHECKOUT = gql`
  query getCheckout($lessons: [ID]!) {
    checkout(lessons: $lessons) {
      session
    }
  }
`;

export const QUERY_ALL_LESSONS = gql`
  {
    lessons {
      _id
      title
      description
      price
      quantity
      subcategory {
        name
      }
      coach {
        firstname
        lastname
      }
    }
  }
`;
// =============================== //

// ============== Query categories and subcategories ================= //

export const QUERY_SUBCATEGORIES = gql`
  query subcategories {
    subcategory{
      _id
      name
      lessons {
      _id
      title
      description
      # price
    }
    }
    # category,
  }
`;

export const QUERY_SINGLE_SUBCATEGORY = gql`
  query singleSubcategory($subcategoryId: ID!) {
    subcategory,
    category,
    lessons
  }
`;


export const QUERY_CATEGORIES = gql`
  query categories {
    category {
      name
      subcategory{
        name
      }
    }
  }
`;
export const QUERY_SINGLE_CATEGORY = gql`
  query singleCategory($categoryId: ID!)  {
    category,
    subcategory
  }
`;

// ============ User QUERY=================== //

// export const QUERY_USERS = gql`
//   query allUsers {
//     users {
//       _id
//       firstname
//       lastname
//       aboutMe
//       lessons
//     }
//   }
// `;

export const QUERY_SINGLE_USER = gql`
  query user($userId: ID!) {
    user {
      _id
      firstname
      lastname
      aboutMe
      lessons
      # orders
    }
  }
`;

// Used in fullprofile component
    // If there is no `userId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
export const QUERY_ME = gql`
  query me {
    me {
      _id
      email
      firstname
      lastname
      aboutMe
      lessons {
        title
        description
        price
      }
    }
  }
`;

// ============== Lesson queries ================= //

// export const QUERY_LESSONS = gql`
//   query allLessons {
//     title,
//     description,
//     subcategory,
//     price,
//     quantity,
//     coach,
//     review
//   }
// `;

// export const QUERY_SINGLE_LESSON = gql`
//   query singleLesson {
//     title,
//     description,
//     subcategory,
//     price,
//     quantity,
//     coach,
//     review
//   }
// `;

// ============== Review Queries ================= //

// export const QUERY_REVIEWS = gql`
//   query allReviews {
//     reviewText,
//     reviewRating,
//     user,
//     lesson
//   }
// `;

// export const QUERY_SINGLE_REVIEW = gql`
//   query singleReview {
//     reviewText,
//     reviewRating,
//     user,
//     lesson
//   }
// `;

// =============================== //