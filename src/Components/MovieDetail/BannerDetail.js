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
            <div className="container" style={{ backgroundImage: `url('../picture/${movie.avatar} ')`, Opacity: 0.2, backgroundRepeat: "no-repeat",backgroundSize: "cover",height:"700px",width:"100%"}}>
                {/* <br></br><br></br><br></br><br></br><br></br><br></br> */}
                <div className="row" style={{ marginTop: 3 + "em" }}>

                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <img className="card-item" src={`../picture/${movie.avatar}`} alt=""></img>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12">
                        <h1 className="title-film">{movie.name}</h1>
                        <div className="row"style={{display:'flex',alignItems:'center'}}>
                            <div className="col-6 col-md-3" style={{marginBottom:'1,5 rem '}}>

                                <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-regular-straight/css/uicons-regular-straight.css"></link>
                                <i className="fi fi-rs-star"> 7.4</i>
                            </div>
                            <div className="col-6 col-md-3" style={{marginBottom:'1,5 rem'}}>
                                <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-bold-rounded/css/uicons-bold-rounded.css"></link>
                                <i className="fi fi-br-clock-five">
                                    unknown
                                </i>
                            </div>
                            <div className="col-6 col-md-3" style={{marginBottom:'1,5 rem'}}>
                                <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"></link>
                                <i className="fi fi-rr-social-network"> 90</i>
                            </div>
                            <div className="col-6 col-md-3"style={{marginBottom:'2 rem'}}>
                                <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-solid-straight/css/uicons-solid-straight.css"></link>
                                <i className="fi fi-ss-calendar"> {movie.premiere_date}</i>
                            </div>
                        </div>
                        <br></br>
                        <div className="row"><p className="text-detail">
                                {movie.description}
                            </p>
                        </div> <br></br><br></br><br></br>
                        <div className="row" style={{display:'flex',alignItems:'center'}}>
                            <div  className="col-sm-4 col-md-4" style={{marginBottom:'0'}}>
                                <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css"></link>
                                <i className="fi fi-sr-flag-alt"> Country</i>
                            </div>
                            <div className="col-sm-8 col-md-8" style={{display:'flex',alignItems:'center'}}>
                                <button className="contry-item">{movie.county}</button>
                            </div>
                            {/* <div className="col-sm-4">
                             
                            </div> */}
                        </div> <br></br>
                        <div className="row">
                            <div className="col-sm-4 col-md-4">
                                <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-solid-straight/css/uicons-solid-straight.css"></link>
                                <i className="fi fi-ss-tags"> Genres:</i>
                            </div>
                            <div className="col-sm-8 col-md-8" style={{display:'flex'}}>
                                {cats.map((cat, index) => (
                                movieCats.map((movieCat) => (
                                    movieCat.movie_id === movie.id && movieCat.cat_id === cat.id && (
                                    <p variant="primary" classNameName="mr-1" key={index}>
                                    {cat.name}   /
                                    </p>
                                    )
                                     ))
                                     ))}
                                </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 col-md-4"><br></br><br></br>
                                <a href={`/Bookticket/${movie.id}`} className="book-btn">Book now</a>
                            </div>
                            <div className="col-sm-8  col-md-8">
                                {/* <!--  --> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1"> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        {/* <!-- traller film --> */}
                        {/* <div className="play-btn" onclick="playVideo('https://youtu.be/gq2xKJXYZ80')">
                            <ion-icon name="play-circle" role="img" className="md hydrated"></ion-icon>
                        </div> */}
                    </div><div className="col-sm-1"><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <h5 className="watch-trailer"></h5>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default BannerDetail;