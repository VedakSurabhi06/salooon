import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
const Register = () => {
  return (
    <div>
      <div className="login">
        <span className="loginTitle">Register</span>
        <form className="loginForm">
          <label>Email</label>
          <input
            className="loginInput"
            type="text"
            placeholder="Enter your email..."
          />
          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter your password..."
          />
          <button className="loginButton">Register</button>
        </form>
        <span>Already have an account?</span>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register;
