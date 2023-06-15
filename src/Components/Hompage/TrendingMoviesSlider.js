import React from 'react';

import { useState,useEffect } from 'react';

  
const Trend = () => {
    
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      // fetch("http://localhost:3000/products")
      fetch("https://63aa9cf0fdc006ba6046fb1c.mockapi.io/movie")
        .then(response => response.json())
        .then(movie => setMovies(movie));
    }, []);
    
    return (
        <div id="formlist1">
            <h5 className="text-title">Trending</h5>
            <div className="direction1">
                <button id="prev1"><b>{ "<"}</b></button>
                <button id="next1"><b>{">" }</b></button>
            </div>
            <div id="list1">
            {movies.map((movie, index) => index < 5 && (
                <>
                <div className="item1">
                    <img src={movie.avatar} alt={movie.avatar} className="movies1"></img>
                    <div className="overlay1">
                        <h5>{movie.name}</h5>
                        <p>
                            Science fiction/Action              </p>
                        <a href="detailmovie.php?id=11"><button type="button" className="btn btn-success">More Details</button></a>
                    </div>
                </div>
                <div className="item1"></div>
                <div className="item1"></div>
                <div className="item1"></div>
                <div className="item1"></div>
                <div className="item1"></div>
                <div className="item1"></div>
                </>
            ))}
                
            </div>

        </div>
    )
}
export default Trend;