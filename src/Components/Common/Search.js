import React, { useState, useEffect } from 'react';
import '../../Styles/global.css';
function Search() {
    const [searchInfo, setSearchInfo] = useState('');
    const [movies, setMovies] = useState([]);

    const fetchMovies = (search) => {
        fetch(`http://127.0.0.1:8000/api/movie?search=${search}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    const filteredMovies = data.filter(movie => movie.name.toLowerCase().startsWith(search.toLowerCase()));
                    setMovies(filteredMovies);
                } else {
                    setMovies([]);
                }
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        if (searchInfo.trim() !== '') {
            fetchMovies(searchInfo);
        } else {
            setMovies([]);
        }
    }, [searchInfo]);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setSearchInfo(inputValue);
    };

    return (
        <div>
            <input id='search' type="text" value={searchInfo} onChange={handleChange}/>
            {/* Hiển thị danh sách phim */}
            {movies.map(movie => (
                <div className="movie_card" key={movie.id}>
                    <div className="movie_item">
                        <div className="movie_img">
                            <img alt="" src={`../picture/${movie.avatar}`} />
                        </div>
                        <div className="movie_info">
                            <a href={`/Detail/${movie.id}`}>{movie.name}</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Search;
