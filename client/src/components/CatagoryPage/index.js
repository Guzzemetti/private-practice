import React from 'react';
import "./index.css"
import "./style.css"
import Gamerimage from "../../assets/bg_gaming.jpg"
import Blob from "../../assets/blob2.png"
import Image4 from "../../assets/4.png"

var imageStyle = {
  backgroundImage: `url(${Gamerimage})`
};

const CatagoryPage = (props) => {

  return (
    <>
      <body class="u-body u-xl-mode">
        <section class="u-clearfix u-white u-section-1" id="sec-c45a">
          <div class="u-clearfix u-sheet u-sheet-1">
            <div class="u-shape u-shape-svg u-text-custom-color-1 u-shape-1">
              <img src={Blob} alt="blob"/>
            </div>
            <div class="u-align-left u-image u-image-circle u-image-1" style={imageStyle}></div>
            <div class="u-gradient u-shape u-shape-circle u-shape-2"></div>
            <div class="u-align-left u-container-style u-group u-radius-30 u-shape-round u-white u-group-1">
              <div class="u-container-layout u-container-layout-1">
                <h2 class="u-custom-font u-font-montserrat u-text u-text-1">Gaming</h2>
                <h6 class="u-align-center u-text u-text-2">Sample text.</h6>
              </div>
            </div><span class="u-file-icon u-icon u-text-white u-icon-1"><img src={Image4} alt="" /></span>
            <div class="u-expanded-width u-list u-list-1">
              <div class="u-repeater u-repeater-1">
                <div class="u-align-center u-container-style u-custom-item u-list-item u-palette-3-light-3 u-radius-50 u-repeater-item u-shape-round u-list-item-1">
                  <div class="u-container-layout u-similar-container u-container-layout-2">
                    <h5 class="u-custom-font u-font-montserrat u-text u-text-3">Hello World<br />
                    </h5>
                    <p class="u-text u-text-4">Sample text.</p>
                    <p class="u-text u-text-5">Sample text.</p>
                    <p class="u-text u-text-6">Sample text.</p>
                    <p class="u-text u-text-7">Sample text.</p>
                    <p class="u-text u-text-8">Sample text.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  )
}

export default CatagoryPage