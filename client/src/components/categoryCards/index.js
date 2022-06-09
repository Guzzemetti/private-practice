import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './category.css';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
// import { Link } from "react-router-dom";
import tempPic from '../../assets/blank-profile-picture-973460__340.webp';
// import Cat1 from '../../assets/bg_gaming.jpg';

// import LogoHeader from '../../assets/Private Practice-logos_transparent.png';
//  title, description, price, coach, review, subcategory
const Category = ({ category }) => {
    if (!category) {
        return <h3>No Lessons</h3>;
    }
    // In Category page Map over everything and pass props to get all the instances of whats here from the DB
    // Img height is in px might have to chnage to make it more dynamic
    return (

        <section className="section-hold-all-caetgories-options">
            <div className="category-header-with-img">
                <h1>The Category they choose</h1>
            </div>
            <div className="holds-cards">
                {category &&
                    category.map((category) => (
                        <Card className="card-margin-top">
                            <CardBody>
                                <CardTitle tag="h5">
                                    {/* Replace with dynamic title */}
                                    {category.subcategory.lessons.title} 
                                    {category.subcategory.lessons.coach}
                                    {category.subcategory.lessons.price}
                                </CardTitle>
                                {/* This might not be needed */}
                                <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    {category.subcategory.lessons.category}
                                    {category.subcategory.lessons.subcategory}
                                </CardSubtitle>
                                <CardText className="card-text-with-img">
                                    <div className="card-text-side">
                                        {category.subcategory.lessons.description}
                                    </div>
                                    <div className="card-img-side">
                                        <img src={tempPic} className='img-width-for-profile' alt='Profile img'></img>
                                    </div>
                                </CardText>
                                <button className="card-button">Add to Cart</button>
                            </CardBody>
                        </Card>
                    ))}
            </div>

        </section>
    )
}


export default Category;