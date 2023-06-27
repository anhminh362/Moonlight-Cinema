import React, { useState, useEffect } from 'react';
import './BookTicket.css';

function BookTicket() {
    const [scheduleData, setScheduleData] = useState([]);

    useEffect(() => {
        fetchScheduleData();
    }, []);

    const fetchScheduleData = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/schedule");
            const data = await response.json();
            setScheduleData(data);
        } catch (error) {
            console.error(error);
        }
    };

    const [selectedValues, setSelectedValues] = useState({});

    const handleClick = (e) => {
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
    };

    const handleSubmit = () => {
        if (
            selectedValues["btn_day"] &&
            selectedValues["btn_begin"] &&
            selectedValues["btn_end"] 
        ) {
            // all values have been selected, redirect to another page or perform other actions
            const id = document.querySelector('input[name="movie_id"]').value;
            const url = `bookseat.php?day=${selectedValues["btn_day"]}&time=${selectedValues["btn_begin"]}&time=${selectedValues["btn_end"]}&m_id=${id}`;
            window.location.href = url;
        } else {
            alert("Please select an option from each div");
        }
    };

    return (
        <section className="book-ticket">
            <div className="container">
                <div className="book-ticket-container">
                    <div className="show-date">
                        <h2>Date:</h2>
                        <div className="date-list">
                            {scheduleData.map((schedule) => (
                                <button key={schedule.id} type="button" className={`day ${selectedValues.btn_day === schedule.movie_date ? 'selected' : ''}`} name="btn_day" value={schedule.movie_date} fdprocessedid={`0w2i2b-${schedule.id}`} onClick={handleClick}>
                                    <span>{schedule.movie_date}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="show-time">
                        <h2>Time begin:</h2>
                        <div className="time">
                            {/* Replace the static buttons with schedule time values */}
                            {scheduleData.map((schedule) => (
                                <button key={schedule.id} type="button" name="btn_time" className={`btn_begin ${selectedValues.btn_begin === schedule.time_begin ? 'selected' : ''}`} value={schedule.time_begin} fdprocessedid={`unjr3q-${schedule.id}`} onClick={handleClick}>{schedule.time_begin}</button>
                            ))}
                        </div>
                        <h2>Time end:</h2>
                        <div className="time">
                            {/* Replace the static buttons with schedule time values */}
                            {scheduleData.map((schedule) => (
                                <button key={schedule.id} type="button" name="btn_time" className={`btn_end ${selectedValues.btn_end === schedule.time_end ? 'selected' : ''}`} value={schedule.time_end} fdprocessedid={`unjr3q-${schedule.id}`} onClick={handleClick}>{schedule.time_end}</button>
                            ))}
                        </div>
                    </div>
                    <center><button id="submit-btn" onClick={handleSubmit}>Ok</button></center>
                </div>
            </div>
        </section>
    );
}

export default BookTicket;
