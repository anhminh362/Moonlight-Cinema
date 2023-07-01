import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Like = ({ movieId, userId }) => {
	const [liked, setLiked] = useState(false);
	const [likeCount, setLikeCount] = useState(0);
	const [loggedIn, setLoggedIn] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		checkUserLike();
	}, []);

	const checkUserLike = () => {
		fetch(`http://127.0.0.1:8000/api/like/${movieId}/user/${userId}`)
			.then(response => response.json())
			.then(data => {
				if (data.liked) {
					setLiked(true);
				}
				setLikeCount(data.likeCount);
			})
			.catch(error => {
				console.error('Lỗi khi kiểm tra user like:', error);
			});
	};

	const handleLike = () => {
		if (loggedIn) {
			if (liked) {
				fetch(`http://127.0.0.1:8000/api/like/${movieId}/user/${userId}`, {
					method: 'DELETE',
				})
					.then(response => response.json())
					.then(data => {
						if (data.success) {
							setLiked(false);
							setLikeCount(prevCount => prevCount - 1);
						} else {
							console.error('Lỗi khi xóa like từ API:', data.error);
						}
					})
					.catch(error => {
						console.error('Lỗi khi gửi yêu cầu xóa like:', error);
					});
			} else {
				fetch(`http://127.0.0.1:8000/api/like/${movieId}/user/${userId}`, {
					method: 'POST',
				})
					.then(response => response.json())
					.then(data => {
						if (data.success) {
							setLiked(true);
							setLikeCount(prevCount => prevCount + 1);
						} else {
							console.error('Lỗi khi thêm like vào API:', data.error);
						}
					})
					.catch(error => {
						console.error('Lỗi khi gửi yêu cầu thêm like:', error);
					});
			}
		} else {
			alert('Bạn cần đăng nhập để thực hiện like.');
			navigate('/Login');
		}
	};

	return (
		<button className="like-button" onClick={handleLike}>
			<FontAwesomeIcon
				icon={faThumbsUp}
				className={liked ? 'like-icon active' : 'like-icon'}
			/>
			<span className="like-count"> {likeCount}</span>
		</button>
	);
};

export default Like;
