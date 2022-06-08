
import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import '../Nav/nav.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const ShowNavigation = () => {
    {Auth.loggedIn() ? (
            <div className="loggedin-or-not-navbar">
                <Link to='/profile'><button className="navbar-button">Profile</button></Link>
                <div className="div-padding"></div>
                <a href="/" className="navbar-button" onClick={() => Auth.logout()}>Logout</a>
                <div className="div-padding"></div>
                <Link to='/'><button className="navbar-button"><AiOutlineShoppingCart className="cart-navbar-icon" /></button></Link>
            </div>
        ) : (
        <div className="loggedin-or-not-navbar">
            <Link to="/signup"><button className="navbar-button">Signup</button></Link>
            <div className="div-padding"></div>
            <Link to="/login"><button className="navbar-button">Login</button></Link>
        </div>
    )}
}

export default ShowNavigation;