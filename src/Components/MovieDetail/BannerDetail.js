import React from 'react';


const BannerDetail = () => {
    return (
        <div>
            <img class="background_img" src="./picture/5.jpg" alt=""></img>

            <div class="container" style={{ backgroundImage: "url('./picture/5.jpg')"}}>
                {/* <br></br><br></br><br></br><br></br><br></br><br></br> */}
                <div class="row" style={{ marginTop: 3 + "em" }}>

                    <div class="col-sm-5">
                        <img class="card-item" src="./picture/5.jpg" alt=""></img>
                    </div>
                    <div class="col-sm-5">
                        <h1 class="title-film">Morbius</h1>
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
                                <i class="fi fi-ss-calendar"> 2023</i>
                            </div>
                        </div>
                        <br></br>
                        <div class="row">
                            <p class="text-detail">
                                Câu chuyện của Morbius xoay quanh bác sĩ Michael Morbius (Jared Leto) phải học cách sống chung với căn bệnh máu hiếm gặp. Để tồn tại, Morbius đã kết hợp ADN của mình với ADN của dơi ma cà rồng. Sự hợp nhất đã mang lại cho anh siêu tốc độ, siêu sức mạnh, khả năng định vị bằng tiếng vang
                            </p>
                        </div> <br></br><br></br><br></br>
                        <div class="row">
                            <div class="col-sm-4">
                                <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css"></link>
                                <i class="fi fi-sr-flag-alt"> Country</i>
                            </div>
                            <div class="col-sm-4">
                                <button class="contry-item"> America</button>
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
                                <button class="type-tiem">Action</button> &nbsp;<button class="type-tiem">Adventure</button> &nbsp;                            </div>
                            <div class="col-sm-2">
                                {/* <!--  --> */}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4"><br></br><br></br>
                                <a href="bookticket.php?id=5" class="book-btn">Book now</a>
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
                    </div>
                    <div class="col-sm-1"><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <h5 class="watch-trailer">Watch Trailer</h5>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default BannerDetail;