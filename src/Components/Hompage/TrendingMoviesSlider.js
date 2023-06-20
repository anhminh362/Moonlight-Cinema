import React from 'react';
import { useState,useEffect,useRef } from 'react';
const Trend = () => {

    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/movie")
        .then(response => response.json())
        .then(movie => setMovies(movie));
    }, []);
    

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
            {movies.map((movie, index) => index < 5 && (
                <>
                <div className="item1">
                    <img src='../picture/${movie.avatar} alt=../picture/${movie.avatar}' className="movies1"></img>
                    <div className="overlay1">
                        <h5>{movie.name}</h5>
                        <p>
                            Science fiction/Action              </p>
                        <a href="detailmovie.php?id=11"><button type="button" className="btn btn-success">More Details</button></a>
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