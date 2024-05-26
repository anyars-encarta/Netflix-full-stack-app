import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.scss';
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleStart = () => {
        setEmail(emailRef.current.value)
    };

    const handleFinish = async (e) => {
        e.preventDefault()
        setUsername(usernameRef.current.value);
        setPassword(passwordRef.current.value);

        try {
            await axios.post("http://localhost:8800/api/auth/register", { email, username, password });
            navigate('/login');
        } catch (e) {
            console.error(e)
        }
    };

    return (
        <div className='register'>
            <div className="top">
                <div className="wrapper">
                    <img
                        className='logo'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <button className="loginButton">
                        <Link to="/login" className='link'>
                            Sign In
                        </Link>
                    </button>
                </div>
            </div>

            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>

                {!email ? (
                    <div className="input">
                        <input type="email" placeholder='Email address' ref={emailRef} />
                        <button className="registerButton" onClick={handleStart}>Get started</button>
                    </div>
                ) : (
                    <form className="input">
                        <input type="text" placeholder='Username' ref={usernameRef} onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" placeholder='Password' ref={passwordRef} onChange={(e) => setPassword(e.target.value)} />
                        <button
                            className="registerButton"
                            onClick={handleFinish}>
                            {password === '' ? (
                                'Start'
                            ) : (
                                <Link to="/" className='link'>
                                    Start
                                </Link>
                            )}
                        </button>
                    </form>
                )}

            </div>
        </div>
    )
}

export default Register