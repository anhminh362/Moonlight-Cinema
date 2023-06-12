import React from 'react';
import Banner from './BannerSlider';
import New from './NewMoviesSlider';
import Trend from './TrendingMoviesSlider';
import Upcoming from './UpcomingMoviesSlider';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import Trailer from './Trailer';
import "./Homepage.css";


const Home = () => {
    
    return (
        <div>
            <Header/>
            <Banner />
            <Trend />
            <New />
            <Trailer/>
            <Upcoming />
            <Footer/>
        </div>

    )

}
export default Home;
