import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../NotFound/notFound.css'

import { } from 'reactstrap';



const NotFound = () => {

    return (
        <>
            <div className="top-level-div">
                <div className="main-container hideBorder">
                    <h1>404</h1>
                    <p>We apologize for any inconvenience caused, unfortunately the page you requested is unable to be found.</p> 
                    <p>Please check the submitted URL and try again.</p>
                    <h3>😰</h3>
                </div>
            </div>
        </>
    )
}

export default NotFound;