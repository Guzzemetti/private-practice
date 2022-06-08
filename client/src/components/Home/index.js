import React from "react";
import Gaming from "../../assets/home/gaming_category.png";
import Tech from "../../assets/home/tech_category.png";
import Home from "../../assets/home/home_category.png";
import Lifestyle from "../../assets/home/lifestyle_category.png";
import Misc from "../../assets/home/misc_category.png";
import Test1 from "../../assets/testimonials/testimonial1.png";
import Test2 from "../../assets/testimonials/testimonial2.png";
import Test5 from "../../assets/testimonials/testimonial5.png";
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
          {/* <div className="h-left-wrapper"> */}
          <h1>Be the student...or the master.</h1>
          <p className="h-p">
            Welcome to Private Practice, where the student can become the
            master. We offer users the chance to find a skill they want to hone
            and the experts to teach them in a one on one setting. Consider
            yourself an expert? Offer your teaching services.
          </p>
          <Link to="/signup">
            <h5 className="">Click here to sign up!</h5>
          </Link>
          {/* </div> */}
        </div>
        <div className="h-right">
          <div className="bg-img"></div>
        </div>
      </div>

      <div className="h-explore-row">
        <h2>Explore our categories:</h2>
      </div>

      <div className="h-cats">
        <div className="h-cats-across">

          <div className="category-cube">
            <img src={Gaming} className="cat-img" alt="Gaming"></img>
            <Link to="/gaming">
              <div className="cube-overlay">
                <div className="cube-text">Gaming</div>
              </div>
            </Link>
          </div>

          <div className="category-cube">
            <img src={Tech} className="cat-img" alt="Tech"></img>
            <Link to="/tech">
              <div className="cube-overlay">
                <div className="cube-text">Tech</div>
              </div>
            </Link>
          </div>

          <div className="category-cube">
            <img src={Home} className="cat-img" alt="Home"></img>
            <Link to="/home">
              <div className="cube-overlay">
                <div className="cube-text">Home</div>
              </div>
            </Link>
          </div>

          <div className="category-cube">
            <img src={Lifestyle} className="cat-img" alt="Lifestyle"></img>
            <Link to="/lifestyle">
              <div className="cube-overlay">
                <div className="cube-text">Lifestyle</div>
              </div>
            </Link>
          </div>

          <div className="category-cube">
            <img src={Misc} className="cat-img" alt="Misc"></img>
            <Link to="/misc">
              <div className="cube-overlay">
                <div className="cube-text">Misc</div>
              </div>
            </Link>
          </div>
          
        </div>
      </div>

      <div className="h-testimonials-row">
        <h2>See what our users have to say about their experiences</h2>
        <div className="h-testimonials-box">
          <div className="h-testimonials-img">
            <img src={Test1} className="cat-img" alt="Misc"></img>
          </div>
          <div className="h-testimonials-text">
            <p>
              My son told me I wasn't good enough to play Fortnight with him.
              With Thad's coaching I was able to improve my aim, awareness and
              game knowledge. Now I'm better than my son and he once again won't
              play with me. Thanks Private Practice!
            </p>
            <p className="h-testimonials-name">- Brad</p>
          </div>
        </div>

        <div className="h-testimonials-box">
          <div className="h-testimonials-text">
            <p>
              I've always wanted to learn how to cook for my family. I've worked
              with my coach Jessica a few times and it has made a world of
              difference. My wife and kids are so impressed that I can do more
              than just reheat leftovers!
            </p>
            <p className="h-testimonials-name">- Michael</p>
          </div>
          <div className="h-testimonials-img">
            <img src={Test2} className="cat-img" alt="Misc"></img>
          </div>
        </div>

        <div className="h-testimonials-box">
          <div className="h-testimonials-img">
            <img src={Test5} className="cat-img" alt="Misc"></img>
          </div>
          <div className="h-testimonials-text">
            <p>
              The tips and skills I learned about self care from my coach has
              made all the difference. I'd highly recommend Private Practice to
              anyone.
            </p>
            <p className="h-testimonials-name">- Alessandra</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
