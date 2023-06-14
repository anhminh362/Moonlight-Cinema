import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Lấy email từ query param trong URL
    const searchParams = new URLSearchParams(window.location.search);
    const emailParam = searchParams.get('email');
    setEmail(emailParam);
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = [];

    // Kiểm tra tính hợp lệ của email, mật khẩu và mật khẩu xác nhận
    if (!validateEmail(email)) {
      validationErrors.push('Vui lòng nhập địa chỉ email hợp lệ');
    }

    if (!validatePassword(password)) {
      validationErrors.push('Mật khẩu phải có ít nhất 8 ký tự và chứa các ký tự đặc biệt');
    }

    if (password !== confirmPassword) {
      validationErrors.push('Xác nhận mật khẩu không khớp');
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Gửi yêu cầu đăng ký tài khoản
      const newUser = {
        email,
        password,
      };

      // await axios.post('http://127.0.0.1:8000/api/account', newUser);
      console.log(1,email);
      console.log(1,password);
      console.log(1,email);


      // Gửi email xác thực
      await axios.post('http://127.0.0.1:8000/api/register', { email,password,confirmPassword });

      alert('Đăng ký thành công. Vui lòng kiểm tra email của bạn để xác minh.');

      // Chuyển hướng đến trang VerifyCode
      navigate(`/VerifyCode?email=${encodeURIComponent(email)}`);
    } catch (error) {
      console.error(error);
      // alert('Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại.');
    }
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password) => {
    // Ví dụ: mật khẩu phải có ít nhất 8 ký tự và chứa ký tự đặc biệt
    return password.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(password);
  };

  return (
    <div className="form-register">
      <form onSubmit={handleFormSubmit} action="/verifycode">
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
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            name="password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-pwd">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirm-pwd"
            name="confirm-pwd"
            required
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        {errors.length > 0 && (
          <div className="error-message">
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        <button type="submit" className="btn btn-default btn__register" name="btn">
          Register
        </button>
        <p>
          <Link to="/login">LoginForm</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;