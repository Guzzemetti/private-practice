import React from 'react';
import BigLogo from '../../assets/PrivatePractice_black.png';
import { Link } from "react-router-dom";
import '../Home/home.css';

const HomeComp = () => {
  return (
    // parent element div
    // followed by divs h-left and h-right each taking half the width
    // bg-img div displays pictures that fade in and out to others
    <div className='h'>
        <div className='h-left'>
            <div className='h-left-wrapper'>
                {/* <img src={BigLogo} className='h-logo' alt='logo'></img> */}
                <h1>Be the student...or the master.</h1>
                    <p className='h-p'>Welcome to Private Practice, where the student can become the master. We offer users the chance to find a skill they want to hone and the experts to teach them in a one on one setting. Consider yourself an expert? Offer your teaching services.</p>
            </div>
        </div>
        <div className='h-right'>
            <div className='bg-img'>
            </div>
        </div>
        
        {/* <div className='h-across'>
            <div className='h-across-wrapper'>
                <div className="i-title">
                    <div className="h-title-wrapper">
                        <div className="i-title-item">Full Stack Web Developer</div>
                        <div className="i-title-item">HTML</div>
                        <div className="i-title-item">CSS</div>
                        <div className="i-title-item">Javascript</div>
                        <div className="i-title-item">Node.js</div>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default HomeComp