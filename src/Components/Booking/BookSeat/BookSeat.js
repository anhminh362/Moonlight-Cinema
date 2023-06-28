import React from 'react';
const BookSeat = () => {
    if (window.location.href.indexOf('m_id') > -1) {
        let urlParams = new URLSearchParams(window.location.search);
        let id = urlParams.get('m_id');
        let day = urlParams.get('day');
        let time = urlParams.get('time');
        let connect = new mysqli("localhost", "root", "", "cinema");
        let query = `select * from movie where id='${id}'`;
        let result = connect.query(query);
        let row = result.fetch_assoc();
        let schedule = connect.query(`select * from schedule where movie_id='${id}' and movie_date='${day}' and time_begin='${time}'`);
        let result1 = schedule.fetch_assoc();
        let price = result1['price'];
        let schedule_id = result1['id'];
    }
    function SeatingChart({ schedule_id }) {
        const [tickets, setTickets] = useState([]);

        useEffect(() => {
            // Fetch ticket data from API
            fetch(`/api/tickets?schedule_id=${schedule_id}`)
                .then(response => response.json())
                .then(data => setTickets(data));
        }, [schedule_id]);

        // Create array of rows
        const rows = ['A', 'B', 'C', 'D', 'E'];
    }
    return (
        <div>
            <div class="movie-container">
                <label>
                    <center> Movie:</center>
                </label>
                <input type="text" hidden id='movie' value={{ price }} disabled></input>
                <p>{row['name']}</p>
            </div>
            <ul class="showcase">
                <li>
                    <div class="seat"></div>
                    <small>Available</small>
                </li>
                <li>
                    <div class="seat selected"></div>
                    <small>Selected</small>
                </li>
                <li>
                    <div class="seat sold"></div>
                    <small>Sold</small>
                </li>
            </ul>
            <div class="container">
                <div class="screen"></div>
                <form method="post" action="">
                    {rows.map(row => (
                        <div className="row" key={row}>
                            {Array.from({ length: 8 }, (_, index) => {
                                // Find ticket with matching seat
                                const ticket = tickets.find(
                                    t => t.row === row && t.seat === index + 1
                                );

                                // Determine if seat is sold
                                const isSold = ticket && ticket.status === 0;

                                // Create div for seat
                                return (
                                    <div
                                        className={`seat ${isSold ? 'sold' : ''}`}
                                        key={`${row}-${index}`}
                                    >
                                        {ticket && (
                                            <input type="hidden" name="ticket_id" value={ticket.id} />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                    {/* <!-- <input type="text" hidden id='schedule_id' name='schedule_id' value='0'> --> */}
                    <div class="row" name='' id=''>
                        {/* <!-- replace php variables with javascript --> */}
                        <div class="seat" name='' id=''></div>
                        {/* <!-- replace php conditional statement --> */}
                        <input type="hidden" id="ticket_id" name="ticket_id" value='0'></input>
                    </div>
                    <div >
                        <p class="text">
                            You have selected <span id="count">0</span> for a price of RS.<span id="total">0</span>
                        </p>
                        <p>Seat: <span id="code"></span></p>
                        <input type="hidden" name='code' id='ticket_value'></input>
                        <input type="hidden" name='seat_code' id='seat_code' value=''></input>
                        <input type="hidden" name='m_id' value='0'></input>
                        <input type="hidden" name='day' value=''></input>
                        <input type="hidden" name='time' value=''></input>
                    </div>
                    <div class="row">
                        <div class="col-sm-4"> <br></br><br></br>
                            {/* <!-- replace php comments with javascript comments --> */}
                            {/* <!-- <a href="invoice.php?id=0" class="book-btn">Book now</a> -->  */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default BookSeat;