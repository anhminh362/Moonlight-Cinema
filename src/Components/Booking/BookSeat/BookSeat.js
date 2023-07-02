import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "./BookSeat.css";
import { useNavigate, Link } from 'react-router-dom';
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
                // console.log('data1',response.data.id);
                setScheduleId(response.data.id)
                // console.log(scheduleId);
            }
                catch(error) {
                    console.error(error);
                }
                // const scheduleId=response.data
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
    console.log('ticketID', selectedTickets);
        console.log('seatID',selectedSeats);
    // Use ticketValue as needed.
    // setTimeout(() => {
        
    //     console.log('ticketID', selectedTickets);
    //     console.log('seatID',selectedSeats);
    // }, 10000);
    // handleClickEvent(selectedTickets,selectedSeats,scheduleId)
  };
  
   
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

    const navigate = useNavigate();

    const handleTicketSelected = (ticket,seat,scheduleId) => {
        
        console.log('argument from Child: ', ticket,seat,scheduleId);
        setSelectedSeats(seat)
        setSelectedTickets(ticket)
        setScheduleID(scheduleId)        
      };
    const handleSubmit = (e) => {

        e.preventDefault();
      // Access selectedSeats and selectedTickets here in the handleSubmit function
      console.log('Selected Seats:', selectedSeats);
      console.log('Selected Tickets:', selectedTickets);
      console.log('Selected schedule:', scheduleID);
      if (selectedSeats.length > 0 && selectedTickets.length > 0 
    ) {
        const url = `/Invoice?tickets=${selectedTickets}&seats=${selectedSeats}&scheduleId=${scheduleID}`;
        navigate(url);
           
    } else {
        alert("Please select seats");
    }
    //   navigate(`/VerifyCode?tickets=${encodeURIComponent(selectedTickets)}`);

    };
    return (
        <>
            <div className='cinema-room'>
                <div className="movie-container">
                    <label>
                        <center> Movie:</center>
                    </label>
                    <input type="text" hidden id='movie' value='<?= $price ?>' disabled></input>
                    <p>Name</p>
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

                    <form onSubmit={(event) => handleSubmit(event)}>

                        <div >
                            <p className="text">
                                You have selected <span id="count">0</span>  for a price of RS.<span id="total">0</span>
                            </p>
                            <p>Seat: <span id="code" ></span></p>
                            <SeatGrid 
                            handleClickEvent={handleTicketSelected}
                            />

                        </div>
                        <div className="row">
                            <div className="col-sm-4"> <br></br><br></br>
                                <input type="submit" name='submit' className="btn bg-danger text-white" value="Book now"></input>
                            </div>
                            <div className="col-sm-8">
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}
export default BookSeat;