import React, { useState, useEffect } from 'react';
import {Navigate, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    // Kiểm tra nếu có token trong localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // Lấy tên người dùng từ localStorage
      const userEmail = localStorage.getItem('email');
      setEmail(userEmail);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    // Xóa token và thông tin người dùng khỏi localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    setIsLoggedIn(false);
    alert('Đăng xuất thành công')
    navigate('/');
  };

  return (
    <div>
      <nav className="header">
        <div>
          <img
            className="logo"
            src="picture/3e1b693d-9dc1-43e7-b517-763a153989af-removebg-preview (2).png"
            alt=""
          />
          <b className="logo_text">Moonlight</b>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">Movies</a>
            <ul id="type-movies">
              <li>
                <a href="playing.php">Playing</a>
              </li>
              <li>
                <a href="upcoming.php">Upcoming</a>
              </li>
            </ul>
          </li>
          <li>
            <input id="search" type="text" />
            <a href="">
              <i class="fas fa-magnifying-glass"></i>
            </a>
          </li>
          {isLoggedIn ? (
            <li>
              <a id="log_out" href="#" onClick={handleLogout}>
                <div className="user-name">
                  {email} <i className="fas fa-user"></i>
                  Logout
                </div>
              </a>
            </li>
          ) : (
            <li>
              <a href="/Login">
                Login <i className="fas fa-user icon_user"></i>
              </a>
            </li>
          )}
        </ul>
        <label for="check" className="checkbtn">
          
        </label>
      </nav>

      <div className="search_site">
        <div className="search_result"></div>
      </div>
    </div>
  );
};

export default Header;
