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
                <div className="main-containerz">
                    <h1>About Us</h1>
                    <div className="row">
                        <div className="col">
                            <div className="aboutMe">
                                <div className="aboutText">
                                    <h3>Austin</h3>
                                    <img src={Austin} className="aboutMe-img" alt="Austin" />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam corrupti iste, earum nulla ut! Dignissimos accusamus dolorum omnis, aperiam distinctio maiores commodi officia. Rerum quaerat deleniti culpa eius dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam corrupti iste, earum nulla ut! Dignissimos accusamus dolorum omnis, aperiam distinctio maiores commodi officia. Rerum quaerat deleniti culpa eius dolor.</p>
                                    {/* ------------------------------------------ */}
                                    <h3>John G.</h3>
                                    <img src={JohnG} className="aboutMe-img" alt="JohnG" />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam corrupti iste, earum nulla ut! Dignissimos accusamus dolorum omnis, aperiam distinctio maiores commodi officia. Rerum quaerat deleniti culpa eius dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam corrupti iste, earum nulla ut! Dignissimos accusamus dolorum omnis, aperiam distinctio maiores commodi officia. Rerum quaerat deleniti culpa eius dolor.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="aboutMe">
                                <div className="aboutText">
                                    <h3>John H.</h3>
                                    <img src={JohnH} className="aboutMe-img" alt="JohnH" />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam corrupti iste, earum nulla ut! Dignissimos accusamus dolorum omnis, aperiam distinctio maiores commodi officia. Rerum quaerat deleniti culpa eius dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam corrupti iste, earum nulla ut! Dignissimos accusamus dolorum omnis, aperiam distinctio maiores commodi officia. Rerum quaerat deleniti culpa eius dolor.</p>
                                    {/* ------------------------------------------ */}
                                    <h3>Phillip</h3>
                                    <img src={Phillip} className="aboutMe-img" alt="Phillip" />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam corrupti iste, earum nulla ut! Dignissimos accusamus dolorum omnis, aperiam distinctio maiores commodi officia. Rerum quaerat deleniti culpa eius dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam corrupti iste, earum nulla ut! Dignissimos accusamus dolorum omnis, aperiam distinctio maiores commodi officia. Rerum quaerat deleniti culpa eius dolor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;