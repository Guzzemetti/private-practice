import React from 'react';
import "./index.css"
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import CategoryCard from '../categoryCards/index';
import { QUERY_CATEGORIES } from '../../utils/queries';
import MiscImageBanner from '../../assets/categoryphotos/MiscBackground.jpg';
import CategoryDropdown from '../../components/CategoryDropdown';

var imageStyle = {
  backgroundImage: `url(${MiscImageBanner})`
};

export const Miscpage = () => {
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
          <CategoryDropdown />
            <div className='div-image-header'>
              {/* {userSelection} */}
              <div style={imageStyle} className='Miscpage-banner-category-page'>
                <h1 className="categoryTitle">Miscellaneous</h1>
              </div>
            </div>
            <div className='cat-title'>
              {/* Make dynamic */}
            </div>
            <div className='category-card-lessons'>
              {/* <CategoryCard category={category}/>
                <CategoryCard categoryId={category._id} /> */}
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

export default Miscpage;