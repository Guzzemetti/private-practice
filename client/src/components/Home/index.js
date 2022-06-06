import React from 'react';
import BigLogo from '../../assets/PrivatePractice_TextOnly.png';
import { Link } from "react-router-dom";
import '../Home/home.css';

const HomeComp = () => {
  return (
      <section>
      <div className='bg-img'>
          <div className='container-box'>
              <div className='big-logo'>
              <img src={BigLogo} className='logo-navbar' alt='logo'></img>
              </div>
          </div>
      </div>
      </section>
  )
}

export default HomeComp