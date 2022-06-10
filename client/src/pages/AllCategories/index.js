import React, { useEffect } from 'react';
import "./style.css"
import "../HomePage/index.css"
// import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
// import CategoryCard from '../categoryCards/index';
import { QUERY_ALL_LESSONS } from '../../utils/queries';
import HomeImageBanner from '../../assets/categoryphotos/HomeBackground.jpg';
import CategoryDropdown from '../../components/CategoryDropdown';


var imageStyle = {
    backgroundImage: `url(${HomeImageBanner})`
};

export const AllCategories = () => {
    //   const { lesson } = useParams();

    const { loading, data } = useQuery(QUERY_ALL_LESSONS);

    // useEffect(() => {
    //     console.log(data);
    // }, [data])

    const lessons = data?.lessons || {};

    return (
        <section>
            {loading ?
                (
                    <div>Loading...</div>
                ) : (
                    <>
                        <CategoryDropdown />
                        <section>
                            <div className='div-image-header' >
                                {/* {userSelection} */}
                                <div style={imageStyle} className='Home-banner-category-page'>
                                    <h1 className="categoryTitle">All Lessons</h1>
                                </div>
                            </div>
                            {/* <div className='cat-title'>
                                {/* Make dynamic
                            </div> */}
                            <div className='header-center-lesson'>
                                <h3>All Lessons</h3>
                            </div>
                            {lessons?.map((lesson) => {
                                { console.log(lesson.subcategory); }
                                return (
                                    <div className='category-card-lessonss' key={lesson._id}>
                                        <Card className="card-margin-top">
                                            <CardBody className='card-body-margin'>
                                                <CardTitle tag="h5">
                                                    {/* Replace with dynamic title */}
                                                    <h3>Title:   <b>{lesson.title}</b></h3>
                                                    {lesson.coach.map((coach) => <p>{coach.firstname} {coach.lastname}</p>)}
                                                </CardTitle>
                                                {/* This might not be needed */}
                                                <CardText className="card-text-with-img">
                                                    <div className="card-text-side">
                                                        <p>{lesson.description}</p>
                                                    </div>
                                                    <div className="card-img-side">
                                                        <p>Price: {lesson.price}</p>
                                                    </div>
                                                </CardText>
                                                {/* <button className="card-button">Add to Cart</button> */}
                                            </CardBody>
                                        </Card>
                                    </div>
                                )
                            })}
                        </section>
                    </>
                )}
        </section>
    )
}

export default AllCategories;