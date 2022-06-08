import React from 'react';
import "./index.css"

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
          <div className="row">
            <div className="left col-lg-4">
              <div className="photo-left">
                <img className="photo" alt="" src="data:image/png;base64,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" />
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