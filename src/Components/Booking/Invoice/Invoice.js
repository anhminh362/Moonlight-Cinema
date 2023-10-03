
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { json } from 'react-router-dom';
const Invoice = () => {
    const navigate = useNavigate();
    const [tickets, setTickets] = useState([]);
    const [seats, setSeats] = useState([]);
    const [schedule_id, setSchedule_id] = useState(0);
    const [price, setPrice] = useState(0);
    const [book, setBook] = useState(false);
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    useEffect(() => {
        // Lấy email từ query param trong URL
        const searchParams = new URLSearchParams(window.location.search);
        const ticketsParam = searchParams.get('tickets');
        const seatsParam = searchParams.get('seats');
        const scheduleIdParam = searchParams.get('scheduleId');
        const priceParam = searchParams.get('price');
        const ticketsArray = ticketsParam.split(',');
        const seatsArray = seatsParam.split(',');
        setTickets(ticketsArray);
        setSeats(seatsArray);
        setSchedule_id(scheduleIdParam);
        setPrice(priceParam)
        // Lấy scheduleID
        console.log(ticketsParam,seatsParam,scheduleIdParam);
    }, []);
    // const user_id=21;
    console.log(seats,tickets,schedule_id);
    (async () => {
      try {
        await axios.post('http://127.0.0.1:8000/api/sendmail', {
          headers: {
            Authorization: `Bearer ${token}`
          },
          seats,
          schedule_id,
          price,
        });
      } catch (error) {
        console.error(error.response);
      }
    })();
    function generateRandomCode() {
      const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numbers = '0123456789';
    
      let code = '';
    
      // Generate 3 random letters
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        code += letters[randomIndex];
      }
    
      // Generate 6 random numbers
      for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        code += numbers[randomIndex];
      }
    
      return code;
    }
    
    const code = generateRandomCode();
    tickets.map((ticket, index) => {
      console.log(ticket, index);
      const response = axios.post('http://127.0.0.1:8000/api/invoice', {
        headers: {
					Authorization: `Bearer ${token}`
				},
        ticket_id: ticket,
        code,
        total_price:price,
      });
      axios.put(`http://127.0.0.1:8000/api/ticket/${ticket}`);
    });
    alert('Book successfully. Please check your mail')
    navigate("/")
    return (
        <div></div>
    )
}
export default Invoice;