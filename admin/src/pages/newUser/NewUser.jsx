import React from 'react';
import './newUser.scss';

const NewUser = () => {
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New User</h1>

            <form className="newUserForm">
                <div className='newUserInputSection'>
                    <div className="newUserItem">
                        <label htmlFor="username">Username</label>
                        <input id='username' type="text" placeholder='Username' />
                    </div>

                    <div className="newUserItem">
                        <label htmlFor="fullname">Full Name</label>
                        <input id='fullname' type="text" placeholder='Full Name' />
                    </div>

                    <div className="newUserItem">
                        <label htmlFor="email">Email</label>
                        <input id='email' type="email" placeholder='anything@something.com' />
                    </div>

                    <div className="newUserItem">
                        <label htmlFor="password">Password</label>
                        <input id='password' type="password" placeholder='Password' />
                    </div>

                    <div className="newUserItem">
                        <label htmlFor="phone">Phone</label>
                        <input id='phone' type="text" placeholder='Phone' />
                    </div>

                    <div className="newUserItem">
                        <label htmlFor="address">Address</label>
                        <input id='address' type="text" placeholder='Address' />
                    </div>

                    <div className="newUserItem">
                        <label>Gender</label>

                        <div className="newUserGender">
                            <input id='male' type="radio" name='gender' value='male' />
                            <label for="male">Male</label>

                            <input id='female' type="radio" name='gender' value='female' />
                            <label for="female">Female</label>

                            <input id='other' type="radio" name='gender' value='other' />
                            <label for="other">Others</label>
                        </div>
                    </div>

                    <div className="newUserItem">
                        <label for="active">Active</label>
                        <select className='newUserSelect' name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>

                <div className='newUserInputButton'>
                    <button className="newUserButton">Create</button>
                </div>
            </form>
        </div>
    )
}

export default NewUser