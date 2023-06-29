import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import BannerDetail from './BannerDetail';
import DetailTrailer from './DetailTrailer';
import OtherSlider from './OtherMovieSlider';

import './MovieDetail.css';
const Detail = () => {
    return (
        <div>
            <Header/>
            <BannerDetail />
            <DetailTrailer />
            <OtherSlider />
            <Footer/>
        </div>
    )
}
export default Detail;