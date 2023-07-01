import React, { useState, useEffect } from 'react';

const Like = () =>{
	const [like, setLike] = useState(0);
	const [isLike, setIsLike] = useState(false);

	const onLikeClick = () =>{
		setLike(like + (isLike ? -1: 1));
		setIsLike(!isLike);
	}
	return (
		<p className={"" + (isLike ? "text-primary": "")}>
			<i style={{fontSize:"20px"}} className="fa fa-thumbs-up" onClick={onLikeClick}> {like}</i>
		</p>
	)
}
export default Like;
