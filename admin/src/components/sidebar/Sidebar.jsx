import React, { useState } from 'react';
import './sidebar.scss';
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className='sidebar-container'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li
                            className={activeIndex === 0 ? "sidebarListItem active" : "sidebarListItem"}
                            onClick={() => handleSelect(0)}
                        >
                            <Link to="/" className='link'>
                                <LineStyle className='sidebarIcon' />
                                Home
                            </Link>
                        </li>
                        <li
                            className={activeIndex === 1 ? "sidebarListItem active" : "sidebarListItem"}
                            onClick={() => handleSelect(1)}
                        >
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li
                            className={activeIndex === 2 ? "sidebarListItem active" : "sidebarListItem"}
                            onClick={() => handleSelect(2)}
                        >
                            <TrendingUp className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quich Menu</h3>
                    <ul className="sidebarList">
                        <li
                            className={activeIndex === 3 ? "sidebarListItem active" : "sidebarListItem"}
                            onClick={() => handleSelect(3)}
                        >
                            <Link to="/users" className='link'>
                                <PermIdentity className='sidebarIcon' />
                                Users
                            </Link>
                        </li>
                        <li
                            className={activeIndex === 4 ? "sidebarListItem active" : "sidebarListItem"}
                            onClick={() => handleSelect(4)}
                        >
                            <Link to="/products" className='link'>
                                <Storefront className='sidebarIcon' />
                                Products
                            </Link>
                        </li>
                        <li
                            className={activeIndex === 5 ? "sidebarListItem active" : "sidebarListItem"}
                            onClick={() => handleSelect(5)}
                        >
                            <AttachMoney className='sidebarIcon' />
                            Transactions
                        </li>
                        <li
                            className={activeIndex === 6 ? "sidebarListItem active" : "sidebarListItem"}
                            onClick={() => handleSelect(6)}
                        >
                            <BarChart className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li
                            className={activeIndex === 7 ? "sidebarListItem active" : "sidebarListItem"}
                            onClick={() => handleSelect(7)}
                        >
                            <MailOutline className='sidebarIcon' />
                            Mail
                        </li>
                        <li
                            className={activeIndex === 8 ? "sidebarListItem active" : "sidebarListItem"}
                            onClick={() => handleSelect(8)}
                        >
                            <DynamicFeed className='sidebarIcon' />
                            Feedback
                        </li>
                        <li
                            className={activeIndex === 9 ? "sidebarListItem active" : "sidebarListItem"}
                            onClick={() => handleSelect(9)}
                        >
                            <ChatBubbleOutline className='sidebarIcon' />
                            Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li
                            className={activeIndex === 10 ? "sidebarListItem active" : "sidebarListItem"}
                            onClick={() => handleSelect(10)}
                        >
                            <WorkOutline className='sidebarIcon' />
                            Manage
                        </li>
                        <li
                            className={activeIndex === 11 ? "sidebarListItem active" : "sidebarListItem"}
                            onClick={() => handleSelect(11)}
                        >
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li
                            className={activeIndex === 12 ? "sidebarListItem active" : "sidebarListItem"}
                            onClick={() => handleSelect(12)}
                        >
                            <Report className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
