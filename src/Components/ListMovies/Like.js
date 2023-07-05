import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const Like = ({ movieId }) => {
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [userID, setUserID] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
	const [cats, setCats] = useState([]);
  const [num, setNum] = useState(0);
  useEffect(() => {
		const updateNum = async () => {
			if (movies) {
				const likeDataArray = await Promise.all(
					movies.slice(0, 13).map((movie) => fetchLikeData(movie.id))
				);
				setNum(likeDataArray);
				console.log(num);
			}
		};

		updateNum();
	}, [movies]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.get('http://localhost:8000/api/users')
        .then(response => {
          const { user_id, email, name } = response.data;
          setIsLoggedIn(true);
          setUserID(user_id);
          localStorage.setItem('user_id', user_id);
        })
        .catch(error => {
          console.error(error);
          setIsLoggedIn(false);
        });
    } else {
      setIsLoggedIn(false);
    }

    fetchLikeStatus();
    decodeTokenAndSetUserId();
  }, []);
  const fetchLikeData = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/like/${id}`);
      const data = await response.json();
      return data; // Thêm return ở đây
    } catch (error) {
      console.error(error);
    }
  };
  const decodeTokenAndSetUserId = () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        // Decode the token
        const decodedToken = jwt_decode(token);
        
        // Get the user_id from the decoded token
        const userId = decodedToken.user_id;
        
        // Update the userID state
        setUserID(userId);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    } else {
      console.log('Token not found');
    }
  };
  

  const fetchLikeStatus = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get(`http://127.0.0.1:8000/api/movies/${movieId}/liked`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setIsLike(response.data.is_liked);
        setUserID(response.data.user_id); // Set the userID state here
      }
    } catch (error) {
      console.error('Lỗi khi lấy trạng thái like:', error);
    }
  };
  const fetchUser = () => {
		fetch("http://127.0.0.1:8000/api/users")
			.then(response => response.json())
			.then(user => {
				setUserID(user.id);
				setIsLoggedIn(true); // Đánh dấu là đã đăng nhập thành công
			})
			.catch(error => console.error('Lỗi khi lấy thông tin người dùng:', error));
	};
  const saveLike = () => {
    const token = localStorage.getItem('token');
    console.log(token);
    console.log(userID);
    console.log(movieId);
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


return (
  <div>
  <button onClick={saveLike}>{isLike ? 'Unlike' : 'Like'}{movies.id}</button>
</div>
);
};

export default Like;