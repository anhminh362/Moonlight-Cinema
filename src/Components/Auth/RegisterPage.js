import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import '../../Styles/global.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const emailParam = searchParams.get('email');
    setEmail(emailParam);
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors(errors.filter((error) => error !== 'Please enter a valid email address'));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors(errors.filter((error) => error !== 'Password must be at least 8 characters and contain special characters'));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setErrors(errors.filter((error) => error !== 'The password confirmation does not match'));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = [];

    if (!validateEmail(email)) {
      validationErrors.push('Please enter a valid email address');
    }

    if (!validatePassword(password)) {
      validationErrors.push('Password must be at least 8 characters and contain special characters');
    }

    if (password !== confirmPassword) {
      validationErrors.push('The password confirmation does not match');
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const checkEmailExists = await axios.get(`https://647783419233e82dd53bc684.mockapi.io/mypham/account?email=${email}`);

      if (checkEmailExists.data.length > 0) {
        validationErrors.push('Email already exists');
        setErrors(validationErrors);
        return;
      }

      const newUser = {
        email,
        password,
      };

      await axios.post('https://647783419233e82dd53bc684.mockapi.io/mypham/account', newUser);

      await axios.post('https://647783419233e82dd53bc684.mockapi.io/mypham/account', { email });

      alert('Registration successful. Please check your email for verification.');

      navigate(`/VerifyCode?email=${encodeURIComponent(email)}`);
    } catch (error) {
      console.error(error);
      alert('An error occurred while registering. Please try again.');
    }
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(password);
  };

  return (
    <div className="form-register">
      <form onSubmit={handleFormSubmit}>
        <h1>Register</h1>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
           
            value={email}
            onChange={handleEmailChange}
          />
          {errors.includes('Please enter a valid email address') && (
            <p className="error-message">Please enter a valid email address</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            name="pwd"
            required
            minLength={8}
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.includes('Password must be at least 8 characters and contain special characters') && (
            <p className="error-message">Password must be at least 8 characters and contain special characters</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="confirm-pwd">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="cf_pwd"
            name="cf_pwd"
            required
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {errors.includes('The password confirmation does not match') && (
            <p className="error-message">The password confirmation does not match</p>
          )}
        </div>
        {errors.includes('Email already exists') && (
          <p className="error-message">Email already exists</p>
        )}
        <button type="submit" className="btn btn-default btn__register" name="btn">
          Register
        </button>
        <p>
          <a href="/Login/">LoginForm</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
