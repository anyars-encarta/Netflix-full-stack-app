import './login.scss';

const Login = () => {
  return (
    <div className='login'>
        <form className="loginForm">
            <input type="email" placeholder='Email' className="loginInput" />
            <input type="password" placeholder='Password' className="loginInput" />
        </form>
    </div>
  )
}

export default Login