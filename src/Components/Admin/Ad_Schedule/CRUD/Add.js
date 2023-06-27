import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Add = ({  id,handleCloseAddSchedule}) => {
  console.log('movie_id',id);
  const [schedule, setSchedule] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [newSchedule, setNewSchedule] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/schedule")
      .then(response => response.json())
      .then(scheduleData => setNewSchedule(scheduleData))
      .catch(error => console.error(error));
  }, []);
  let nextScheduleId = 0;
if (newSchedule.length > 0) {
  let sortedSchedule = newSchedule.sort((a, b) => b.id - a.id);
  nextScheduleId = sortedSchedule[0].id + 1;
}
  const fetchRooms = () => {
    fetch(`http://127.0.0.1:8000/api/room`)
      .then(response => response.json())
      .then(room => setRooms(room))
      .catch(error => console.error(error));
      console.log('rooms',rooms);
  };

  useEffect(() => {
    fetchRooms();
  },[]);
  const handleInputChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
   setSchedule({ ...schedule, [name]: value });
   console.log(schedule);
};
// $("#closeModalEditBtn").click();

console.log(nextScheduleId);
const handleSubmit = async (event) => {
  console.log(12121,schedule);
    event.preventDefault();
    if(id &&  schedule){
      // console.log('abc',id,selectedCategoriesj);

    try {
      // console.log(schedule);
        await axios.post(`http://127.0.0.1:8000/api/schedule`, {
          movie_id:id,
          ...schedule
        });
        setSchedule([]);
        // for (let i = 0; i <= 40; i++) {
        //   await axios.post('http://127.0.0.1:8000/api/ticket', {
        //     schedule_id: nextScheduleId
        //   });
        // }
        async function makeRequests() {
          // for (let i = 0; i <= 40; i++) {
            await axios.post('http://127.0.0.1:8000/api/ticket', {
              schedule_id: nextScheduleId
            });
        
            // await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second between each request
          // }
        }
        
        makeRequests();
        alert('Schedule added successfully!');
        setTimeout(() => {
            window.location = 'http://localhost:3000/ShowSchedule';
        }, 100);
    } catch (error) {
        console.log('Error adding product: ', error);
    }
};}


    return (
        
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">FORM ADD SCHEDULE</h5>
              <button 
                type="button" 
                class="btn-close"  
                onClick={() => handleCloseAddSchedule()}
                >
              </button>
            </div>
            <div className="modal-body" id="modal-body">
              <form onSubmit={handleSubmit} className="form-form">
                <br />
                <input type="hidden"  name="movie_id" value={id} onChange={handleInputChange}/>
                <label htmlFor="room" className="title-title">
                  Room:
                </label>
                     <select name="room_id" id="room" onChange={handleInputChange} >
                   {rooms && rooms.map((room)=>{
                    //  console.log('name',room.name);
                     return <option  value={room.id} key={room.id}>{room.name}</option>;                  
                     })}
                </select>
                <br />
                <br />
                <label htmlFor="date" className="title-title">
                  Movie date:
                </label>
                <input type="date" id='date' className="input-btn" name="movie_date" onChange={handleInputChange} />
                <br />
                <br />
                <label htmlFor="begin" className="title-title">
                  Time begin:
                </label>
                <input name="time_begin" type="time" className="input-btn" onChange={handleInputChange}/>
                <br /> <br />
                <label htmlFor="end" className="title-title">
                  Time end:
                </label>
                <input name="time_end" type="time" className="input-btn" onChange={handleInputChange}/>
                <br /> <br />
                <label htmlFor="price" className="title-title">
                  Price:
                </label>
                <input name="price" type="number" className="input-btn" onChange={handleInputChange}/>
                <br /> <br />
                <div className="modal-footer">
                  <input
                    type="submit"
                    name="submit"
                    className="btn bg-danger text-white"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
 
    )
}
export default Add;