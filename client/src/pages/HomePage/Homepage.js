import React from 'react';
import "./index.css"
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import CategoryCard from '../categoryCards/index';
import { QUERY_CATEGORIES } from '../../utils/queries';
import HomeImageBanner from '../../assets/categoryphotos/HomeBackground.jpg';
import CategoryDropdown from '../../components/CategoryDropdown';


var imageStyle = {
  backgroundImage: `url(${HomeImageBanner})`
};

export const HomePage = () => {
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
            <section>
              <div className='div-image-header' >
                {/* {userSelection} */}
                <div style={imageStyle} className='Home-banner-category-page'>
                  <h1 className="categoryTitle">Home</h1>
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
          </>

        )}

    </section>
  )
}

export default HomePage;