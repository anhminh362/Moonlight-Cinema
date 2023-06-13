import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Auth/Auth.css';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Place your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="form-login">
      <form onSubmit={handleSubmit}>
        <h1>
          <strong>Login</strong>
        </h1>
        <div className="form-group">
          <label htmlFor="username">Username</label> <br />
          <div className="form-input">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Type your username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password</label>
          <br />
          <div className="form-input">
            <input
              type="password"
              className="form-control"
              id="pwd"
              name="pwd"
              placeholder="Type your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
        </div>
        <div className="form-group register">
          <div>
            <p>
              <a href="/Register/">Register</a>
            </p>
          </div>
          <div>
            <p>
              <a href="">Forgot password ?</a>
            </p>
          </div>
        </div>
        <button type="submit" className="btn btn-default" name="btn">
          LOGIN
        </button>
        <div>
          <br />
          <br />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;