import React from "react";
import BigLogo from "../../assets/PrivatePractice_black.png";
import Gaming from "../../assets/bg_gaming.jpg";
import Tech from "../../assets/bg_coding.jpg";
import Home from "../../assets/bg_diy.jpg";
import Lifestyle from "../../assets/bg_selfcare.jpg";
import Misc from "../../assets/bg_workout.jpg";
import { Link } from "react-router-dom";
import "../Home/home.css";

const HomeComp = () => {
  return (
    // parent element div
    // followed by divs h-left and h-right each taking half the width
    // bg-img div displays pictures that fade in and out to others
    <div className="h">
      <div className="h-row">
        <div className="h-left">
          <div className="h-left-wrapper">
            {/* <img src={BigLogo} className='h-logo' alt='logo'></img> */}
            <h1>Be the student...or the master.</h1>
            <p className="h-p">
              Welcome to Private Practice, where the student can become the
              master. We offer users the chance to find a skill they want to
              hone and the experts to teach them in a one on one setting.
              Consider yourself an expert? Offer your teaching services.
            </p>
          </div>
        </div>
        <div className="h-right">
          <div className="bg-img"></div>
        </div>
      </div>
      <div className="h-cats">
            <div className="h-cats-across">
                <div className="category-cube">
                <img src={Gaming} className='cat-img' alt='logo'></img>
                </div>
                <div className="category-cube">
                <img src={Tech} className='cat-img' alt='logo'></img>
                </div>
                <div className="category-cube">
                <img src={Home} className='cat-img' alt='logo'></img>
                </div>
                <div className="category-cube">
                <img src={Lifestyle} className='cat-img' alt='logo'></img>
                </div>
                <div className="category-cube">
                <img src={Misc} className='cat-img' alt='logo'></img>
                </div>
            </div>
        </div>

    </div>
  );
};

export default HomeComp;
