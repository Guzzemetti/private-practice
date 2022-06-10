import React from 'react';
import '../Nav/nav.css'
import { Link } from "react-router-dom";

const CategoryDropdown = ({ category }) => {
  return (
    <>
      <section className="navbar-categories">
        <div className="option-for-1">
          <Link to='/gamingpage' className='dropdown-link'><p className="category-options-navbar">Gaming</p></Link>
          {/* <div className="on-hover-show-options">
      <Link to='/'><button className="subcategory-button-on-hover">RPG</button></Link>
      <Link to='/'><button className="subcategory-button-on-hover">MOBA</button></Link>
      <Link to='/'><button className="subcategory-button-on-hover">MMO</button></Link>
      <Link to='/'><button className="subcategory-button-on-hover">FPS</button></Link>
      <Link to='/'><button className="subcategory-button-on-hover">Other</button></Link>
    </div> */}
        </div>

        <div className="option-for-1">
          <Link to='/homepage' className='dropdown-link'><p className="category-options-navbar">Home</p></Link>
          {/* <div className="on-hover-show-options">
      <Link to='/'><button className="subcategory-button-on-hover">Cooking</button></Link>
      <Link to='/'><button className="subcategory-button-on-hover">DIY Projects</button></Link>
      <Link to='/'><button className="subcategory-button-on-hover">Gardening</button></Link>
      <Link to='/'><button className="subcategory-button-on-hover">Maintenance</button></Link>
      <Link to='/'><button className="subcategory-button-on-hover">Other</button></Link>
    </div> */}
        </div>

        <div className="option-for-1">
          <Link to='/lifestylepage' className='dropdown-link'><p className="category-options-navbar">Lifestyle</p></Link>
          {/* <div className="on-hover-show-options">
      <Link to='/'><button className="subcategory-button-on-hover">Fitness</button></Link>
      <Link to='/'><button className="subcategory-button-on-hover">Fashion</button></Link>
      <Link to='/'><button className="subcategory-button-on-hover">Selfcare</button></Link>
      <Link to='/'><button className="subcategory-button-on-hover">Life Coaching</button></Link>
      <Link to='/'><button className="subcategory-button-on-hover">Other</button></Link>
    </div> */}
        </div>

        <div className="option-for-1">
          <Link to='/techpage' className='dropdown-link'><p className="category-options-navbar">Tech</p></Link>
          {/* <div className="on-hover-show-options">
      <Link to='/'><button className="subcategory-button-on-hover">Computer Learning</button></Link>
      <Link to='/'><button className="subcategory-button-on-hover">Programming</button></Link>
      <Link to='/'><button className="subcategory-button-on-hover">IT</button></Link>
      <Link to='/'><button className="subcategory-button-on-hover">Streaming</button></Link>
      <Link to='/'><button className="subcategory-button-on-hover">Other</button></Link>
    </div> */}
        </div>


        <div className="option-for-1">
          <Link to='/miscpage' className='dropdown-link'><p className="category-options-navbar">Misc.</p></Link>
          {/* <div className="on-hover-show-options">
      <Link to='/'><button className="subcategory-button-on-hover">Misty-Misc</button></Link>
    </div> */}
        </div>
      </section>
    </>
  )
};

export default CategoryDropdown;







