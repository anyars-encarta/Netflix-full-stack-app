import React, { useContext } from 'react';
import './topbar.scss';
import {
    NotificationsNone,
    Language,
    Settings,
    ArrowDropDown
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const Topbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.reload();
        navigate('/login');
    };

    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className='logo'>Encarta Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <Settings />
                    </div>


                    <div className="profile">
                        <img src="./images/profile.jpg" alt="" className="topAvatar" />
                        <ArrowDropDown className='icon' />
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={handleLogout}>
                                <Link to="/" className='link'>
                                    Logout
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
