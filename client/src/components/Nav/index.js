import React from "react";
import Auth from "../../utils/auth";
import LogoHeader from '../../assets/PrivatePractice.png';
import { Link } from "react-router-dom";
import '../Nav/nav.css';
import CreateLesson from '../CreateLesson/CreateLesson';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  // This function checks if the user is logged in.
  // If they're logged in then it will show buttons for user profile
  // If they aren't logged in then it will return the buttons for them to sign up or log in
  // The function is called in the return of navbar
  // Examples for both are shown from the stripe instructor example from class

  return (
    <>
      <header>
        {/* Header that has logo and calls the showNaviagtion function for what buttons are displayed */}
        <section className="navbar-section-holds-everything">
          <div className="navbar-section-img">
            <Link to="/"><img src={LogoHeader} className='logo-navbar' alt='logo'></img></Link>
          </div>
          {/* this is default navbar, just for visual sake. Will edit for login status */}
          <div className="navbar-section-nav">
            {Auth.loggedIn() ? (
              <div className="loggedin-or-not-navbar">
                <Link to='/about'><button className="navbar-button">About</button></Link>
                <div className="div-padding"></div>
                <Link to='/createlesson'><button className="navbar-button">Create a Lesson</button></Link>
                <div className="div-padding"></div>
                <Link to={`/profile/${Auth.getProfile().data._id} `}><button className="navbar-button">Profile</button></Link>
                <div className="div-padding"></div>
                <a href="/" className="navbar-button" onClick={() => Auth.logout()}>Logout</a>
                <div className="div-padding"></div>
                <Link to='/'><button className="navbar-button"><AiOutlineShoppingCart className="cart-navbar-icon" /></button></Link>
              </div>
            ) : (
              <div className="loggedin-or-not-navbar">
                <Link to='/about'><button className="navbar-button">About</button></Link>
                <div className="div-padding"></div>
                <Link to="/signup"><button className="navbar-button">Signup</button></Link>
                <div className="div-padding"></div>
                <Link to="/login"><button className="navbar-button">Login</button></Link>
              </div>
            )}
          </div>
        </section>
      </header>
    </>
  )
};

export default Navbar;
