import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import { users } from '../../utils/users';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const handleRegister = e => {
    e.preventDefault();
    users.push({
      email,
      password,
    });
    setSuccess(true);
  };

  return (
    <div>
      <div className="login">
        {success && (
          <p style={{ color: 'green' }}>{'New user successfully created'}</p>
        )}
        <span className="loginTitle">Register</span>
        <form className="loginForm">
          <label>Email</label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="loginInput"
            type="email"
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
          <button className="loginButton" onClick={handleRegister}>
            Register
          </button>
        </form>
        <span>Already have an account?</span>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register;
