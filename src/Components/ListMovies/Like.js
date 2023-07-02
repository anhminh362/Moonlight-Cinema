import React, { useState, useEffect } from 'react';

const Like = () => {
	const [like, setLike] = useState(0);
	const [isLike, setIsLike] = useState(false);
	const [movies, setMovies] = useState(null);
	const [users, setUsers] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		fetchMovie();
		fetchUser();
	}, []);

	const fetchMovie = () => {
		fetch("http://127.0.0.1:8000/api/movie")
			.then(response => response.json())
			.then(movie => {
				setMovies(movie.id);
			})
			.catch(error => console.error('Lỗi khi lấy thông tin phim:', error));
	};

	const fetchUser = () => {
		fetch("http://127.0.0.1:8000/api/users")
			.then(response => response.json())
			.then(user => {
				setUsers(user.id);
				setIsLoggedIn(true); // Đánh dấu là đã đăng nhập thành công
			})
			.catch(error => console.error('Lỗi khi lấy thông tin người dùng:', error));
	};

	const saveLike = () => {
		if (movies && users) {
		  const requestData = { 'movie_id': movies, 'user_id': users };
	  		  if (isLike) {
			// Gửi request DELETE để xóa lượt thích
			fetch("http://127.0.0.1:8000/api/like", {
			  method: 'DELETE',
			  body: JSON.stringify(requestData),
			  headers: {
				'Content-Type': 'application/json',
			  },
			})
			  .then(response => response.json())
			  .then(data => {
				console.log('Lượt thích đã được xóa khỏi cơ sở dữ liệu:', data);
			  })
			  .catch(error => {
				console.error('Lỗi khi xóa lượt thích khỏi cơ sở dữ liệu:', error);
			  });
		  } else {
			// Gửi request POST để thêm lượt thích mới
			fetch("http://127.0.0.1:8000/api/like", {
			  method: 'POST',
			  body: JSON.stringify(requestData),
			  headers: {
				'Content-Type': 'application/json',
			  },
			})
			  .then(response => response.json())
			  .then(data => {
				console.log('Lượt thích đã được lưu vào cơ sở dữ liệu:', data);
			  })
			  .catch(error => {
				console.error('Lỗi khi lưu lượt thích vào cơ sở dữ liệu:', error);
			  });
		  }
		}
	  };
	  
	  const onLikeClick = () => {
		if (isLoggedIn) {
		  setLike(like + (isLike ? -1 : 1));
		  setIsLike(!isLike);
		  saveLike();
		} else {
		  // Chuyển hướng đến trang đăng nhập khi chưa đăng nhập
		  window.location.href = "/login";
		}
	  };
	  
	
	return (
		<p className={" " + (isLike ? "text-primary" : " ")}>
			<i style={{ fontSize: '20px' }} className="fa fa-thumbs-up" onClick={onLikeClick}> {like}</i>
		</p>
	);
};

export default Like;
