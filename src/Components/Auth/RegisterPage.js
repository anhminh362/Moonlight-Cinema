import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate, Link } from 'react-router-dom';
import '../Auth/register.css';

const Register = () => {
  const [password, setPassword] = useState('');
  const [c_password, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Lấy email từ query param trong URL
    const searchParams = new URLSearchParams(window.location.search);
    const emailParam = searchParams.get('email');
    setEmail(emailParam);
  }, []);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors([]);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors([]);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setErrors([]);
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

    if (password !== c_password) {
      validationErrors.push('Xác nhận mật khẩu không khớp');
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {

      // Gửi yêu cầu đăng ký tài khoản


      // await axios.post('http://127.0.0.1:8000/api/account', newUser);
      console.log(1,email);
      console.log(1,password);
      console.log(1,email);
 // Kiểm tra email đã tồn tại hay chưa
      const checkEmailResponse = await axios.get(`http://127.0.0.1:8000/api/check-email?email=${encodeURIComponent(email)}`);

      if (checkEmailResponse.data.exists) {
        setErrors(['Email đã tồn tại']);
        return;
      }

      // Gửi email xác thực
      await axios.post('http://127.0.0.1:8000/api/register', { email,password,c_password });
      

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
      <div >
        <div className="container" style={{ background: '#06121E',paddingTop:'100px' }} >
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form style={{ background: '#fff',borderRadius:'15px',paddingBottom:'' }}  className='form-register' onSubmit={handleFormSubmit}>
                <h1 style={{ color:' #000000' }}>Register</h1>
                <div className="form-group">
                  <label htmlFor="email" style={{ color:'#000000' }}>Email</label>
                  <div className="form-input">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                      value={email}
                        onChange={handleEmailChange}
                        placeholder="Type your email"
                        />
                      </div>
                </div>
                <div className="form-group">
                <label style={{ color:'#000000' }} htmlFor="pwd">Password</label>
                <div className="form-input">
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    name="password"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Type your password"
                  />
                </div>
              </div>
              <div className="form-group">
                <label style={{ color:'#000000' }} className="label" htmlFor="confirm-pwd">
                  Confirm Password
                </label>
                <div className="form-input">
                  <input
                    type="password"
                    className="form-control"
                    id="confirm-pwd"
                    name="confirm-pwd"
                    required
                    value={c_password}
                    onChange={handleConfirmPasswordChange}
                    placeholder="Type your confilmpassword"
                  />
                </div>
              </div>
                {errors.length > 0 && (
                  <div className="alert alert-danger">
                    {errors.map((error, index) => (
                      <p key={index}>{error}</p>
                    ))}
                  </div>
                )}
                <button type="submit"className="btn btn-primary">
                  Register
                </button>
                <p style={{ color:'#000000' }}>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

    export default Register;
    