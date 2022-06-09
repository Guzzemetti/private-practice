import React from 'react';
import "./index.css"
// import "./style.css"
// import Gamerimage from "../../assets/home/bg_gaming.jpg"
// import Blob from "../../assets/blob2.png"
// import Image4 from "../../assets/4.png"

// ------------------------ Create Lesson Modal ------------------------
import CreateLesson from '../CreateLesson/CreateLesson';
{/* <CreateLesson />   <----------------    This still needs to be called somewhere */}
// ---------------------------------------------------------------------
var imageStyle = {
  backgroundImage: `url(${Gamerimage})`
};

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import CategoryCard from '../categoryCards/index';
import { QUERY_CATEGORIES } from '../../utils/queries';


import GamingImageBanner from '../../assets/categoryphotos/gaming.jpg';
// import HomeImageBanner from '../../assets/categoryphotos/';
// import LifestyleImageBanner from '../../assets/categoryphotos/';
// import TechImageBanner from '../../assets/categoryphotos/';
// import MiscImageBanner from '../../assets/categoryphotos/';


export const CatagoryPage = () => {
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
        <img src={GamingImageBanner} alt='Gaming banner' className='Banner-category-page'></img>
      </div>
      <div className='cat-title'>
        {/* Make dynamic */}
        <h1>Category Name</h1>
      </div>
      <div className='filter-category-sub'>
        <form action="/action_page.php" className='form-filter-category-sub'>
          <label for="subcategories">Choose a Subcategory:</label>
          <select id="subcategories" name="gamingsubcategories">
            <option value="none"></option>
            <option value="RPG">RPG</option>
            <option value="MOBA">MOBA</option>
            <option value="MMO">MMO</option>
            <option value="FPS">FPS</option>
            <option value="Other">Other</option>
          </select>
          <input type='submit' className='form-filter-submit-category'/>
        </form>
      </div>
      <div className='category-card-lessons'>
        <CategoryCard categoryId={category._id} />
      </div>
    </section>
  )
}



// var imageStyle = {
//   backgroundImage: `url(${Gamerimage})`
// };

// const CatagoryPage = (props) => {

//   return (
//     <>
//       <body className="u-body u-xl-mode">
//         <section className="u-clearfix u-white u-section-1" id="sec-c45a">
//           <div className="u-clearfix u-sheet u-sheet-1">
//             <div className="u-shape u-shape-svg u-text-custom-color-1 u-shape-1">
//               <img src={Blob} />
//             </div>
//             <div className="u-align-left u-image u-image-circle u-image-1" style={imageStyle}></div>
//             <div className="u-gradient u-shape u-shape-circle u-shape-2"></div>
//             <div className="u-align-left u-container-style u-group u-radius-30 u-shape-round u-white u-group-1">
//               <div className="u-container-layout">
//                 <h2 className="u-custom-font u-font-montserrat u-text u-text-1">Gaming</h2>
//                 <h6 className="u-align-center u-text u-text-2">Sample text.</h6>
//               </div>
//             </div><span className="u-file-icon u-icon u-text-white u-icon-1"><img src={Image4} alt="" /></span>
//             <div className="u-expanded-width u-list u-list-1">
//               <div className="u-repeater u-repeater-1">
//                 {/* The tan colored Hello World box */}
//                 <div className="u-align-center u-container-style u-custom-item u-list-item u-palette-3-light-3 u-radius-50 u-repeater-item u-shape-round u-list-item-1">
//                   <div className="u-container-layout u-similar-container u-container-layout-2">
//                     <h5 className="u-custom-font u-font-montserrat u-text u-text-3">Hello World<br />
//                     </h5>
//                     <p className="u-text u-text-4">Sample text.</p>
//                     <p className="u-text u-text-5">Sample text.</p>
//                     <p className="u-text u-text-6">Sample text.</p>
//                     <p className="u-text u-text-7">Sample text.</p>
//                     <p className="u-text u-text-8">Sample text.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </body>
//     </>
//   )

// }

export default CatagoryPage;