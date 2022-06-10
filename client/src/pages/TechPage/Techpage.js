import React from 'react';
import "./index.css"
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import CategoryCard from '../categoryCards/index';
import { QUERY_CATEGORIES } from '../../utils/queries';
import TechImageBanner from '../../assets/categoryphotos/tech_heroimg.jpg';
import CategoryDropdown from '../../components/CategoryDropdown';

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

  return (
    <section>
      {loading ?
        (
          <div>Loading...</div>
        ) : (
          <>
          <CategoryDropdown />
            <div className='div-image-header' >
              {/* {userSelection} */}
              <div style={imageStyle} className='Banner-category-tech-page'>
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
          </>
        )}
    </section>
  )
}

export default TechPage;