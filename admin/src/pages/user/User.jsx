import React from 'react';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material';

import './user.scss';
import { Link } from 'react-router-dom';

const SingleUser = () => {
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
              <span className="userShowUsername">John Doe</span>
              <span className="userShowTitle">Full-stack Developer</span>
            </div>
          </div>

          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>

            <div className="userShowInfo">
              <PermIdentity className='userShowIcon' />
              <span className="userShowInfoTitle">johndoe</span>
            </div>

            <div className="userShowInfo">
              <CalendarToday className='userShowIcon' />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>

            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className='userShowIcon' />
              <span className="userShowInfoTitle">+233 24 211 9972</span>
            </div>

            <div className="userShowInfo">
              <MailOutline className='userShowIcon' />
              <span className="userShowInfoTitle">johndoe@gmail.com</span>
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
                  className='userUpdateInput' />
              </div>

              <div className="userUpdateItem">
                <label htmlFor="fullname">Full Name</label>
                <input
                  id='fullname'
                  type="text"
                  placeholder='John Doe'
                  className='userUpdateInput' />
              </div>

              <div className="userUpdateItem">
                <label htmlFor="email">Email</label>
                <input
                  id='email'
                  type="email"
                  placeholder='johndoe@gmail.com'
                  className='userUpdateInput' />
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