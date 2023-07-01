import React from 'react';
import { useState, useEffect } from 'react';
import "./BookSeat.css";

function SeatGrid() {
    const [selectedSeats, setSelectedSeats] = useState([]);
    
  const handleSeatClick = (seatId, ticketValue) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatId)
        ? prevSelectedSeats.filter((seat) => seat !== seatId)
        : [...prevSelectedSeats, seatId]
    );

    // Use ticketValue as needed.
    console.log('Selected Ticket Value:', ticketValue);
  };
  
    // const updateSelectedCount = () => {
    //   // Logic to update the selected seats count and state

    // };
    let scheduleId=26;
    const [tickets, setTickets] = useState([]);
    const [statuses, setStatuses] = useState([]);

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
                    k++;
                    return (
                        <div
                            className={`seat ${statuses[k] === 0 ? 'sold' : ''} ${isSelected ? 'selected' : ''}`}
                            name={index + 1}
                            id={seatId}
                            key={seatId}
                            onClick={() => handleSeatClick(seatId, row)}
                        >
                            <input type="hidden" id="ticket_id" name="ticket_id" value={tickets[k]} />
                        </div>
                    );
                    // k++;
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

                    <form method="post" action="invoice.php">

                        <div >
                            <p className="text">
                                You have selected <span id="count">0</span>  for a price of RS.<span id="total">0</span>
                            </p>
                            <p>Seat: <span id="code" ></span></p>
                            <SeatGrid />
                            <input type="hidden" name='code' id='ticket_value' ></input>
                            <input type="hidden" name='seat_code' id='seat_code' value='' ></input>
                            <input type="hidden" name='m_id' value='<?php echo $id ?>'></input>
                            <input type="hidden" name='day' value='<?php echo $day ?>'></input>
                            <input type="hidden" name='time' value='<?php echo $time ?>'></input>

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