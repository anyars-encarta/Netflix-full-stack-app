import React from 'react';
import { Visibility } from '@mui/icons-material';
import './widgetSmall.scss';

const WidgetSmall = () => {
    return (
        <div className='widgetSmall'>
            <span className="widgetSmallTitle">New Joined Members</span>
            <ul className="widgetSmallList">
                <li className='widgetSmallListItem'>
                    <img src="/images/profile.jpg" alt="" className="widgetSmallImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Anyars Yussif</span>
                        <span className="widgetSmallUserTitle">Full-stack Developer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className='widgetSmallIcon' />
                        Display
                    </button>
                </li>

                <li className='widgetSmallListItem'>
                    <img src="/images/profile.jpg" alt="" className="widgetSmallImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Anyars Yussif</span>
                        <span className="widgetSmallUserTitle">Full-stack Developer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className='widgetSmallIcon' />
                        Display
                    </button>
                </li>

                <li className='widgetSmallListItem'>
                    <img src="/images/profile.jpg" alt="" className="widgetSmallImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Anyars Yussif</span>
                        <span className="widgetSmallUserTitle">Full-stack Developer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className='widgetSmallIcon' />
                        Display
                    </button>
                </li>

                <li className='widgetSmallListItem'>
                    <img src="/images/profile.jpg" alt="" className="widgetSmallImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Anyars Yussif</span>
                        <span className="widgetSmallUserTitle">Full-stack Developer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className='widgetSmallIcon' />
                        Display
                    </button>
                </li>

                <li className='widgetSmallListItem'>
                    <img src="/images/profile.jpg" alt="" className="widgetSmallImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Anyars Yussif</span>
                        <span className="widgetSmallUserTitle">Full-stack Developer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className='widgetSmallIcon' />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSmall