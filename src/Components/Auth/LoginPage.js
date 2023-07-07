import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
      const response = await axios.post('http://127.0.0.1:8000/api/Login', {  // Updated endpoint to lowercase 'login'
        email,
        password,
      });
  
      const { token,account,  user_id } = response.data;  // Updated response data to match Laravel's response
  
      console.log('Checking token:', token);
      if (!token) {
        throw new Error('Không tìm thấy tài khoản,');
      }
  
      // Lưu token vào localStorage
      localStorage.setItem('token', token);
  
      // Lưu user ID vào localStorage
      localStorage.setItem('user_id', user_id);  
      // Updated key to match Laravel's response
      console.log(user_id);
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
    <div >
      <div className="container" style={{ background:'#06121E' }}>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div>
              <form style={{ background:'#fff' ,borderRadius:'15px' }} onSubmit={handleSubmit}>
                <h1 style={{ color:'#000000' }}>
                  <strong>Login</strong>
                </h1>
                <div className="form-group">
                  <label style={{ color:'#000000' }} htmlFor="username">Email</label> <br />
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
                  <label style={{ color:'#000000' }} htmlFor="pwd">Password</label>
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
                  <div className="row" style={{ margin:'auto' }}>
                    <div className="col-12 col-sm-4">
                      <p>
                        <a href="/Register/">Register</a>
                      </p>
                    </div>
                    <div className="col-12 col-sm-4">
                      <p>
                        <a href="/">Home</a>
                      </p>
                    </div>
                    <div className="col-12 col-sm-4">
                      <p>
                        <a href="" >Forgot password?</a>
                      </p>
                    </div>
                  </div>
                </div>


                <button type="submit" className="btn btn-primary" name="btn">
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
        </div>
      </div>
    </div>
  );
  
};

export default LoginForm;
