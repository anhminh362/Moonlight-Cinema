import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [emailSent, setEmailSent] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [verificationEmailSent, setVerificationEmailSent] = useState(false);
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
      const checkEmailExists = await axios.get(`http://127.0.0.1:8000/api/account?email=${email}`);

      if (checkEmailExists.data.length > 0) {
        validationErrors.push('Email already exists');
        setErrors(validationErrors);
        return;
      }

      const newUser = {
        email,
        password,
      };

      await axios.post('http://127.0.0.1:8000/api/account', newUser);

      setVerificationEmailSent(true);
      setIsRegistered(true);

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

  useEffect(() => {
    if (isRegistered) {
      alert('Registration successful. Please check your email for verification.');
    }
  }, [isRegistered]);

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
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
        {errors.map((error, index) => (
          <p key={index} className="error-message">{error}</p>
        ))}
      </form>
    </div>
  );
};

export default Register;

