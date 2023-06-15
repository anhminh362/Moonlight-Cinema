import React from 'react';
import { useRef, useState } from 'react';

const New = () => {
    const scrollRef = useRef();
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleNext = () => {
        const widthItem = document.querySelector(".item").offsetWidth;
        setScrollLeft(scrollLeft + widthItem);
        scrollRef.current.scrollLeft = scrollLeft + widthItem;
    };

    const handlePrev = () => {
        const widthItem = document.querySelector(".item").offsetWidth;
        setScrollLeft(scrollLeft - widthItem);
        scrollRef.current.scrollLeft = scrollLeft - widthItem;
    };
    return (
        <>
            <h5 className="text-title">New</h5>
            <div className="direction">
                <button id="prev2" onClick={handlePrev}><b>{"<"}</b></button>
                <button id="next2" onClick={handleNext}><b>{">"}</b></button>
            </div>
            <div id="formlist" ref={scrollRef}>
                <div id="list">
                    <div className="item">
                        <img src="picture/4.jpg" alt="" className="movies"></img>
                        <div className="overlay">
                            <h5>The Last God Dragon</h5>
                            <p>
                                Animation/Comedy              </p>
                            <a href="detailmovie.php?id=4"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item">
                        <img src="picture/5.jpg" alt="" className="movies"></img>
                        <div className="overlay">
                            <h5>Morbius</h5>
                            <p>
                                Action/Adventure              </p>
                            <a href="detailmovie.php?id=5"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item">
                        <img src="picture/6.jpg" alt="" className="movies"></img>
                        <div className="overlay">
                            <h5>Cô Gái Từ Quá Khứ</h5>
                            <p>
                                Drama/Romance              </p>
                            <a href="detailmovie.php?id=6"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item">
                        <img src="picture/7.jpg" alt="" className="movies"></img>
                        <div className="overlay">
                            <h5>Mèo Béo Siêu Đẳng</h5>
                            <p>
                                Horror/Mystic              </p>
                            <a href="detailmovie.php?id=7"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item">
                        <img src="picture/8.jpg" alt="" className="movies"></img>
                        <div className="overlay">
                            <h5>Harry Potter</h5>
                            <p>
                                Fsychology              </p>
                            <a href="detailmovie.php?id=8"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item">
                        <img src="picture/9.jpg" alt="" className="movies"></img>
                        <div className="overlay">
                            <h5>Em Của Thời Niên Thiếu</h5>
                            <p>
                                Horror              </p>
                            <a href="detailmovie.php?id=9"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>
                    <div className="item">
                        <img src="picture/10.jpg" alt="" className="movies"></img>
                        <div className="overlay">
                            <h5>Vong Nhi</h5>
                            <p>
                                Science fiction/Action              </p>
                            <a href="detailmovie.php?id=10"><button type="button" className="btn btn-success">More Details</button></a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default New;