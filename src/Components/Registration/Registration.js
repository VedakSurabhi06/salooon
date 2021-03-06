import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { users } from '../../utils/users';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = e => {
    setSuccess(false);
    e.preventDefault();
    if (!email || !password) {
      setFormError('Please enter valid details');
      return;
    } else {
      setFormError('');
    }
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
        <p style={{ color: 'red' }}>{formError}</p>
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
