import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const Like = ({ movieId }) => {
	// console.log(movieId);
	const [like, setLike] = useState(0);
	const [isLike, setIsLike] = useState(false);
	const [userID, setUserID] = useState(0);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [movies, setMovies] = useState([]);
	useEffect( () => {
		const token = localStorage.getItem('token');
		if (token) {
					// console.log(token);
					axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
					axios.get(`http://localhost:8000/api/user`)
					.then(response => {
					// Xử lý phản hồi từ API
					console.log(response.data.id);
					
					// setAccountID(response.data.id);
					// console.log(accountID);
				})
					
					// fetchUser(accountID)
					
			setIsLoggedIn(true);
			// console.log('accountID',accountID);
	
	  } else {
		setIsLoggedIn(false);
	  }
  
	//   fetchLikeStatus();
	  
	}, []);
	// useEffect( async () => {
	// 	if(accountID){
	// 		console.log(accountID);

	// 		try {
	// 	  let res = await axios.post(`http://127.0.0.1:8000/api/user/${accountID}`);
	// 	  console.log(11,res.data); // Handle response data
	// 	} catch (error) {
	// 	  console.error(error); // Handle error if any
	// 	}}
	//   }, []);
	const fetchLikeData = async () => {
		try {
			const response = await fetch(`http://127.0.0.1:8000/api/like/${movieId}`);
			const data = await response.json();
			setLike(data)
			return data; // Thêm return ở đây
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(()=>{
		fetchLikeData();
		console.log(movieId);
	},[])
	
	const saveLike = () => {
	  const token = localStorage.getItem('token');
	//   console.log(token);
	//   console.log(userID);
	//   console.log(movieId);
	  if (token) {const requestData = { movie_id: movieId, user_id: userID };
	  if (isLike) {
		axios
		  .delete(`http://127.0.0.1:8000/api/unlike/${movieId}`, {
			headers: {
			  Authorization: `Bearer ${token}`
			},
			data: requestData
		  })
		  .then(response => {
			alert('Lượt thích đã được xóa khỏi cơ sở dữ liệu:');
			console.log('Lượt thích đã được xóa khỏi cơ sở dữ liệu:', response.data);
			setIsLike(false);
			setLike(prevLike => prevLike - 1);
		  })
		  .catch(error => {
			alert('Không thêm được')
			console.error('Lỗi khi xóa lượt thích khỏi cơ sở dữ liệu:', error);
		  });
	  } else {
		axios
		  .post(`http://127.0.0.1:8000/api/like/${movieId}`, requestData, {
			headers: {
			  Authorization: `Bearer ${token}`
			}
		  })
		  .then(response => {
			alert('Like thành công!')
			console.log('Lượt thích đã được lưu vào cơ sở dữ liệu:', response.data);
			setIsLike(true);
			setLike(prevLike => prevLike + 1);
		  })
		  .catch(error => {
			alert('Không like được báo lỗi!')
			console.error('Lỗi khi lưu lượt thích vào cơ sở dữ liệu:', error);
		  });
	  }
	} else {
	  alert('Bạn chưa đăng nhập vui lòng đăng nhập hoặc đăng ký để thực hiện chức năng này.');
	  window.location.href = '/Login';
	}
  };
  
  
	const onLikeClick = () =>{
		setLike(like + (isLike ? -1: 1));
		setIsLike(!isLike);
	}
  return (
	<div>
		<i  className="fa fa-thumbs-up" onClick={saveLike}> {like}</i>
	{/* <button onClick={saveLike}>{isLike ? 'Unlike' : 'Like'}{movies.id}</button> */}
  </div>
  );
  };
  
export default Like;
