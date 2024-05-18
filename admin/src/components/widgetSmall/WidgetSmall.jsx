import React, { useEffect, useState } from 'react';
import { Visibility } from '@mui/icons-material';
import './widgetSmall.scss';
import axios from 'axios';

const WidgetSmall = () => {
    const [newUsers, setNewUsers] = useState([]);

    const getNewUsers = async () => {
        try {
            const res = await axios.get("/users?new=true", {
                headers: {
                    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2M2Y1MTNhMTAxMmFhY2IwODY4MDM0NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNjAyNDYwMCwiZXhwIjoxNzE2NDU2NjAwfQ.rBeS1HDXljBTqgO6lSxIOxi_kRDMMY-zmpSXzGOGu6Y"
                },
            });
            console.log("Fetched Users: ", res.data);
            setNewUsers(res.data);
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getNewUsers();
    }, []);

console.log("Objected Users: ", newUsers);
    return (
        <div className='widgetSmall'>
            <span className="widgetSmallTitle">New Joined Members</span>
            <ul className="widgetSmallList">
                {newUsers && newUsers?.map(user => (
                    <li className='widgetSmallListItem' key={user._id}>
                        <img src={user.profilePicture || 'https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg'} alt="" className="widgetSmallImage" />
                        <div className="widgetSmallUser">
                            <span className="widgetSmallUsername">{user.username}</span>
                            <span className="widgetSmallUserTitle">Full-stack Developer</span>
                        </div>
                        <button className="widgetSmallButton">
                            <Visibility className='widgetSmallIcon' />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WidgetSmall