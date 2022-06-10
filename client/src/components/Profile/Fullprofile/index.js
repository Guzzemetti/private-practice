import React, {useEffect} from 'react';
import "./index.css"
import tempPic from '../../../assets/blank-profile-picture-973460__340.webp';

// import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import Auth from "../../../utils/auth";

import { QUERY_ME } from '../../../utils/queries';
// import Auth  from '../../../utils/auth';

const  Fullprofile = () => {


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
              <div className='right-side-profile'>
                <h4 className="name">Your lessons...</h4>
                <p className="desc">{user.lessons}</p>
              </div>
            </main>
          </div>

        </>
      )}
    </section>
  )
}

export default Fullprofile