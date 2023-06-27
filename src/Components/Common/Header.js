import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [email, setEmail] = useState('');
	const navigate = useNavigate();
	const [searchValue, setSearchValue] = useState('');
	const [searchResults, setSearchResults] = useState([]);

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

	const handleSearch = async () => {
		try {
			// Gửi yêu cầu tìm kiếm đến API
			const response = await axios.get(`http://127.0.0.1:8000/api/movie?q=${searchValue}`);
			// Lưu kết quả tìm kiếm vào state
			setSearchResults(response.data.results);
		} catch (error) {
			console.error('Error searching:', error);
		}
	};


	const handleResultClick = (result) => {
		// Chuyển hướng đến trang chi tiết khi bấm vào kết quả
		navigate(`/detail/${result.id}`);
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
						<input
							id="search"
							type="text"
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
						/>
						<a href="#" onClick={handleSearch}>
							<i className="fas fa-magnifying-glass"></i>
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
