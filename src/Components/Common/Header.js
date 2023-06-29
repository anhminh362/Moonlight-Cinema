import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './Search';

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [email, setEmail] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		// Check if there is a token in localStorage
		const token = localStorage.getItem('token');
		if (token) {
			// Get the user's email from localStorage
			const userEmail = localStorage.getItem('email');
			setEmail(userEmail);
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, []);

	const handleLogout = () => {
		// Remove the token and user information from localStorage
		localStorage.removeItem('token');
		localStorage.removeItem('email');
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
								<a href="/playing">Playing</a>
							</li>
							<li>
								<a href="/upcoming">Upcoming</a>
							</li>
						</ul>
					</li>
					<li>
						<div className="search_site" style={{ display: "flex" }} onClick={handleOutsideClick}>
							<div className="search_result"><Search /></div>
							<a href="">
								<i className="fas fa-magnifying-glass"></i>
							</a>
						</div>

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
				<label htmlFor="check" className="checkbtn"></label>
			</nav>
		</div>
	);
};

export default Header;
