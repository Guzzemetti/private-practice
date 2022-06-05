import React from "react";
import Auth from "../../utils/auth";
import LogoHeader from '../../assets/Private Practice-logos_transparent.png';
import { Link } from "react-router-dom";
import '../Nav/nav.css';

import { AiOutlineShoppingCart } from 'react-icons/ai';



const Navbar = () => {
  // This function checks if the user is logged in.
  // If they're logged in then it will show buttons for user profile
  // If they aren't logged in then it will return the buttons for them to sign up or log in
  // The function is called in the return of navbar
  // Examples for both are shown from the stripe instructor example from class
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="loggedin-or-not-navbar">
          <Link to='/profile'><button className="navbar-button">Profile</button></Link>
          <div className="div-padding"></div>
          <Link to='/'><button className="navbar-button"><AiOutlineShoppingCart className="cart-navbar-icon" /></button></Link>
        </div>
        // =============================== Example ===============================
        // <div>
        //   <Link to="/orderHistory">
        //     Order History
        //   </Link>
        //   <li className="mx-1">
        //     {/* this is not using the Link component to logout or user and then refresh the application to the start */}
        //     <a href="/" onClick={() => Auth.logout()}>
        //       Logout
        //     </a>
        //   </li>
        // </div>
      );
    } else {
      return (
        <div className="loggedin-or-not-navbar">
          <Link to="/signup"><button className="navbar-button">Signup</button></Link>
          <div className="div-padding"></div>
          <Link to="/login"><button className="navbar-button">Login</button></Link>
        </div>

        // =============================== Example ===============================
        // <ul className="flex-row">
        //   <li className="mx-1">
        //     <Link to="/signup">
        //       Signup
        //     </Link>
        //   </li>
        //   <li className="mx-1">
        //     <Link to="/login">
        //       Login
        //     </Link>
        //   </li>
        // </ul>
      );
    }
  }
  return (
    <header>
      {/* Header that has logo and calls the showNaviagtion function for what buttons are displayed */}
      <section className="navbar-section-holds-everything">

        <div className="navbar-section-img">
          <img src={LogoHeader} className='logo-navbar' alt='logo'></img>
        </div>

        <div className="navbar-section-nav">
          {showNavigation}
          
        </div>

      </section>
      {/* Category and sub category options */}
      <section className="navbar-categories">
        <div className="option-for-1">
          <p className="category-options-navbar">Gaming</p>
          {/* <div className="on-hover-show-options">
            <Link to='/'><button className="subcategory-button-on-hover">RPG</button></Link>
            <Link to='/'><button className="subcategory-button-on-hover">MOBA</button></Link>
            <Link to='/'><button className="subcategory-button-on-hover">MMO</button></Link>
            <Link to='/'><button className="subcategory-button-on-hover">FPS</button></Link>
            <Link to='/'><button className="subcategory-button-on-hover">Other</button></Link>
          </div> */}
        </div>

        <div className="option-for-1">
          <p className="category-options-navbar">Home</p>
          {/* <div className="on-hover-show-options">
            <Link to='/'><button className="subcategory-button-on-hover">Cooking</button></Link>
            <Link to='/'><button className="subcategory-button-on-hover">DIY Projects</button></Link>
            <Link to='/'><button className="subcategory-button-on-hover">Gardening</button></Link>
            <Link to='/'><button className="subcategory-button-on-hover">Maintenance</button></Link>
            <Link to='/'><button className="subcategory-button-on-hover">Other</button></Link>
          </div> */}
        </div>

        <div className="option-for-1">
          <p className="category-options-navbar">Lifestyle</p>
          {/* <div className="on-hover-show-options">
            <Link to='/'><button className="subcategory-button-on-hover">Fitness</button></Link>
            <Link to='/'><button className="subcategory-button-on-hover">Fashion</button></Link>
            <Link to='/'><button className="subcategory-button-on-hover">Selfcare</button></Link>
            <Link to='/'><button className="subcategory-button-on-hover">Life Coaching</button></Link>
            <Link to='/'><button className="subcategory-button-on-hover">Other</button></Link>
          </div> */}
        </div>

        <div className="option-for-1">
          <p className="category-options-navbar">Tech</p>
          {/* <div className="on-hover-show-options">
            <Link to='/'><button className="subcategory-button-on-hover">Computer Learning</button></Link>
            <Link to='/'><button className="subcategory-button-on-hover">Programming</button></Link>
            <Link to='/'><button className="subcategory-button-on-hover">IT</button></Link>
            <Link to='/'><button className="subcategory-button-on-hover">Streaming</button></Link>
            <Link to='/'><button className="subcategory-button-on-hover">Other</button></Link>
          </div> */}
        </div>


        <div className="option-for-1">
          <p className="category-options-navbar">Misc.</p>
          {/* <div className="on-hover-show-options">
            <Link to='/'><button className="subcategory-button-on-hover">Misty-Misc</button></Link>
          </div> */}
        </div>
      </section>
    </header>
  )
};




// function Navbar() {

//   function showNavigation() {
//     if (Auth.loggedIn()) {
//       return (
//         <ul className="flex-row">
//           <li className="mx-1">
//             <Link to="/orderHistory">
//               Order History
//             </Link>
//           </li>
//           <li className="mx-1">
//             {/* this is not using the Link component to logout or user and then refresh the application to the start */}
//             <a href="/" onClick={() => Auth.logout()}>
//               Logout
//             </a>
//           </li>
//         </ul>
//       );
//     } else {
//       return (
//         <ul className="flex-row">
//           <li className="mx-1">
//             <Link to="/signup">
//               Signup
//             </Link>
//           </li>
//           <li className="mx-1">
//             <Link to="/login">
//               Login
//             </Link>
//           </li>
//         </ul>
//       );
//     }
//   }

//   return (
//     <header className="flex-row px-1">
//       <h1>
//         <Link to="/">
//           <span role="img" aria-label="shopping bag">🛍️</span>
//           -Shop-Shop
//         </Link>
//       </h1>

//       <nav>
//         {showNavigation()}
//       </nav>
//     </header>
//   );
// }

export default Navbar;
