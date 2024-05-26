import {
    Search,
    Notifications,
    ArrowDropDown
} from '@mui/icons-material';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.scss';
import { AuthContext } from '../../context/authContext/AuthContext';
import { logout } from '../../context/authContext/AuthActions';

const user = JSON.parse(localStorage.getItem("user"));
console.log("From App.js: ", user)

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { dispatch } = useContext(AuthContext);
    // const navigate = useNavigate();

    window.onscroll = () => {
        setScrolled(window.scrollY === 0 ? false : true)

        return () => window.onscroll = null
    }

    const handleLogout = () => {
        // localStorage.removeItem('user');
        dispatch(logout())
        // navigate('/login');
    };

    return (
        <div className={scrolled ? 'navbarContainer scrolled' : 'navbarContainer'}>
            <div className="container">
                <div className="left">
                    <img
                        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"}
                        alt=""
                    />
                    <Link to="/" className='link'>
                        <span>
                            Homepage
                        </span>
                    </Link>
                    <Link to="/series" className='link'>
                        <span className='offRespon'>
                            Series
                        </span>
                    </Link>
                    <Link to="/movies" className='link'>
                        <span className='offRespon'>
                            Movies
                        </span>
                    </Link>
                    <span>New and Popular</span>
                    <Link to="/lists" className='link'>
                        <span>
                            My List
                        </span>
                    </Link>
                </div>

                <div className="right">
                    <Search className='icon' />
                    <span>KID</span>
                    <Notifications className='icon' />
                    <img src={user.img || "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"} alt="" />

                    <div className="profile">
                        <ArrowDropDown className='icon' />
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={handleLogout}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar