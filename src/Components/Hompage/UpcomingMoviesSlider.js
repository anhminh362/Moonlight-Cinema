import React from 'react';

import { useState, useEffect, useRef } from 'react';

const Upcoming = () => {
    const [movies, setMovies] = useState([]);
    const [cats, setCat] = useState([]);
    const [movieCats, setMovieCats] = useState([]);

    useEffect(() => {
        // Lấy danh sách phim từ API
        fetch("http://127.0.0.1:8000/api/movie")
          .then(response => response.json())
          .then(movie => setMovies(movie));
      }, []);
    
      useEffect(() => {
        // Lấy danh sách thể loại từ API
        fetch("http://127.0.0.1:8000/api/cat")
          .then(response => response.json())
          .then(cat => setCat(cat));
      }, []);
    
      useEffect(() => {
        // Lấy danh sách liên kết phim-thể loại từ API
        fetch("http://127.0.0.1:8000/api/movieCat")
          .then(response => response.json())
          .then(movieCat => setMovieCats(movieCat));
      }, []);

      const getMovieCats = (movieId) => {
        // Lấy danh sách thể loại cho phim dựa trên movieId
        const movieCat = movieCats
          .filter(item => item.movie_id === movieId)
          .map(item => item.cat_id);
    
        return cats
          .filter(cat => movieCat.includes(cat.id))
          .map(cat => cat.name);
      };

    const scrollRef = useRef();
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleNext = () => {
        const widthItem = document.querySelector(".item2").offsetWidth;
        setScrollLeft(scrollLeft + widthItem);
        scrollRef.current.scrollLeft = scrollLeft + widthItem;
    };

    const handlePrev = () => {
        const widthItem = document.querySelector(".item2").offsetWidth;
        setScrollLeft(scrollLeft - widthItem);
        scrollRef.current.scrollLeft = scrollLeft - widthItem;
    };
    const setting = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    }

    return (
        <>
            <h5 className="text-title">Upcoming Movies</h5>
            <div className="direction">
                <button id="prev2" onClick={handlePrev}><b>{"<"}</b></button>
                <button id="next2" onClick={handleNext}><b>{">"}</b></button>
            </div>

            <div id="formlist2" ref={scrollRef}>
                <div id="list2" {...setting}>
                    {movies.map((movie, index) => index >12 && index <18 && (
                        <>
                            <div className="item2">
                                <img src={`../picture/${movie.avatar}`} alt={`../picture/${movie.avatar}`} className="movies2" />
                                <div className="overlay2">
                                    <h5>{movie.name}</h5>
                                    <p>{getMovieCats(movie.id).join('/')} </p>
                                    <a href="detailmovie.php?id=18"><button type="button" className="btn btn-success">More Details</button></a>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Upcoming;