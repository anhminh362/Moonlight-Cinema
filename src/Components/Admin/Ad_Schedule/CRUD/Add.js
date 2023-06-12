import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
    return (
        
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">FORM ADD SCHEDULE</h5>
              <button
                type="button"
                name="close"
                class="btn-close"
                data-dismiss="modal"
                aria-label="Đóng"
              >
                {/* <span aria-hidden="true">×</span> */}
              </button>
            </div>
            <div class="modal-body" id="modal-body">
              <form method="post" class="form-form" action="addschedule.php">
                <br />
                <input type="hidden" id="schedule-id" name="id" />
                <label htmlFor="room" class="title-title">
                  Room:
                </label>
                <select id="room" name="room">
                  <option />
                </select>
                <br />
                <br />
                <label htmlFor="date" class="title-title">
                  Movie date:
                </label>
                <input type="date" class="input-btn" name="movie_date" />
                <br />
                <br />
                <label htmlFor="begin" class="title-title">
                  Time begin:
                </label>
                <input name="begin" type="time" class="input-btn" />
                <br /> <br />
                <label htmlFor="end" class="title-title">
                  Time end:
                </label>
                <input name="end" type="time" class="input-btn" />
                <br /> <br />
                <label htmlFor="price" class="title-title">
                  Price:
                </label>
                <input name="price" type="number" class="input-btn" />
                <br /> <br />
                <div class="modal-footer">
                  <input
                    type="submit"
                    name="submit"
                    class="btn bg-danger text-white"
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