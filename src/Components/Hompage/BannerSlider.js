import React from 'react';


const Banner = () => {
    return (
        <div>
            <div id="slider" class="carousel carousel-light slide" data-bs-ride="carousel">

                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#slider" data-bs-slide-to="0" class="active" aria-current="true"aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#slider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#slider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item <?=$act?>" data-bs-interval="<?=$time?>">
                        <div class="img"
                            style="background-image: linear-gradient(to right, rgba(0, 0, 6, 1),rgba(0, 0, 0, 0.3)),url('../../asset/picture/<?=$row1['avatar']?>');"></div>
                        <div class="carousel-caption d-none d-md-block">
                            <h3 class="text-movie">name</h3>
                            <p class="text-movies">description<br/>
                                <a class="more-details" href="detailmovie.php?id=<?php echo $row1['id']?>">More Details</a>
                            </p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default Banner;