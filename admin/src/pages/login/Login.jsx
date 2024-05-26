import { useContext, useState } from 'react';
import './login.scss';
import { AuthContext } from '../../context/authContext/AuthContext';
import { login } from '../../context/authContext/apiCalls';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isFetching, dispatch } = useContext(AuthContext);

  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  const handleLogin = (e) => {
    e.preventDefault();

    login({ email, password }, dispatch);
  };

  return (
    <div className='login'>
      {!user ? (
        <>
          <form className="loginForm">
            <input type="email" placeholder='Email' className="loginInput" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' className="loginInput" onChange={(e) => setPassword(e.target.value)} />
            <button className='loginButton' onClick={handleLogin} disabled={isFetching}>
              {isFetching ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <span className='noAccount'>
            Dont have an account? &nbsp;
            <Link to='/newUser'>Register</Link>
          </span>
        </>
      ) : (
        <span className='noAccount'>
          Login successful. Go to &nbsp;
          <Link to='/'>Home</Link>
          &nbsp; page.
        </span>
      )}
    </div>
  )
}

export default Login