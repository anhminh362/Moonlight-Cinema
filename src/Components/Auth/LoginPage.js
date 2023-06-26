import React, { useState } from 'react';
import axios from 'axios';
import { json, useNavigate } from 'react-router-dom';
import '../Auth/login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('email:', email);
    console.log('Password:', password);
  
    try {
      const response = await axios.post('http://localhost:8000/api/Login', {
        email,
        password,
      });
    
      const { token, account } = response.data;
    
      console.log('Checking token:', token);
      if (!token) {
        throw new Error('Không tìm thấy tài khoản, vui lòng đăng nhập lại và tạo tài khoản mới');
      }
    
      // Lưu token vào localStorage
      localStorage.setItem('token', token);
    
      // Lưu thông tin người dùng vào localStorage
      localStorage.setItem('account', JSON.stringify(account));
      // Gửi token với mỗi lần gọi API sau này
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
      // Chuyển hướng đến trang Home
      alert('Đăng nhập thành công');
      navigate('/');
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
    
  };
  
  return (
    <div className='body'>
      <div className="form-login">
        <form onSubmit={handleSubmit}>
          <h1>
            <strong>Login</strong>
          </h1>
          <div className="form-group">
            <label htmlFor="username">Email</label> <br />
            <div className="form-input">
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="Type your email"
                value={email}
                onChange={handleEmailChange}
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
                <a href="/">Home</a>
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
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
