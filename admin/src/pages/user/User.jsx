import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish
} from '@mui/icons-material';

import './user.scss';
import { UserContext } from '../../context/userContext/UserContext';
import axios from 'axios';


const SingleUser = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const userId = pathname.split('/').pop();
  const [user, setUser] = useState(location.state?.user || null);


  const [img, setImg] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const { dispatch } = useContext(UserContext);

  const fetchUserById = async (movieId) => {
    try {
      const res = await axios.get(`http://localhost:8800/api/users/find/${userId}`, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }
      });

      return res.data;

    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (!user) {
      fetchUserById(userId).then(fetchedUser => setUser(fetchedUser));
    }
  }, [userId, user]);

  console.log("I can see the user: ", user);

  const createdAtDate = new Date(user?.createdAt);
  const formattedDate = createdAtDate.toLocaleDateString();

  console.log(formattedDate);

  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser/" className='link'>
          <button className="userAddButton">Create</button>
        </Link>

      </div>

      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="/images/profile.jpg" alt="" className="userShowImg" />

            <div className="userShowTopTitle">
              <span className="userShowUsername">{user?.username}</span>
              <span className="userShowTitle">Full-stack Developer</span>
            </div>
          </div>

          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>

            <div className="userShowInfo">
              <PermIdentity className='userShowIcon' />
              <span className="userShowInfoTitle">{user?.username}</span>
            </div>

            <div className="userShowInfo">
              <CalendarToday className='userShowIcon' />
              <span className="userShowInfoTitle">{formattedDate}</span>
            </div>

            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className='userShowIcon' />
              <span className="userShowInfoTitle">+233 24 211 9972</span>
            </div>

            <div className="userShowInfo">
              <MailOutline className='userShowIcon' />
              <span className="userShowInfoTitle">{user?.email}</span>
            </div>

            <div className="userShowInfo">
              <LocationSearching className='userShowIcon' />
              <span className="userShowInfoTitle">Kumasi | Ghana</span>
            </div>
          </div>
        </div>

        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>

          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label htmlFor="username">Username</label>
                <input
                  id='username'
                  type="text"
                  placeholder='encarta'
                  className='userUpdateInput' 
                  value={user?.username}
                  />
              </div>

              <div className="userUpdateItem">
                <label htmlFor="fullname">Full Name</label>
                <input
                  id='fullname'
                  type="text"
                  placeholder='John Doe'
                  className='userUpdateInput' 
                  />
              </div>

              <div className="userUpdateItem">
                <label htmlFor="email">Email</label>
                <input
                  id='email'
                  type="email"
                  placeholder='johndoe@gmail.com'
                  className='userUpdateInput' 
                  value={user?.email}
                  />
              </div>

              <div className="userUpdateItem">
                <label htmlFor="phone">Phone</label>
                <input
                  id='phone'
                  type="text"
                  placeholder='+233 24 211 9972'
                  className='userUpdateInput' />
              </div>

              <div className="userUpdateItem">
                <label htmlFor="address">Address</label>
                <input
                  id='address'
                  type="text"
                  placeholder='Kumasi | Ghana'
                  className='userUpdateInput' />
              </div>
            </div>

            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className='userUpdateImg' src="/images/profile.jpg" alt="" />
                <label htmlFor="file"><Publish className='userUpdateIcon' /></label>
                <input id='file' type="file" style={{ display: 'none' }} />
              </div>

              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SingleUser