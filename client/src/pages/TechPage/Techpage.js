import React from 'react';
import "./index.css"
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import CategoryCard from '../categoryCards/index';
import { QUERY_CATEGORIES } from '../../utils/queries';
import TechImageBanner from '../../assets/categoryphotos/tech_heroimg.jpg';

// ------------------------ Create Lesson Modal ------------------------
// import CreateLesson from '../CreateLesson/CreateLesson';
{/* <CreateLesson />   <----------------    This still needs to be called somewhere */}
// ---------------------------------------------------------------------
var imageStyle = {
  backgroundImage: `url(${TechImageBanner})`
};

// import HomeImageBanner from '../../assets/categoryphotos/';
// import LifestyleImageBanner from '../../assets/categoryphotos/';
// import TechImageBanner from '../../assets/categoryphotos/';
// import MiscImageBanner from '../../assets/categoryphotos/';


export const TechPage = () => {
  const { categoryId } = useParams();

  const { loading, data } = useQuery(QUERY_CATEGORIES, {
    variables: { categoryId: categoryId },
  });

  const category = data?.category || {};

  // return image based on what the user
  // const userSelection = () => {
  //   if('/category'){
  //     return(
  //       <img src={GamingImageBanner} alt='Gaming banner' className='Banner-category-page'></img>
  //     )
  //   } else if ('/category/home') {
  //     return(
  //       <img src='' alt='Gaming banner' className='Banner-category-page'></img>
  //     )
  //   } else if ('/category/lifestyle') {
  //     return(
  //       <img src='' alt='Gaming banner' className='Banner-category-page'></img>
  //     )
  //   } else if ('/category/tech') {
  //     return(
  //       <img src='' alt='Gaming banner' className='Banner-category-page'></img>
  //     )
  //   } else {
  //     return(
  //       <img src='' alt='Gaming banner' className='Banner-category-page'></img>
  //     )
  //   }
  // }

  return (
    <section>
      <div className='div-image-header' >
        {/* {userSelection} */}
        <div style={ imageStyle } className='Banner-category-page'>
          <h1 className="categoryTitle">Tech</h1>
        </div>
      </div>
      <div className='cat-title'>
        {/* Make dynamic */}
      </div>
      <div className='category-card-lessons'>
        {/* <CategoryCard categoryId={category._id} /> */}
        <p className="category-title">Title</p>
        <p className="category-description">Description</p>
        <p className="category-price">Price</p>
        <p className="category-quantity">quantity</p>
        <p className="category-subcategory">Subcategory</p>
      </div>
    </section>
  )
}

export default TechPage;