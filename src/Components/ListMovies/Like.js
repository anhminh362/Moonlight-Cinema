import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
const Like = ({ movieId }) =>{
	// console.log(movieId);
	const [likeData, setLikeData] = useState([]);
	const [num, setNum] = useState(0);
	const [isLike, setIsLike] = useState(false);
  const [userID, setUserID] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
//   const [movies, setMovies] = useState([]);
const fetchLikeData = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/like/${id}`);
      const data = await response.json();
      console.log(data);
      setLikeData(data)
      return data;
    } catch (error) {
      console.error(error);
    }
  };
 
useEffect(() => {
    const updateNum = async () => {
      const likeDataArray = await  fetchLikeData(movieId);
      setNum(likeDataArray);
      console.log(num);
    };

    updateNum();
  }, [isLike]);
	useEffect(() => {
		const token = localStorage.getItem('token');
		// console.log(token);
		if (token) {
		  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		setIsLoggedIn(true);
		} else {
		  setIsLoggedIn(false);
		}
	}, []);
	useEffect(()=>{

	})
	const onLikeClick = () =>{
		const token = localStorage.getItem('token');
		if(isLoggedIn){

			if (isLike) {
				console.log(1);
			axios
				.post(`http://127.0.0.1:8000/api/unlike`, {
				headers: {
					Authorization: `Bearer ${token}`
				},
				movie_id: movieId
				})
				.then(response => {
				alert('Lượt thích đã được xóa khỏi cơ sở dữ liệu:');
				console.log('Lượt thích đã được xóa khỏi cơ sở dữ liệu:', response.data);
				setIsLike(false);
				//   setLike(prevLike => prevLike - 1);
				})
				.catch(error => {
				alert('Không thêm được')
				console.error('Lỗi khi xóa lượt thích khỏi cơ sở dữ liệu:', error);
				});
			} else {
				console.log(2,movieId);
			axios
				.post(`http://127.0.0.1:8000/api/like`,  {
				headers: {
					Authorization: `Bearer ${token}`
				},
				movie_id: movieId
				})
				.then(response => {
				alert('Like thành công!')
				console.log('Lượt thích đã được lưu vào cơ sở dữ liệu:', response.data);
				setIsLike(true);
				//   setLike(prevLike => prevLike + 1);
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
		// setIsLike(!isLike);
	}
	return (
		<Button onClick={onLikeClick} ariant="primary"
		className={"" + (isLike ? "text-primary": "")}  
		style={{ fontSize: '12px', width: '5.5rem', height: '2rem' }}>
			<i  className="fa fa-thumbs-up" > {num}</i>
		</Button>
	)
}
export default Like;
