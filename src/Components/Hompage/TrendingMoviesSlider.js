import React from 'react';
import { useRef, useState } from 'react';

const Trend = () => {
    const scrollRef = useRef();
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleNext = () => {
        const widthItem = document.querySelector(".item1").offsetWidth;
        setScrollLeft(scrollLeft + widthItem);
        scrollRef.current.scrollLeft = scrollLeft + widthItem;
    };

    const handlePrev = () => {
        const widthItem = document.querySelector(".item1").offsetWidth;
        setScrollLeft(scrollLeft - widthItem);
        scrollRef.current.scrollLeft = scrollLeft - widthItem;
    };
    return (
        <>
            <h5 className="text-title">Trending</h5>
            <div className="direction">
                <button id="prev1" onClick={handlePrev}><b>{"<"}</b></button>
                <button id="next1" onClick={handleNext}><b>{">"}</b></button>
            </div>
            <div id="formlist1" ref={scrollRef}>
                <div id="list1">
                    <div className="item1">
                        <img src="picture/11.jpg" alt="" className="movies1"></img>
                        <div className="overlay1">
                            <h5>Tri Kỷ</h5>
                            <p>
                                Science fiction/Action              </p>
                            <a href="detailmovie.php?id=11"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item1">
                        <img src="picture/12.jpg" alt="" className="movies1"></img>
                        <div className="overlay1">
                            <h5>Đảo Tội Ác</h5>
                            <p>
                                History/Fsychology              </p>
                            <a href="detailmovie.php?id=12"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item1">
                        <img src="picture/13.jpg" alt="" className="movies1"></img>
                        <div className="overlay1">
                            <h5>Trận Chiến Thời Tiền Sử</h5>
                            <p>
                                Horror              </p>
                            <a href="detailmovie.php?id=13"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item1">
                        <img src="picture/14.jpg" alt="" className="movies1"></img>
                        <div className="overlay1">
                            <h5>Moonfall</h5>
                            <p>
                                Science fiction/Adventure              </p>
                            <a href="detailmovie.php?id=14"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item1">
                        <img src="picture/15.jpg" alt="" className="movies1"></img>
                        <div className="overlay1">
                            <h5>Babylon</h5>
                            <p>
                                Horror              </p>
                            <a href="detailmovie.php?id=15"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item1">
                        <img src="picture/16.jpg" alt="" className="movies1"></img>
                        <div className="overlay1">
                            <h5>M3gan</h5>
                            <p>
                                Animation/Comedy              </p>
                            <a href="detailmovie.php?id=16"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item1">
                        <img src="picture/17.jpg" alt="" className="movies1"></img>
                        <div className="overlay1">
                            <h5>Dune 2</h5>
                            <p>
                                History              </p>
                            <a href="detailmovie.php?id=17"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Trend;