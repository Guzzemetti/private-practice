import React from 'react';
import "./index.css"
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import CategoryCard from '../categoryCards/index';
import { QUERY_CATEGORIES } from '../../utils/queries';
import GamingImageBanner from '../../assets/categoryphotos/wasd.png';

var imageStyle = {
  backgroundImage: `url(${GamingImageBanner})`
};

export const Gamingpage = () => {
  const { categoryId } = useParams();

  const { loading, data } = useQuery(QUERY_CATEGORIES, {
    variables: { categoryId: categoryId },
  });

  const category = data?.category || {};

  return (
    <section>
      {loading ?
        (
          <div>Loading...</div>
        ) : (
          <>
            <div className='div-image-header' >
              {/* {userSelection} */}
              <div style={imageStyle} className='Banner-category-page'>
                <h1 className="categoryTitle">Gaming</h1>
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
          </>

        )}
    </section>
  )
}

export default Gamingpage;