import React from "react";
import { useState,useEffect } from 'react';
const Banner = () => {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      // fetch("http://localhost:3000/products")
      fetch("http://127.0.0.1:8000/api/movie")
        .then(response => response.json())
        .then(movie => setMovies(movie));
    }, []);
  
    const [cats, setCats] = useState([]);
    return (
        <div>
            <div id="slider" className="carousel carousel-light slide" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#slider" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#slider" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                    <button type="button" data-bs-target="#slider" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item" data-bs-interval="3000">
                        <div className="img" style={{ backgroundImage: "url('picture/1.jpg')" }}></div>
                        <div className="carousel-caption d-none d-md-block">
                            <h3 className="text-movie">AVATAR</h3>
                            <p className="text-movies">Dòng Chảy Của Nước&nbsp;lấy bối cảnh 10 năm sau những sự kiện xảy ra ở phần đầu tiên. Phim kể câu chuyện về gia đình mới của Jake Sully (Sam Worthington thủ vai) cùng những rắc rối theo sau và bi kịch họ phải chịu đựng khi phe loài người xâm lược hành tinh Pandora.
                                <br />
                                <a className="more-details" href="detailmovie.php?id=1">More Details</a></p>
                        </div>
                    </div>
                    <div className="carousel-item active carousel-item-start" data-bs-interval="3000">
                        <div className="img" style={{ backgroundImage: "url('picture/2.jpg')" }}></div>
                        <div className="carousel-caption d-none d-md-block">
                            <h3 className="text-movie">WEDNESDAY</h3>
                            <p className="text-movies">Thông minh, hay châm chọc và "chết trong lòng" một chút, Wednesday Addams điều tra một vụ giết người liên hoàn trong khi có thêm bạn và cả kẻ thù mới ở Học viện Nevermore.
                                <br />
                                <a className="more-details" href="detailmovie.php?id=2">More Details</a></p>
                        </div>
                    </div>
                    <div className="carousel-item carousel-item-next carousel-item-start" data-bs-interval="3000">
                        <div className="img" style={{ backgroundImage: "url('picture/3.jpg')" }}></div>
                        <div className="carousel-caption d-none d-md-block">
                            <h3 className="text-movie">DEATH ON THE NILE</h3>
                            <p className="text-movies">Án Mạng Trên Sông Nile xoay quanh chuyến đi tham quan Ai Cập của thám tử Poirot. Trên chiếc du thuyền nhỏ, ông bắt gặp một cặp nam thanh nữ tú: nàng triệu phú trẻ Linnet Doyle và người chồng mới cưới Simon Doyle đang hưởng tuần trăng mật. Chuyến đi hạnh phúc của hai người bị phá hỏng bởi người tình cũ của Simon - Jacqueline de Bellefort không ngừng bám theo phá đám.
                                <br />
                                <a className="more-details" href="detailmovie.php?id=3">More Details</a></p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default Banner;