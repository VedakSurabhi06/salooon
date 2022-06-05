import './login.css';
import { Link } from 'react-router-dom';
import { users } from '../../utils/users';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [formError, setFormError] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    // for (let i = 0; i <= users.length; i++) {
    //   if (users[i].email === email && users[i].password === password) {
    //     navigate('/');
    //   }
    // }
    if (!email || !password) {
      setFormError('Please enter valid details');
      return;
    } else {
      setFormError('');
    }
    users.map(user => {
      if (user.email === email && user.password === password) {
        navigate('/');
      } else {
        setFormError('Please enter valid Details');
      }
    });
  };

  return (
    <div className="login-main">
      <div className="login">
        <span className="loginTitle">Login</span>
        <p style={{ color: 'red' }}>{formError}</p>
        <form className="loginForm">
          <label>Email</label>
          <input
            className="loginInput"
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email..."
          />

          <label>Password</label>
          <input
            className="loginInput"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password..."
          />

          <button className="loginButton" onClick={handleLogin}>
            Login
          </button>
        </form>
        <span>Dont have an Account?</span>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
