import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../About/aboutStyle.css'

import { } from 'reactstrap';

import Austin from '../../assets/about/austin.png';
import JohnG from '../../assets/about/johnG.png';
import JohnH from '../../assets/about/johnH.png';
import Phillip from '../../assets/about/phillip.png';
import LIlogo from '../../assets/about/LinkedIn_logo.png'
import GHlogo from '../../assets/about/GitHub_logo.png'
// import { Link } from "react-router-dom";


const About = () => {

    return (
        <>
            <div className="top-level-div">
                <div className="main-containerz">
                    <h1 className="aboutNames">About The Team</h1>
                    <div className="row">
                        <div className="col">
                            <div className="aboutMe">
                                <div className="aboutText">
                                    <h3 className="aboutNames">Austin Donovan</h3>
                                    <img src={Austin} className="aboutMe-img" alt="Austin" />
                                    <p className="aboutDescriptions">Likes league. Goes to nightclubs.</p>
                                    <div className="about-linkz"><a href="https://github.com/AustinLD" rel="noreferrer" target="_blank"><img src={GHlogo} alt="link"></img></a></div>
                                    <div className="about-linkz"><a href="https://www.linkedin.com/in/austin-donovan-b39151102/" rel="noreferrer" target="_blank"><img alt="link" src={LIlogo}></img></a></div>
                                    {/* ------------------------------------------ */}
                                    <h3 className="aboutNames">John Guzzetta</h3>
                                    <img src={JohnG} className="aboutMe-img" alt="JohnG" />
                                    <p className="aboutDescriptions">Also likes league. Has cats.</p>
                                    <div className="about-linkz"><a href="https://github.com/guzzemetti" rel="noreferrer" target="_blank"><img src={GHlogo} alt="link"></img></a></div>
                                    <div className="about-linkz"><a href="https://www.linkedin.com/in/johnguzzettaiv/" rel="noreferrer" target="_blank"><img src={LIlogo} alt="link"></img></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="aboutMe">
                                <div className="aboutText">
                                    <h3 className="aboutNames">John Hysong</h3>
                                    <img src={JohnH} className="aboutMe-img" alt="JohnH" />
                                    <p className="aboutDescriptions">Does not like league. Is tall.</p>
                                    <div className="about-linkz"><a href="https://github.com/johnatticus" rel="noreferrer" target="_blank"><img src={GHlogo} alt="link"></img></a></div>
                                    <div className="about-linkz"><a href="https://www.linkedin.com/in/johnhysong/" rel="noreferrer" target="_blank"><img alt="link" src={LIlogo}></img></a></div>
                                    {/* ------------------------------------------ */}
                                    <h3 className="aboutNames">Phillip Pereira</h3>
                                    <img src={Phillip} className="aboutMe-img" alt="Phillip" />
                                    <p className="aboutDescriptions">Works out. Not sure if he likes league.</p>
                                    <div className="about-linkz"><a href="https://github.com/phillip48" rel="noreferrer" target="_blank"><img alt="link" src={GHlogo}></img></a></div>
                                    <div className="about-linkz"><a href="https://www.linkedin.com/in/phillip-pereira-719985232/" rel="noreferrer" target="_blank"><img alt="link" src={LIlogo}></img></a></div>
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