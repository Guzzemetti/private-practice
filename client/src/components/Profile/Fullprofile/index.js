import React, { useEffect } from 'react';
import "./index.css"
import tempPic from '../../../assets/blank-profile-picture-973460__340.webp';

// import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import Auth from "../../../utils/auth";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { QUERY_ME } from '../../../utils/queries';
// import Auth  from '../../../utils/auth';

const Fullprofile = () => {


  const { loading, data } = useQuery(
    // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
    QUERY_ME
  );

  useEffect(() => {
    console.log(data);
  }, [data])

  const user = data?.me || {};

  return (
    <section>
      {loading ?
        (
          <div>Loading...</div>
        ) : (
          <>
            <div className="container">
              <div className="profile-header">
              </div>
              <main className='main-holds-left-right'>
                <div className="row margin-0">
                  <div className="left">
                    <div className="photo-left">
                      <img className="photo" alt="temp propfile pic" src={tempPic} />
                    </div>
                    <h4 className="name">Hello, {user.firstname} {user.lastname}</h4>
                    <p className="info">MERN stack developer</p>
                    <p className="info">{user.email}</p>
                    <p className="desc">{user.aboutMe}</p>
                  </div>
                </div>
                {user.lessons.map((lessons) => {
                  return (
                    <div className='card-center-lessons'>
                      <Card className="card-margin-top">
                        <CardBody className='card-body-margin'>
                          <CardTitle tag="h5">
                            {/* Replace with dynamic title */}
                            <h3>Title:   <b>{lessons.title}</b></h3>
                            <p>{lessons.coach}</p>
                          </CardTitle>
                          {/* This might not be needed */}
                          <CardSubtitle className="mb-2 text-muted" tag="h6">
                            {lessons.category}
                            {lessons.subcategory}
                          </CardSubtitle>
                          <CardText className="card-text-with-img">
                            <div className="card-text-side">
                              {lessons.description}
                            </div>
                            <div className="card-img-side">
                              <p>Price: {lessons.price}</p>
                            </div>
                          </CardText>
                          {/* <button className="card-button">Add to Cart</button> */}
                        </CardBody>
                      </Card>
                    </div>
                  )
                })}

              </main>
            </div>

          </>
        )}
    </section>
  )
}

export default Fullprofile