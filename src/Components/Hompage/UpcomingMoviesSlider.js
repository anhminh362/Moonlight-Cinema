import React from 'react';
import { useRef, useState } from 'react';
// import Slider from "react-slick";
const Upcoming = () => {
    const scrollRef = useRef();
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleNext = () => {
        const widthItem = document.querySelector(".item2").offsetWidth;
        setScrollLeft(scrollLeft + widthItem);
        scrollRef.current.scrollLeft = scrollLeft + widthItem;
    };

    const handlePrev = () => {
        const widthItem = document.querySelector(".item2").offsetWidth;
        setScrollLeft(scrollLeft - widthItem);
        scrollRef.current.scrollLeft = scrollLeft - widthItem;
    };
    const setting = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    }
    return (
        <>
            <h5 className="text-title">Upcoming Movies</h5>
            <div className="direction">
                <button id="prev2" onClick={handlePrev}><b>{"<"}</b></button>
                <button id="next2" onClick={handleNext}><b>{">"}</b></button>
            </div>
            <div id="formlist2" ref={scrollRef}>
                <div id="list2" {...setting}>
                    <div className="item2">
                        <img src="picture/18.jpg" alt="" className="movies2"></img>
                        <div className="overlay2">
                            <h5>Động Quỷ</h5>
                            <p>
                                Action/Adventure              </p>
                            <a href="detailmovie.php?id=18"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item2">
                        <img src="picture/19.jpg" alt="" className="movies2"></img>
                        <div className="overlay2">
                            <h5>Xứ Sở Các Nguyên Tố</h5>
                            <p>
                                Horror              </p>
                            <a href="detailmovie.php?id=19"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item2">
                        <img src="picture/20.jpg" alt="" className="movies2"></img>
                        <div className="overlay2">
                            <h5>Quỳnh Hoa Nhất Dạ</h5>
                            <p>
                                Animation/Comedy              </p>
                            <a href="detailmovie.php?id=20"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item2">
                        <img src="picture/21.jpg" alt="" className="movies2"></img>
                        <div className="overlay2">
                            <h5>Quái Thú Nổi Dậy</h5>
                            <p>
                                Action/Adventure              </p>
                            <a href="detailmovie.php?id=21"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item2">
                        <img src="picture/22.jpg" alt="" className="movies2"></img>
                        <div className="overlay2">
                            <h5>Khắc Tinh Của Quỷ</h5>
                            <p>
                            </p>
                            <a href="detailmovie.php?id=22"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item2">
                        <img src="picture/23.jpg" alt="" className="movies2"></img>
                        <div className="overlay2">
                            <h5>Troll 3</h5>
                            <p>
                            </p>
                            <a href="detailmovie.php?id=23"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item2">
                        <img src="picture/24.jpg" alt="" className="movies2"></img>
                        <div className="overlay2">
                            <h5>Fast and Furiou</h5>
                            <p>
                            </p>
                            <a href="detailmovie.php?id=24"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Upcoming;