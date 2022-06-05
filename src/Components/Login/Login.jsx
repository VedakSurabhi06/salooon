import './login.css';
import { Link } from 'react-router-dom';
import { users } from '../../utils/users';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    users.map(user => {
      if (user.email === email && user.password === password) {
        navigate('/');
      }
    });
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
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
  );
};

export default Login;
