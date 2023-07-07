import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Button } from 'react-bootstrap';

const New = () => {
  const [movies, setMovies] = useState([]);
  const [cats, setCat] = useState([]);
  const [movieCats, setMovieCats] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movie")
      .then(response => response.json())
      .then(movie => setMovies(movie));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cat")
      .then(response => response.json())
      .then(cat => setCat(cat));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movieCat")
      .then(response => response.json())
      .then(movieCat => setMovieCats(movieCat));
  }, []);

  const getMovieCats = (movieId) => {
    const movieCat = movieCats
      .filter(item => item.movie_id === movieId)
      .map(item => item.cat_id);

    return cats
      .filter(cat => movieCat.includes(cat.id))
      .map(cat => cat.name);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
      <Container style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 6, 1), rgba(0, 0, 0, 0.3))',height:'auto' }}>
        <div style={{ marginTop: "2rem" }}>
          <h5 className="text-title">New</h5><br></br>
        </div>
        <Slider {...settings}>
          {movies.map((movie, index) => index > 7 && index <= 12 && (
            <div id="formlist" key={index} className="item">
              <img src={`../picture/${movie.avatar}`} alt={`../picture/${movie.avatar}`} className="movies" />
              <div className="overlay">
                <h5>{movie.name}</h5>
                <p>{getMovieCats(movie.id).join('/')}</p>
                <a href={`/Detail/${movie.id}`}><Button variant="success">More Details</Button></a>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
  );
};

export default New;
