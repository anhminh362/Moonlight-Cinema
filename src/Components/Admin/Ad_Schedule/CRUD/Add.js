import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
    return (
        
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">FORM ADD SCHEDULE</h5>
              <button
                type="button"
                name="close"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Đóng"
              >
                {/* <span aria-hidden="true">×</span> */}
              </button>
            </div>
            <div className="modal-body" id="modal-body">
              <form method="post" className="form-form" action="addschedule.php">
                <br />
                <input type="hidden" id="schedule-id" name="id" />
                <label htmlFor="room" className="title-title">
                  Room:
                </label>
                <select id="room" name="room">
                  <option />
                </select>
                <br />
                <br />
                <label htmlFor="date" className="title-title">
                  Movie date:
                </label>
                <input type="date" className="input-btn" name="movie_date" />
                <br />
                <br />
                <label htmlFor="begin" className="title-title">
                  Time begin:
                </label>
                <input name="begin" type="time" className="input-btn" />
                <br /> <br />
                <label htmlFor="end" className="title-title">
                  Time end:
                </label>
                <input name="end" type="time" className="input-btn" />
                <br /> <br />
                <label htmlFor="price" className="title-title">
                  Price:
                </label>
                <input name="price" type="number" className="input-btn" />
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
    //   </div>
 
    )
}
export default Add;