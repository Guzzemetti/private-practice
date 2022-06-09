import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './category.css';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
// import { Link } from "react-router-dom";
import tempPic from '../../assets/blank-profile-picture-973460__340.webp';
// import Cat1 from '../../assets/bg_gaming.jpg';

// import LogoHeader from '../../assets/Private Practice-logos_transparent.png';

const Category = () => {

    // In Category page Map over everything and pass props to get all the instances of whats here from the DB
    // Img height is in px might have to chnage to make it more dynamic
    return (
        
        <section className="section-hold-all-caetgories-options">
            <div className="category-header-with-img">
                <h1>The Category they choose</h1>
            </div>
            <div className="holds-cards">
                <Card className="card-margin-top">
                    <CardBody>
                        <CardTitle tag="h5">
                            {/* Replace with dynamic title */}
                            Categories will go here
                        </CardTitle>
                        {/* This might not be needed */}
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Card subtitle
                        </CardSubtitle>
                        <CardText className="card-text-with-img">
                            <div className="card-text-side">
                                Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.  Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
                            </div>
                            <div className="card-img-side">
                                <img src={tempPic} className='img-width-for-profile' alt='Profile img'></img>
                            </div>
                        </CardText>
                        <button className="card-button">Add to Cart</button>
                    </CardBody>
                </Card>
            </div>

        </section>
    )
}


export default Category;