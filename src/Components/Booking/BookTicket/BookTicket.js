import React, { useState, useEffect } from 'react';
import { useParams,  useNavigate  } from 'react-router-dom';

import './BookTicket.css';

function BookTicket() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [scheduleData, setScheduleData] = useState([]);

    const [date,setDate]=useState('');
    const [times,setTimes]=useState([]);
    useEffect(() => {
        fetchScheduleData();
    }, []);

    const fetchScheduleData = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/bookticket/${id}`);
            const data = await response.json();
            setScheduleData(data);
            if(data.length>0){
                setDate(data[0].movie_date);
                setTimes(data[0].times)
            }
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const [selectedValues, setSelectedValues] = useState({});

    const handleClick = (e) => {
        console.log(scheduleData);
        for(let i=0;i<scheduleData.length;i++){
            // console.log(scheduleData[i]);
            if(scheduleData[i].movie_date===e.target.value){
                console.log(scheduleData[i]);
                setTimes(scheduleData[i].times)
            }
        }
        const button = e.target.closest('button');
        const name = button.getAttribute('name');
        const value = button.getAttribute('value');
        setSelectedValues((prevValues) => ({ ...prevValues, [name]: value }));

        // Loại bỏ class 'selected' khỏi tất cả các button trong cùng div
        const div = button.closest('div');
        const divButtons = div.querySelectorAll('button');
        divButtons.forEach((divButton) => {
            divButton.classList.remove('selected');
        });

        // Thêm class 'selected' cho button được click
        button.classList.add('selected');

        console.log(1,selectedValues["btn_day"],selectedValues["btn_time"]);

    };
    const handleSubmit = () => {
        if (
            selectedValues["btn_day"] &&
            selectedValues["btn_time"] 
        ) {
            const encodedMovieId = encodeURIComponent(id);
            const encodedBtnDay = encodeURIComponent(selectedValues["btn_day"]);
            const encodedBtnTime = encodeURIComponent(selectedValues["btn_time"]);
          
            // all values have been selected, redirect to another page or perform other actions
            // const id = document.querySelector('input[name="movie_id"]').value;
            // const url = `bookseat.php?day=${selectedValues["btn_day"]}&time=${selectedValues["btn_time"]}&m_id=${id}`;
            // window.location.href = url;
            const url = `/Bookseat?movie_id=${encodedMovieId}&btn_day=${encodedBtnDay}&btn_time=${encodedBtnTime}`;
            navigate(url);
               
        } else {
            alert("Please select date and time");
        }
    };

    return (
        <section className="book-ticket">
            <div className="ticket-container">
                <div className="book-ticket-container">
                    <div className="show-date">
                        <h2 className='text'>Date:</h2>
                        <div className="date-list">
                            {scheduleData.map((schedule) => (
                                <button key={schedule.id} type="button" 
                                className={`day ${selectedValues.btn_day === schedule.movie_date ? 'selected' : ''}`} 
                                name="btn_day" value={schedule.movie_date} fdprocessedid={`0w2i2b-${schedule.id}`} 
                                onClick={handleClick}>
                                    <span>{schedule.movie_date}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="show-time">
                        <h2 className='text'>Time:</h2>
                        <div className="time">
                            {/* Replace the static buttons with schedule time values */}
                            {/* {scheduleData.map((schedule) => ( */}
                            {times.map((time) => (
                                <button
                                    key={time}
                                    type="button"
                                    name="btn_time"
                                    // className={`btn_time ${selectedValues.btn_time === time ? 'selected' : ''}`}
                                    className={`btn_time`}
                                    value={time}
                                    fdprocessedid={`unjr3q-${time}`}
                                    onClick={(e) => handleClick(e)}
                                >
                                    {time}
                                </button>
                                ))
                            }
                            {/* )} */}
                        </div>
                    </div>
                    <center><button id="submit-btn" onClick={handleSubmit}>Ok</button></center>
                </div>
            </div>
        </section>
    );
}

export default BookTicket;
