import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';
import { logout } from '../../context/authContext/AuthActions';
import './topbar.scss';
import {
    NotificationsNone,
    Language,
    Settings,
    ArrowDropDown,
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const Topbar = () => {
    const { user, dispatch } = useContext(AuthContext);
    
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
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
                        <img src={user.profilePicture || "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"} alt="" className="topAvatar" />
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
