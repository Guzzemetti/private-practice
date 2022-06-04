import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import '../Nav/nav.css';


const Navbar = () => {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div>

        </div>
        // Example==
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
          <Link to="/signup"><button>Signup</button></Link>
          <Link to="/login"><button>Login</button></Link>
        </div>
        // Example ==
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
          <img src='' alt='logo'></img>
        </div>

        <div className="navbar-section-nav">
          <h1>Testing</h1>
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
