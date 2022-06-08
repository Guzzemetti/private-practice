import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../About/aboutStyle.css'

import { } from 'reactstrap';

import Austin from '../../assets/about/austin.png';
import JohnG from '../../assets/about/johnG.png';
import JohnH from '../../assets/about/johnH.png';
import Phillip from '../../assets/about/phillip.png';


const About = () => {

    return (
        <>
            <div className="top-level-div">
                <div className="main-container">

                    <h1>About Us</h1>

                    <div className="row">
                        {/* Top half of page */}
                        <div className="col">
                            {/* ------------------------------------- */}
                            <div className="aboutMe">
                                <h2>Austin</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam corrupti iste, earum nulla ut! Dignissimos accusamus dolorum omnis, aperiam distinctio maiores commodi officia. Rerum quaerat deleniti culpa eius dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam corrupti iste, earum nulla ut! Dignissimos accusamus dolorum omnis, aperiam distinctio maiores commodi officia. Rerum quaerat deleniti culpa eius dolor.</p>
                            </div>
                            {/* ------------------------------------- */}
                            <img src={Austin} alt="Austin" />
                            <img src={JohnG} alt="JohnG" />
                            {/* **************************************** */}
                            <div className="aboutMe">
                                <h2>John G.</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam corrupti iste, earum nulla ut! Dignissimos accusamus dolorum omnis, aperiam distinctio maiores commodi officia. Rerum quaerat deleniti culpa eius dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam corrupti iste, earum nulla ut! Dignissimos accusamus dolorum omnis, aperiam distinctio maiores commodi officia. Rerum quaerat deleniti culpa eius dolor.</p>
                            </div>
                            {/* **************************************** */}
                        </div>
                     
                        {/* Bootom half of page */}
                        <div className="col">
                            {/* ------------------------------------- */}
                            <div className="aboutMe">
                                <h2>John H.</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam corrupti iste, earum nulla ut! Dignissimos accusamus dolorum omnis, aperiam distinctio maiores commodi officia. Rerum quaerat deleniti culpa eius dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam corrupti iste, earum nulla ut! Dignissimos accusamus dolorum omnis, aperiam distinctio maiores commodi officia. Rerum quaerat deleniti culpa eius dolor.</p>
                            </div>
                            {/* ------------------------------------- */}
                            <img src={JohnH} alt="JohnH" />
                            <img src={Phillip} alt="Phillip" />
                            {/* **************************************** */}
                            <div className="aboutMe">
                                <h2>Phillip</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam corrupti iste, earum nulla ut! Dignissimos accusamus dolorum omnis, aperiam distinctio maiores commodi officia. Rerum quaerat deleniti culpa eius dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam corrupti iste, earum nulla ut! Dignissimos accusamus dolorum omnis, aperiam distinctio maiores commodi officia. Rerum quaerat deleniti culpa eius dolor.</p>
                            </div>
                            {/* **************************************** */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;