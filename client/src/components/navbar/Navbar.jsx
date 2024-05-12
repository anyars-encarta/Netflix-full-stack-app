import {
    Search,
    Notifications,
    ArrowDropDown
} from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    window.onscroll = () => {
        setScrolled(window.scrollY === 0 ? false : true)

        return () => window.onscroll = null
    }

    return (
        <div className={scrolled ? 'navbarContainer scrolled' : 'navbarContainer'}>
            <div className="container">
                <div className="left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <span>
                        <Link to="/" className='link'>
                            Homepage
                        </Link>
                    </span>
                    <span>
                        <Link to="/series" className='link'>
                            Series
                        </Link>
                    </span>
                    <span>
                        <Link to="/movies" className='link'>
                            Movies
                        </Link>
                    </span>
                    <span>New and Popular</span>
                    <span>
                        <Link to="/lists" className='link'>
                            My List
                        </Link>
                    </span>
                </div>

                <div className="right">
                    <Search className='icon' />
                    <span>KID</span>
                    <Notifications className='icon' />
                    <img src="/images/profile.jpg" alt="" />

                    <div className="profile">
                        <ArrowDropDown className='icon' />
                        <div className="options">
                            <span>Settings</span>
                            <span>
                                <Link to="/login" className='link'>
                                    Logout
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar