import React from 'react';
// import { useState } from 'react';

const New = () => {
    // const [formlist2ScrollLeft, setFormlist2ScrollLeft] = useState(0);
    // const handleNext2Click = () => {
    //     const widthItem = document.querySelector('.item2').offsetWidth;
    //     setFormlist2ScrollLeft(formlist2ScrollLeft + widthItem);
    // };
    // const handlePrev2Click = () => {
    //     const widthItem = document.querySelector('.item2').offsetWidth;
    //     setFormlist2ScrollLeft(formlist2ScrollLeft - widthItem);
    // };
    return (
        <div id="formlist">
            <h5 class="text-title">New</h5>
            <div class="direction2">
                <button id="prev2"><b>{"<"}</b></button>
                <button id="next2"><b>{">"}</b></button>
            </div>
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
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item">
                    <img src="picture/5.jpg" alt="" className="movies"></img>
                    <div className="overlay">
                        <h5>Morbius</h5>
                        <p>
                            Action/Adventure              </p>
                        <a href="detailmovie.php?id=5"><button type="button" className="btn btn-success">More Details</button></a>
                    </div>
                </div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item">
                    <img src="picture/6.jpg" alt="" className="movies"></img>
                    <div className="overlay">
                        <h5>Cô Gái Từ Quá Khứ</h5>
                        <p>
                            Drama/Romance              </p>
                        <a href="detailmovie.php?id=6"><button type="button" className="btn btn-success">More Details</button></a>
                    </div>
                </div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item">
                    <img src="picture/7.jpg" alt="" className="movies"></img>
                    <div className="overlay">
                        <h5>Mèo Béo Siêu Đẳng</h5>
                        <p>
                            Horror/Mystic              </p>
                        <a href="detailmovie.php?id=7"><button type="button" className="btn btn-success">More Details</button></a>
                    </div>
                </div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item">
                    <img src="picture/8.jpg" alt="" className="movies"></img>
                    <div className="overlay">
                        <h5>Harry Potter</h5>
                        <p>
                            Fsychology              </p>
                        <a href="detailmovie.php?id=8"><button type="button" className="btn btn-success">More Details</button></a>
                    </div>
                </div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item">
                    <img src="picture/9.jpg" alt="" className="movies"></img>
                    <div className="overlay">
                        <h5>Em Của Thời Niên Thiếu</h5>
                        <p>
                            Horror              </p>
                        <a href="detailmovie.php?id=9"><button type="button" className="btn btn-success">More Details</button></a>
                    </div>
                </div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item">
                    <img src="picture/10.jpg" alt="" className="movies"></img>
                    <div className="overlay">
                        <h5>Vong Nhi</h5>
                        <p>
                            Science fiction/Action              </p>
                        <a href="detailmovie.php?id=10"><button type="button" className="btn btn-success">More Details</button></a>
                    </div>
                </div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>

            </div>
        </div>
    )
}
export default New;