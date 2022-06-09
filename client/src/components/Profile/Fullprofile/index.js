import React from 'react';
import "./index.css"
import tempPic from '../../../assets/blank-profile-picture-973460__340.webp';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_USER } from '../../../utils/queries';
import Auth  from '../../../utils/auth';

const Fullprofile = () => {

  const { userId } = useParams();

  const { loading, data } = useQuery( 
    // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
    QUERY_SINGLE_USER, {
    // pass URL parameter
    variables: { userId: userId },
  });

  const user = data?.user || {};  

   // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  //  const user = data?.me || data?.user || {};

   // Use React Router's `<Navigate />` component to redirect to personal profile page if username is yours
  // if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
  //   return <Navigate to="/profile" />;
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container">
        <div className="profile-header">
        </div>
        <main>
          <div className="row margin-0">
            <div className="left col-lg-4">
              <div className="photo-left">
                <img className="photo" alt="" src={tempPic}/>
              </div>
              <h4 className="name">Hello, {user.firstname} {user.lastname}</h4>
              <p className="info">MERN stack developer</p>
              <p className="info">{user.email}</p>
              <p className="desc">{user.aboutMe}</p>
            </div>
          </div>
        </main>
      </div>

    </>
  )
}

export default Fullprofile