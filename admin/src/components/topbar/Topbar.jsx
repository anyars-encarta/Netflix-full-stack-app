import React from 'react';
import './topbar.scss';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

const Topbar = () => {
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

                <img src="./images/profile.jpg" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar
