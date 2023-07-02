
import React, { useState, useEffect } from 'react';
import { useParams,  useNavigate  } from 'react-router-dom';

const Invoice = () => {
    const [tickets, setTickets] = useState([]);
    const [seats, setSeats] = useState([]);
    const [scheduleId, setScheduleId] = useState(0);

    useEffect(() => {
        // Lấy email từ query param trong URL
        const searchParams = new URLSearchParams(window.location.search);
        const ticketsParam = searchParams.get('tickets');
        const seatsParam = searchParams.get('seats');
        const scheduleIdParam = searchParams.get('scheduleId');
        setTickets(ticketsParam);
        setSeats(seatsParam);
        setScheduleId(scheduleIdParam);
        // Lấy scheduleID
        // console.log(ticketsParam,seatsParam,scheduleIdParam);
    }, []);
    console.log(tickets,seats,scheduleId);
    return (
        <div>invoice</div>
    )
}
export default Invoice;