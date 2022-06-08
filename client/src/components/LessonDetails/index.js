import React from 'react'
import { Link } from "react-router-dom";
import "../LessonDetails/lessonDetails.css";
import Gaming from "../../assets/gaming_category.png";

const LessonDetails = () => {
  return (
    <div className="d">
      <div className="d-row">
      <div className="d-left">
          <div className="d-image">
            <img src={Gaming} alt=""></img>
          </div>
        </div>
        <div className="d-right">
          <div className="d-right-wrapper">
            <h2>Lesson Title</h2>
              <div className="d-coach">Coach Name</div>
              <div className='d-desc'>
              description description description description description description description description description description description description description description description description description description description.</div>
              <div className='d-price'>$100/hr</div>
              <div className='d-quantity'>Quanity left</div>
              <button>Add To Cart</button>
          </div>
        </div>
        
      </div>

      <p>Go Back</p>
    </div>
  )
}

export default LessonDetails