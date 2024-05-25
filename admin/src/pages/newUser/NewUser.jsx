import React, { useContext, useState } from 'react';
import './newUser.scss';
import { UserContext } from '../../context/userContext/UserContext';
import { createUser } from '../../context/userContext/apiCalls';
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const NewUser = () => {
    const [user, setUser] = useState({});
    const [img, setImg] = useState(null);

    const [uploaded, setUploaded] = useState(0);
    const { dispatch } = useContext(UserContext);

    const handleChange = (e) => {
        const value = e.target.value
        setUser({ ...user, [e.target.name]: value });
    };

    const upload = (items) => {
        items.forEach((item) => {
            const fileName = new Date().getTime() + item.label + item.file?.name;
            const storageRef = ref(storage, `/users/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, item.file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    console.log("Upload is " + progress + "% complete...");
                },
                (err) => {
                    console.error(err)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        setUser((prev) => {
                            return { ...prev, [item.label]: url };
                        });
                        setUploaded((prev) => prev + 1);
                    });
                }
            );
        });
    };

    // const handleUpload = (e) => {
    //     e.preventDefault();

    //     upload([
    //         { file: img, label: "img" },
    //     ])
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        createUser(user, dispatch);
    };

    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New User</h1>

            <form className="newUserForm">
                <div className='newUserInputSection'>
                    <div className="newUserItem">
                        <label for="img">Image</label>
                        <input id='img' type="file" name="img" onChange={(e) => setImg(e.target.files[0])} />
                    </div>
                    <div className="newUserItem">
                        <label htmlFor="username">Username</label>
                        <input id='username' type="text" placeholder='Username' name="username" onChange={handleChange} />
                    </div>

                    <div className="newUserItem">
                        <label htmlFor="fullname">Full Name</label>
                        <input id='fullname' type="text" placeholder='Full Name' name="fullname" onChange={handleChange} />
                    </div>

                    <div className="newUserItem">
                        <label htmlFor="email">Email</label>
                        <input id='email' type="email" placeholder='anything@something.com' name="email" onChange={handleChange} />
                    </div>

                    <div className="newUserItem">
                        <label htmlFor="password">Password</label>
                        <input id='password' type="password" placeholder='Password' name="password" onChange={handleChange} />
                    </div>

                    <div className="newUserItem">
                        <label htmlFor="contact">Phone</label>
                        <input id='contact' type="text" placeholder='Phone' name="contact" onChange={handleChange} />
                    </div>

                    <div className="newUserItem">
                        <label htmlFor="address">Address</label>
                        <input id='address' type="text" placeholder='Address' name="address" onChange={handleChange} />
                    </div>

                    <div className="newUserItem">
                        <label>Gender</label>

                        <div className="newUserGender">
                            <input id='male' type="radio" name='gender' value='male' onChange={handleChange} />
                            <label for="male">Male</label>

                            <input id='female' type="radio" name='gender' value='female' onChange={handleChange} />
                            <label for="female">Female</label>

                            <input id='other' type="radio" name='gender' value='other' onChange={handleChange} />
                            <label for="other">Others</label>
                        </div>
                    </div>

                    <div className="newUserItem">
                        <label for="active">Active</label>
                        <select className='newUserSelect' name="isActive" id="active" onChange={handleChange}>
                            <option>Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className="newUserItem">
                        <label for="admin">Admin</label>
                        <select className='newUserSelect' name="isAdmin" id="admin" onChange={handleChange}>
                            <option>Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>

                <div className='newUserInputButton'>
                    {/* {uploaded === 1 ? ( */}
                        <button className="newUserButton" onClick={handleSubmit}>Create</button>
                    {/* ) : ( */}
                        {/* <button className="newUserButton" onClick={handleUpload}>Upload</button> */}
                    {/* )} */}
                </div>
            </form>
        </div>
    )
}

export default NewUser