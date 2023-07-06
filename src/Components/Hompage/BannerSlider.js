import React, { useState, useEffect } from "react";
import "./Homepage.css";

const Banner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movie")
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div>
      <div id="slider" className="carousel carousel-light slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {movies.map((movie, index) => index < 3 && (
            <div key={movie.id} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="3000">
              <div className="img" style={{ backgroundImage: `url(../picture/${movie.avatar})`, backgroundSize: 'cover' }}></div>
              <div className="carousel-caption d-none d-md-block">
                <h3 className="text-movie">{movie.name}</h3>
                <p className="text-movies">{movie.description}<br />
                  <a href={`/Detail/${movie.id}`}></a>
                </p>
              </div>
            </div>
          ))}
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
  );
};

export default Banner;
