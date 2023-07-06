import React, { useEffect, useState } from 'react';
import { Badge, Button, Card, Container, Row } from 'react-bootstrap';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import Like from '../Like';

const Playing = ({ movieId, userId }) => {
 
  const [movies, setMovies] = useState([]);
  const [cats, setCats] = useState([]);
  const [movieCats, setMovieCats] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const movieResponse = await fetch("http://127.0.0.1:8000/api/movie");
      const catResponse = await fetch("http://127.0.0.1:8000/api/cat");
      const movieCatResponse = await fetch("http://127.0.0.1:8000/api/movieCat");

      const movieData = await movieResponse.json();
      const catData = await catResponse.json();
      const movieCatData = await movieCatResponse.json();

      setMovies(movieData);
      setCats(catData);
      setMovieCats(movieCatData);
    } catch (error) {
      console.error(error);
    }
  };
  
  const getMovieCats = (movieId) => {
    const movieCat = movieCats
      .filter((item) => item.movie_id === movieId)
      .map((item) => item.cat_id);

    return cats
      .filter((cat) => movieCat.includes(cat.id))
      .map((cat) => cat.name);
  };
 
  
 
  const isPlaying = (premiereDate) => {
    const now = new Date().toISOString().split("T")[0];
    return premiereDate <= now;
  };

  const playingMovies = movies.filter((movie) => isPlaying(movie.premiere_date));

  return (
    <div>
      <Header/>
        <div style={{ paddingTop:'80px',backgroundImage: 'linear-gradient(to right, rgba(0, 0, 6, 1), rgba(0, 0, 0, 0.3))' }}>
            <div style={{ borderBottom: '1px solid rgb(216, 216, 191)' }}>
                <p style={{ position: 'relative', fontSize: '17px', margin: '8px', paddingLeft: '7rem' }}>
                <a href="/"><i className="fa-sharp fa-solid fa-house" style={{ color: 'rgb(216, 216, 191)' }}></i></a>
                <i className="fa-solid fa-chevron-right" style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', color: '#7c2f33' }}></i>
                <span><a href="/" style={{ color: 'rgb(216, 216, 191)', textDecoration: 'none' }}>Movie</a></span>
                <i className="fa-solid fa-chevron-right" style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', color: '#7c2f33' }}></i>
                <span><a href="#" style={{ color: 'rgb(216, 216, 191)' }}><b>Playing</b></a></span>
                </p>
            </div>
            <Container style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 6, 1), rgba(0, 0, 0, 0.3))' }}>
                <Row>
                {/* <h3>Playing Movies</h3> */}
                </Row>
                <br />
                <Row>
                { playingMovies.map((movie,index) =>(
                    <div className="col-md-3" key={movie.id}>
                    <Card style={{ width: '260px', background: 'rgba(0, 0, 0, 0.3)' }}>
                        <Card.Img variant="top" src={`../picture/${movie.avatar}`} style={{ width: '100%', height: '145.35px' }} />
                        <Card.Body>
                        <Card.Title>{movie.name}</Card.Title>
                        
                        <Card.Text>
                            {getMovieCats(movie.id).map((cat_name, index) => index < 3 && (
                            <Badge variant="primary" className="mr-1" key={index}>
                                {cat_name}
                            </Badge>
                            ))}
                        </Card.Text>
                        <p>
                            <Like movieId={movie.id} />
                            <span>
                            <a href={`/Detail/${movie.id}`} className="btn btn-success" style={{ marginLeft: '25px', height: '2.2rem', fontSize: '1px' }}>
                                More Details
                            </a>
                            </span>
                        </p>
                        </Card.Body>
                    </Card>
                    <br />
                    </div>
                ))}
                </Row>
            </Container>
        </div>
        <Footer/>
    </div> 
  );
};

export default Playing;

