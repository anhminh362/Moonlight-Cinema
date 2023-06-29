import React from 'react';
import { useState, useEffect } from 'react';
import "./BookSeat.css";
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';

function SeatGrid({ scheduleId, connect }) {
    const [tickets, setTickets] = useState([]);
    const [statuses, setStatuses] = useState([]);

    useEffect(() => {
        const fetchTickets = async () => {
            const response = await fetch(`api/tickets?schedule_id=${scheduleId}`);
            const data = await response.json();
            const ticketIds = data.tickets.map(ticket => ticket.id);
            const ticketStatuses = data.tickets.map(ticket => ticket.status);
            setTickets(ticketIds);
            setStatuses(ticketStatuses);
        }
        fetchTickets();
    }, [scheduleId]);

    const renderSeats = () => {
        const rows = ['A', 'B', 'C', 'D', 'E'];
        let k = 0;
        const seats = rows.map((row) => (
            <div className="seat-row" key={row} name={row} id={row}>
                {[...Array(8)].map((_, index) => {
                    const seatId = row + (index + 1);
                    return (
                        <div
                            className={`seat ${statuses[k] === 0 ? 'sold' : ''}`}
                            name={index + 1}
                            id={seatId}
                            key={seatId}
                        >
                            <input type="hidden" id="ticket_id" name="ticket_id" value={tickets[k]} />
                        </div>
                    );
                    k++;
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
            <Header />
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
            <Footer />
        </>
    )
}
export default BookSeat;