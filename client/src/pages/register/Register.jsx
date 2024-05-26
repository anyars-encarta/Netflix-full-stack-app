import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './register.scss';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    };

    const handleFinish = () => {
        setPassword(passwordRef.current.value)
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