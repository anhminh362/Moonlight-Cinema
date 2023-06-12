import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import DataTable from "react-data-table-component";

 const Add = () =>{
    const onSubmitHandle = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://63a572122a73744b008e28d5.mockapi.io/api/schedules", {
                movie_id: $("#schedule-id").val(),
                room_id: $("#room").val(),
                movie_date: $("date").val(),
                time_begin: $("#begin").val(),
                time_end: $("#end").val(),
                price: $("#price").val(),
            });
            alert("Thêm thành công");
            $("#closeModalAddBtn").click();
            // componentDidMount();
        } catch (error) {
            console.log(error);
            alert("Thêm không thành công");
        }
    };
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
            <form onSubmit={onSubmitHandle} class="form-form" >
              <br />
              <input type="hidden" id="schedule-id" name="id" />
              <label htmlFor="room" class="title-title">
                Room:
              </label>
              <select id="room" name="room">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option />
              </select>
              <br />
              <br />
              <label htmlFor="date" class="title-title">
                Movie date:
              </label>
              <input type="date" id="date" class="input-btn" name="movie_date" />
              <br />
              <br />
              <label htmlFor="begin" class="title-title">
                Time begin:
              </label>
              <input name="begin" id="begin" type="time" class="input-btn" />
              <br /> <br />
              <label htmlFor="end" class="title-title">
                Time end:
              </label>
              <input name="end" id="end" type="time" class="input-btn" />
              <br /> <br />
              <label htmlFor="price" class="title-title">
                Price:
              </label>
              <input name="price" id="price" type="number" class="input-btn" />
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
    )
 }
        
    
export default Add;

