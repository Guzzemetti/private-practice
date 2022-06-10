import { gql } from '@apollo/client';


// ====================== User Mutations ========================= //
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
    $aboutMe: String
  ) {
    addUser(
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
      aboutMe: $aboutMe
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $_id: ID!
    $firstName: String
    $lastName: String
    $email: String
    $password: String
    $aboutMe: String
    $lessons: Lesson
  ) {
    updateUser(
      _id: $ID
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      aboutMe: $aboutMe
      lessons: $Lesson
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($userId: ID!) {
    deleteUser(userId: $userId) {
      _id
    }
  }
`;
// =============================================== //

// Order mutation for stripe
export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
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
  }
`;
// =============================================== //

// ===================== Lesson Mutations ========================== //

export const ADD_LESSON = gql`
  mutation addLesson(
    $title: String!, 
    $description: String!, 
    $price: Float!, 
    $coach: String!,
    $subcategory: ID!,
    ) 
    {
    addLesson (
      title: $title, 
      description: $description, 
      price:$price,
      coach: $coach,
      subcategory: $subcategory)
      {
      _id
      title
      description,
      price,
      coach {
        _id
      },
      subcategory {
        _id
      }
    }
  }
`;

export const UPDATE_LESSON = gql`
  mutation updateLesson(
    $_id: ID!
    $title: String, 
    $description: String, 
    $price: Number, 
    $coach: User,
    $review: Review,
    $subcategory: SubCategory,
    ) {
    addLesson(
      _id: $ID
      title: $title, 
      description: $description, 
      price:$price,
      coach: $coach,
      review: $review,
      subcategory: $subcategory
      ) {
      _id
      title
      description,
      price,
      subcategory,
      coach,
      review
    }
  }
`;

export const REMOVE_LESSON = gql`
  mutation removeLesson($lessonId: ID!) {
    removeLesson(userId: $userId) {
      _id
    }
  }
`;
// =============================================== //

// =================== Review Mutations ============================ //
export const ADD_REVIEW = gql`
  mutation addReview($lessonId: ID!, $reviewText: String!, $User: User) {
    addReview(lessonId: $lessonId, reviewText: $reviewText, User: $User) {
      _id
      reviewText,
      lessonId,
      User
    }
  }
`;

export const REMOVE_REVIEW = gql`
  mutation removeReview($lessonId: ID!, $reviewId: ID!) {
    removeReview(lessonId: $lessonId, reviewId: $reviewId) {
      _id
    }
  }
`;