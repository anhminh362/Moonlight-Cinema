import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Search from './Search';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.get('http://localhost:8000/api/user')
        .then(response => {
          const { user_id, email, name } = response.data;
          setEmail(email);
          setName(name);
          setIsLoggedIn(true);
          localStorage.setItem('user_id', user_id);
        })
        .catch(error => {
          console.error(error);
          setIsLoggedIn(false);
        });
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('user_id');
    setIsLoggedIn(false);
    alert('Logged out successfully');
    navigate('/');
  };

  const handleOutsideClick = (event) => {
    const searchSite = document.querySelector('.search_site');
    if (!searchSite.contains(event.target)) {
      searchSite.classList.add('display_none');
    }
  };

  return (
    <div>
      <nav className="header">
        <div>
          <img
            className="logo"
            src="../picture/3e1b693d-9dc1-43e7-b517-763a153989af-removebg-preview (2).png"
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
                <a href="/Playing">Playing</a>
              </li>
              <li>
                <a href="/Upcoming">Upcoming</a>
              </li>
            </ul>
          </li>
          <li>
            <div className="search_site" style={{ display: 'flex' }} onClick={handleOutsideClick}>
              <div className="search_result">
                <Search />
              </div>
              <a href="#">
                <i className="fas fa-magnifying-glass"></i>
              </a>
            </div>
          </li>
          {isLoggedIn ? (
            <li>
              <a id="log_out" href="#" onClick={handleLogout}>
                <div className="user-name">
                  <i className="fas fa-user"></i>
                  {name}Logout
                </div>
              </a>
            </li>
          ) : (
            <li style={{ marginLeft: '15rem' }}>
              <a href="/Login">
                Login <i className="fas fa-user icon_user"></i>
              </a>
            </li>
          )}
        </ul>
        <label htmlFor="check" className="checkbtn"></label>
      </nav>
    </div>
  );
};

export default Header;
