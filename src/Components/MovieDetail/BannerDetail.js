import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const BannerDetail = () => {
    const { id } = useParams();
        const [movie, setMovie] = useState({});
        const [cats, setCats] = useState([]);
        const [movieCats, setMovieCats] = useState([]);

        useEffect(() => {
            fetch(`http://127.0.0.1:8000/api/movie/${id}`)
            .then(response => response.json())
            .then(movieData => setMovie(movieData));
        }, [id]);

        useEffect(() => {
            fetch("http://127.0.0.1:8000/api/cat")
            .then(response => response.json())
            .then(catData => setCats(catData));
        }, []);

        useEffect(() => {
            fetch("http://127.0.0.1:8000/api/movieCat")
            .then(response => response.json())
            .then(movieCatsData => setMovieCats(movieCatsData));
        }, []);
    return (
        <div>

            <div class="container" style={{ backgroundImage: `url('../picture/${movie.avatar}')`}}>
                {/* <br></br><br></br><br></br><br></br><br></br><br></br> */}
                <div class="row" style={{ marginTop: 3 + "em" }}>

                    <div class="col-sm-5">
                        <img class="card-item" src={`../picture/${movie.avatar}`} alt=""></img>
                    </div>
                    <div class="col-sm-5">
                        <h1 class="title-film">{movie.name}</h1>
                        <div class="row">
                            <div class="col-sm-3">

                                <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-regular-straight/css/uicons-regular-straight.css"></link>
                                <i class="fi fi-rs-star"> 7.4</i>
                            </div>
                            <div class="col-sm-3">
                                <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-bold-rounded/css/uicons-bold-rounded.css"></link>
                                <i class="fi fi-br-clock-five">
                                    unknown
                                </i>
                            </div>
                            <div class="col-sm-3">
                                <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"></link>
                                <i class="fi fi-rr-social-network"> 90</i>
                            </div>
                            <div class="col-sm-3">
                                <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-solid-straight/css/uicons-solid-straight.css"></link>
                                <i class="fi fi-ss-calendar"> {movie.premiere_date}</i>
                            </div>
                        </div>
                        <br></br>
                        <div class="row"><p class="text-detail">
                                {movie.description}
                            </p>
                        </div> <br></br><br></br><br></br>
                        <div class="row">
                            <div class="col-sm-4">
                                <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css"></link>
                                <i class="fi fi-sr-flag-alt"> Country</i>
                            </div>
                            <div class="col-sm-4">
                                <button class="contry-item">{movie.country}</button>
                            </div>
                            <div class="col-sm-4">
                                {/* <!--  --> */}
                            </div>
                        </div> <br></br><br></br>
                        <div class="row">
                            <div class="col-sm-4">
                                <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-solid-straight/css/uicons-solid-straight.css"></link>
                                <i class="fi fi-ss-tags"> Genres</i>
                            </div>
                            <div class="col-sm-6">
                                {cats.map((cat, index) => (
                                movieCats.map((movieCat) => (
                                    movieCat.movie_id === movie.id && movieCat.cat_id === cat.id && (
                                    <p variant="primary" className="mr-1" key={index}>
                                    {cat.name}
                                    </p>
                                    )
                                     ))
                                     ))}
                                </div>

                            <div class="col-sm-2">
                                {/* <!--  --> */}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4"><br></br><br></br>
                                <a href={`/Bookticket/${movie.id}`} class="book-btn">Book now</a>
                            </div>
                            <div class="col-sm-8">
                                {/* <!--  --> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-1"> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        {/* <!-- traller film --> */}
                        <div class="play-btn" onclick="playVideo('https://youtu.be/gq2xKJXYZ80')">
                            <ion-icon name="play-circle" role="img" class="md hydrated"></ion-icon>
                        </div>
                    </div><div class="col-sm-1"><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <h5 class="watch-trailer">{movie.trailer}</h5>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default BannerDetail;