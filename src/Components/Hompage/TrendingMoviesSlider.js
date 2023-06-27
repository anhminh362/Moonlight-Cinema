import React from 'react';
import { useState, useEffect, useRef } from 'react';
const Trend = () => {

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
        const widthItem = document.querySelector(".item1").offsetWidth;
        setScrollLeft(scrollLeft + widthItem);
        scrollRef.current.scrollLeft = scrollLeft + widthItem;
    };

    const handlePrev = () => {
        const widthItem = document.querySelector(".item1").offsetWidth;
        setScrollLeft(scrollLeft - widthItem);
        scrollRef.current.scrollLeft = scrollLeft - widthItem;
    };

    return (
        <>
            <h5 className="text-title">Trending</h5>
            <div className="direction">
                <button id="prev1" onClick={handlePrev}><b>{"<"}</b></button>
                <button id="next1" onClick={handleNext}><b>{">"}</b></button>
            </div>

            <div id="formlist1" ref={scrollRef}>
                <div id="list1">
                    {movies.map((movie, index) => index >=3 &&  index <=7  &&(
                        <>
                            <div className="item1" key={movie.id}>
                                <img src={`../picture/${movie.avatar}`} alt={`../picture/${movie.avatar}`} className="movies1" />
                                <div className="overlay1">
                                    <h5>{movie.name}</h5>
                                    <p>{getMovieCats(movie.id).join('/')}</p>  
                                    <a href={`/Detail/${movie.id}`}><button type="button" className="btn btn-success">More Details</button></a>
                                </div>
                            </div>

                        </>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Trend;