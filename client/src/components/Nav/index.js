import React from "react";
import Auth from "../../utils/auth";
import LogoHeader from '../../assets/Private Practice-logos_transparent.png';
import { Link } from "react-router-dom";
import '../Nav/nav.css';


const Navbar = () => {
  // This function checks if the user is logged in.
  // If they're logged in then it will show buttons for user profile
  // If they aren't logged in then it will return the buttons for them to sign up or log in
  // The function is called in the return of navbar
  // Examples for both are shown from the stripe instructor example from class
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div>
          <Link to='/profile'><button className="navbar-button">Profile</button></Link>
          <Link to=''><button className="navbar-button"></button></Link>
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
        <div>
          <Link to="/signup"><button className="navbar-button">Signup</button></Link>
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
      <section className="navbar-section-holds-everything">

        <div className="navbar-section-img">
          <img src={LogoHeader} className='logo-navbar' alt='logo'></img>
        </div>

        <div className="navbar-section-nav">
          {/* {showNavigation} */}
          <div className="not-loggedin-navbar">
            <Link to="/signup"><button className="navbar-button">Signup</button></Link>
            <div className="div-padding"></div>
            <Link to="/login"><button className="navbar-button">Login</button></Link>
          </div>
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
