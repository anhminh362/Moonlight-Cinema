import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [email, setEmail] = useState('');
	const navigate = useNavigate();
	const [searchValue, setSearchValue] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			const userEmail = localStorage.getItem('email');
			setEmail(userEmail);
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, []);

	const handleLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('email');
		setIsLoggedIn(false);
		alert('Đăng xuất thành công');
		navigate('/');
	};

	const handleSearch = async () => {
		try {
			const response = await axios.get(`http://127.0.0.1:8000/api/movie?q=${searchValue}`);
			setSearchResults(response.data.results);
		} catch (error) {
			console.error('Error searching:', error);
		}
	};

	const handleResultClick = (result) => {
		navigate(`/detail/${result.id}`);
	};

	return (
		<div>
			<nav className="header">
				<div>
					<img className="logo" src="picture/3e1b693d-9dc1-43e7-b517-763a153989af-removebg-preview (2).png" alt="" />
					<b className="logo_text">Moonlight</b>
				</div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<a href="#">Movies</a>
						<ul id="type-movies">
							<li>
								<Link to="/playing">Playing</Link>
							</li>
							<li>
								<Link to="/upcoming">Upcoming</Link>
							</li>
						</ul>
					</li>
					<li>
						<input
							id="search"
							type="text"
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
						/>
						<a href="#" onClick={handleSearch}>
							<i className="fas fa-search"></i>
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
							<Link to="/login">
								Login <i className="fas fa-user icon_user"></i>
							</Link>
						</li>
					)}
				</ul>
				<label htmlFor="check" className="checkbtn"></label>
			</nav>

			<div className="search_result">
				{searchResults && searchResults.map((result) => (
					<div key={result.id} onClick={() => handleResultClick(result)}>
						{result.title}
					</div>
				))}
			</div>
		</div>
	);
};

export default Header;