import React from 'react';
import { useState,useEffect } from 'react';

const New = () => {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      // fetch("http://localhost:3000/products")
      fetch("https://63aa9cf0fdc006ba6046fb1c.mockapi.io/movie")
        .then(response => response.json())
        .then(movie => setMovies(movie));
    }, []);
    return (
        <div id="formlist">
            <h5 className="text-title">New</h5>
            <div className="direction2">
                <button id="prev2"><b>{"<"}</b></button>
                <button id="next2"><b>{">"}</b></button>
            </div>
            <div id="list">
            {movies.map((movie, index) => index < 5 && (
                <>
                <div className="item">
                    <img src={movie.avatar} alt={movie.avatar} className="movies"></img>
                    <div className="overlay">
                        <h5>{movie.name}</h5>
                        <p>
                            {movie.category} </p>
                        <a href="detailmovie.php?id=4"><button type="button" className="btn btn-success">More Details</button></a>
                    </div>
                </div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                </>
            ))}
                
            </div>
        </div>
    )
}
export default New;