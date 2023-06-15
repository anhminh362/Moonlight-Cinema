import React from 'react';
import { useState,useEffect } from 'react';

const Upcoming = () => {
    // document.getElementById('next2').onclick = function () {
    //     const widthItem = document.querySelector('.item2').offsetWidth;
    //     document.getElementById('formlist2').scrollLeft += widthItem;
    // }
    // document.getElementById('prev2').onclick = function () {
    //     const widthItem = document.querySelector('.item2').offsetWidth;
    //     document.getElementById('formlist2').scrollLeft -= widthItem;
    // }
    // const [formlist1ScrollLeft, setFormlist1ScrollLeft] = useState(0);
    // const handleNext1Click = () => {
    //     const widthItem = document.querySelector('.item2').offsetWidth;
    //     setFormlist1ScrollLeft(formlist1ScrollLeft + widthItem);
    // };

    // const handlePrev1Click = () => {
    //     const widthItem = document.querySelector('.item2').offsetWidth;
    //     setFormlist1ScrollLeft(formlist1ScrollLeft - widthItem);
    // };
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      // fetch("http://localhost:3000/products")
      fetch("https://63aa9cf0fdc006ba6046fb1c.mockapi.io/movie")
        .then(response => response.json())
        .then(movie => setMovies(movie));
    }, []);

    return (
        <>
            <h5 className="text-title">Upcoming Movies</h5>
            <div id="formlist2">
                <div className="direction2">
                <button id="prev2"><b>{ "<"}</b></button>
                <button id="next2"><b>{ ">"}</b></button>
            </div>
                <div id="list2">
                {movies.map((movie, index) => index < 5 && (
                <>
                    <div className="item2">
                        <img src={movie.avatar} alt={movie.avatar} className="movies2"></img>
                        <div className="overlay2">
                            <h5>{movie.name}</h5>
                            <p>
                                {movie.category} </p>
                            <a href="detailmovie.php?id=18"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    </>
            ))}
                    {/* <div className="item2">
                        <img src="picture/19.jpg" alt="" className="movies2"></img>
                        <div className="overlay2">
                            <h5>Xứ Sở Các Nguyên Tố</h5>
                            <p>
                                Horror              </p>
                            <a href="detailmovie.php?id=19"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2">
                        <img src="picture/20.jpg" alt="" className="movies2"></img>
                        <div className="overlay2">
                            <h5>Quỳnh Hoa Nhất Dạ</h5>
                            <p>
                                Animation/Comedy              </p>
                            <a href="detailmovie.php?id=20"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2">
                        <img src="picture/21.jpg" alt="" className="movies2"></img>
                        <div className="overlay2">
                            <h5>Quái Thú Nổi Dậy</h5>
                            <p>
                                Action/Adventure              </p>
                            <a href="detailmovie.php?id=21"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2">
                        <img src="picture/22.jpg" alt="" className="movies2"></img>
                        <div className="overlay2">
                            <h5>Khắc Tinh Của Quỷ</h5>
                            <p>
                            </p>
                            <a href="detailmovie.php?id=22"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2">
                        <img src="picture/23.jpg" alt="" className="movies2"></img>
                        <div className="overlay2">
                            <h5>Troll 3</h5>
                            <p>
                            </p>
                            <a href="detailmovie.php?id=23"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2">
                        <img src="picture/24.jpg" alt="" className="movies2"></img>
                        <div className="overlay2">
                            <h5>Fast and Furiou</h5>
                            <p>
                            </p>
                            <a href="detailmovie.php?id=24"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div>
                    <div className="item2"></div> */}
                </div>
            </div></>
    )
}
export default Upcoming;