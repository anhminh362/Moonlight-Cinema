import React from "react";
import { useState, useEffect, useRef } from 'react';


const OtherSlider = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // fetch("http://localhost:3000/products")
        fetch("https://63aa9cf0fdc006ba6046fb1c.mockapi.io/movie")
            .then(response => response.json())
            .then(movie => setMovies(movie));
    }, []);

    const scrollRef = useRef();
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleNext = () => {
        const widthItem = document.querySelector(".item").offsetWidth;
        setScrollLeft(scrollLeft + widthItem);
        scrollRef.current.scrollLeft = scrollLeft + widthItem;
    };

    const handlePrev = () => {
        const widthItem = document.querySelector(".item").offsetWidth;
        setScrollLeft(scrollLeft - widthItem);
        scrollRef.current.scrollLeft = scrollLeft - widthItem;
    };
    return (
        <div>
            <h4 class="new-item">Latest Episodes</h4>
            <div className="direction">
                <button id="prev2" onClick={handlePrev}><b>{"<"}</b></button>
                <button id="next2" onClick={handleNext}><b>{">"}</b></button>
            </div>
            <div id="formlist" ref={scrollRef}>
                <div id="list">
                    {movies.map((movie, index) => index < 5 && (
                        <>
                            <div className="item">
                                <img src={movie.avatar} alt={movie.avatar} className="movies"></img>
                                <div className="overlay">
                                    <h5>{movie.name}</h5>
                                    <p>
                                        {movie.category} </p>
                                    <a href=""><button type="button" className="btn btn-success">More Details</button></a>
                                </div>
                            </div>

                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OtherSlider;