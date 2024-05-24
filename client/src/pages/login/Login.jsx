import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import './login.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSignIn = (e) => {
        e.preventDefault();

        setEmail(emailRef.current.value)
        setPassword(passwordRef.current.value)
        
        if (email !== '' && password !== '') {
            navigate('/')
        }
    };

    return (
        <div className='login'>
            <div className="top">
                <div className="wrapper">
                    <img
                        className='logo'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                </div>

                <div className="container">
                    <form>
                        <h1>Sign In</h1>
                        <input type="email" placeholder='Email or Phone number' ref={emailRef} />
                        <input type="password" placeholder='Password' ref={passwordRef} />
                        <button className="loginButton" onClick={handleSignIn}>Sign In</button>
                        <span>
                            New to Netflix?
                            <b>
                                <Link to="/" className='link'>
                                    Sign up now.
                                </Link>
                            </b>
                        </span>
                        <small>
                            This page is protected by Google reCAPTCHA to ensure you are not a bot. <b>Learn more</b>.
                        </small>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login