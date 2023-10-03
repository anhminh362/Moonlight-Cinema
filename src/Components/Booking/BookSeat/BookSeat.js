import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "./BookSeat.css";
import { useNavigate } from 'react-router-dom';
function SeatGrid({handleClickEvent}) {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedTickets, setSelectedTickets] = useState([]);
    const [movie_id, setMovie_id] = useState('');
    const [movie_date, setMovie_date] = useState('');
    const [time_begin, setTime_begin] = useState('');
    const [scheduleId,setScheduleId]=useState('');
    const [tickets, setTickets] = useState([]);
    const [statuses, setStatuses] = useState([]);

  
    useEffect(() => {
      // Lấy email từ query param trong URL
      const searchParams = new URLSearchParams(window.location.search);
      const movieIdParam = searchParams.get('movieId');
      const dayParam = searchParams.get('day');
      const timeParam = searchParams.get('time');
      setMovie_id(movieIdParam);
      setMovie_date(dayParam);
      setTime_begin(timeParam);
      // Lấy scheduleID
      
    }, []);
    useEffect(()=>{
        const fetchScheduleId = async () => {
            try{
                const response = await axios.post('http://127.0.0.1:8000/api/scheduleId/', {
                    movie_id,
                    movie_date,
                    time_begin
                });
                setScheduleId(response.data.id)
            }
                catch(error) {
                    console.error(error);
                }
          }
          fetchScheduleId();
          
    })
    
  const handleSeatClick = (seatId, ticketValue) => {
    console.log(1,ticketValue);
    
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatId)
        ? prevSelectedSeats.filter((seat) => seat !== seatId)
        : [...prevSelectedSeats, seatId]
    );
    setSelectedTickets((prevSelectedTickets) =>
      prevSelectedTickets.includes(ticketValue)
        ? prevSelectedTickets.filter((ticket) => ticket !== ticketValue)
        : [...prevSelectedTickets, ticketValue]
    );
    };
  
        useEffect(() => {
            handleClickEvent(selectedTickets, selectedSeats, scheduleId);
          }, [selectedTickets, selectedSeats, scheduleId]);
    useEffect(() => {
        const fetchTickets = async () => {
            const response = await fetch(`http://127.0.0.1:8000/api/bookseat/${scheduleId}`);
            const data = await response.json();
            // console.log(data);
            const ticketIds = data.map(ticket => ticket.id);
            const ticketStatuses = data.map(ticket => ticket.status);
            setTickets(ticketIds);
            setStatuses(ticketStatuses);
            // console.log(tickets,statuses);
        }
        fetchTickets();
    }, [scheduleId]);

    const renderSeats = () => {
        const rows = ['A', 'B', 'C', 'D', 'E'];
        let k = -1;
       

        const seats = rows.map((row) => (
            <div className="seat-row" key={row} name={row} id={row}>
                {[...Array(8)].map((_, index) => {
                    const seatId = row + (index + 1);
                    const isSelected = selectedSeats.includes(seatId);
                    const ticketValue = tickets[k];
                    k++;
                    return (
                        <div
                            className={`seat ${statuses[k] === 0 ? 'sold' : ''} ${isSelected ? 'selected' : ''}`}
                            name={index + 1}
                            id={seatId}
                            key={seatId}
                            onClick={event => handleSeatClick(seatId, ticketValue)}
                        >
                            <input type="hidden" id="ticket_id" name="ticket_id" value={ticketValue} />
                        </div>
                    );
                })}
            </div>
        ));
        return seats;
    };

    return (
        <>
            {renderSeats()}
        </>
    );
}

function BookSeat() {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedTickets, setSelectedTickets] = useState([]);
    const [scheduleID, setScheduleID] = useState(0);
    const [totalPrice,setTotalPrice]=useState(0);
    const [data, setData] = useState(null);
    const [movieName,setMovieName]=useState('');
    const [movie_id, setMovie_id] = useState('');
    useEffect(() => {
    const fetchPrice = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/schedule/${scheduleID}`);
        const data = await response.json();
        setData(data);
    };
    
    fetchPrice();
    }, [scheduleID]);
    useEffect(() => {
        // Lấy email từ query param trong URL
        const searchParams = new URLSearchParams(window.location.search);
        const movieIdParam = searchParams.get('movieId');
        setMovie_id(movieIdParam);
        
      }, []);
    useEffect(() => {
    const fetchMovieName = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/movie/${movie_id}`);
        const movieData = await response.json();
        
        setMovieName(movieData.name);
    };

    fetchMovieName();
    },);
    const navigate = useNavigate();
    
    const handleTicketSelected = (ticket,seat,scheduleId) => {
        // console.log(data);
        
        console.log('argument from Child: ', ticket,seat,scheduleId);
        setSelectedSeats(seat)
        setSelectedTickets(ticket)
        setScheduleID(scheduleId)    

          // Assuming data.price represents the price of a single ticket
          if (data) {
            const totalPrice = ticket.length * data.price;
            setTotalPrice(totalPrice);
            // console.log(totalPrice);
          }
      };
    const handleSubmit = (e) => {

        e.preventDefault();
      // Access selectedSeats and selectedTickets here in the handleSubmit function
      console.log('Selected Seats:', selectedSeats);
      console.log('Selected Tickets:', selectedTickets);
      console.log('Selected schedule:', scheduleID);
      if (selectedSeats.length > 0 && selectedTickets.length > 0 
    ) {
        const url = `/Invoice?tickets=${selectedTickets}&seats=${selectedSeats}&scheduleId=${scheduleID}&price=${totalPrice}`;
        navigate(url);
           
    } else {
        alert("Please select seats");
    }
    };
    const handePaymentClick = (amount) => {
        console.log(amount);
        const response = axios.post('http://127.0.0.1:8000/api/MomoPayment', {
            amount
        }).then(response => {
            window.location.href=response.data;
        })
    }
    return (
        <>
            <div className='cinema-room'>
                <div className="movie-container">
                    <label>Movie: <span>{movieName}</span></label>
                </div>
                <ul className="showcase">
                    <li>
                        <div className="seat"></div>
                        <small>Available</small>
                    </li>
                    <li>
                        <div className="seat selected"></div>
                        <small>Selected</small>
                    </li>
                    <li>
                        <div className="seat sold"></div>
                        <small>Sold</small>
                    </li>
                </ul>
                <div className="c-room">
                    <div className="screen"></div>

                    <form>

                        <div >
                            <p className="text">
                                Total price: <span id="total" value={totalPrice}>{totalPrice}</span>
                            </p>
                            <p>Seat: <span id="code" ></span></p>
                            <SeatGrid 
                            handleClickEvent={handleTicketSelected}
                            />

                        </div>
                        <div className="row">
                            <div className="col-sm-4"></div>
                            <div className="col-sm-5"> <br></br><br></br>
                                <button type="button" name='submit' className="btn bg-danger text-white" onClick={event => handleSubmit(event)}>Book now</button>
                                <br/><br/>
                                <button type="button" name='payUrl' className="btn bg-danger text-white" onClick={event => handePaymentClick({totalPrice})}>Payment</button>
                            </div>
                            <div className="col-sm-3">
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}
export default BookSeat;