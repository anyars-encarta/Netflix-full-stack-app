import { useContext, useState } from 'react';
import './login.scss';
import { AuthContext } from '../../context/authContext/AuthContext';
import { login } from '../../context/authContext/apiCalls';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isFetching, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    login({ email, password }, dispatch);
    navigate('/');
  };

  return (
    <div className='login'>
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
    </div>
  )
}

export default Login