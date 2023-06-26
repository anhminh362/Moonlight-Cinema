import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Add = ({  id,handleCloseAddSchedule}) => {
  console.log('movie_id',id);
  const [schedule, setSchedule] = useState([]);
  const [rooms, setRooms] = useState([]);

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
};
// $("#closeModalEditBtn").click();

const handleSubmit = async (event) => {
  console.log(12121,schedule);
    event.preventDefault();
    if(id &&  schedule){
      // console.log('abc',id,selectedCategoriesj);

    try {
        await axios.post(`http://127.0.0.1:8000/api/schedule`, schedule);
        setSchedule([]);
        alert('Product edited successfully!');
        setTimeout(() => {
            window.location = 'http://localhost:3000/Show';
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
                {/* <input type="hidden" id="schedule-id" name="id" /> */}
                <label htmlFor="room" className="title-title">
                  Room:
                </label>
                {/* <select id="room" name="room">
                {rooms && rooms.map((room)=>{
                  console.log(room.name);
                      <option key={room.id} value={room.name}>{room.name}</option>
                  })}
                </select> */}
                     <select name="room" id="room" onChange={handleInputChange} >
                   {rooms && rooms.map((room)=>{
                    //  console.log('name',room.name);
                     return <option value={room.name} key={room.id}>{room.name}</option>;                  
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
                <input name="begin" type="time" className="input-btn" onChange={handleInputChange}/>
                <br /> <br />
                <label htmlFor="end" className="title-title">
                  Time end:
                </label>
                <input name="end" type="time" className="input-btn" onChange={handleInputChange}/>
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