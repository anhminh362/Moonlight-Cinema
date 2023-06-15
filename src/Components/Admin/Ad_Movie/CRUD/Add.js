import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import axios from 'axios';
import DataTable from "react-data-table-component";
import $ from "jquery";
import '../Ad_Movie.css'

const Add = () => {
    const onSubmitHandle = async (e) => {
        e.preventDefault();

        try {
            await axios.post("https://63aa9cf0fdc006ba6046fb1c.mockapi.io/movie", {
                name: $("#name").val(),
                avatar: $("#avatar").val().split("\\")[2],
                premiere_date: $("#premiere_date").val(),
                description: $("#description").val(),
                country: $("#country").val(),
                trailer: $("#trailer").val(),
                category: $("#category").val(),
            });

            $("#avatar").val("");
            alert("Thêm thành công");
            $("#closeModalAddBtn").click();
            // fetchProducts();

        } catch (error) {
            console.log(error);
            alert("Thêm không thành công");
        }
    };
    
    return (
        
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title">FOMR ADD</h5>
                <button type="button" name="close" class="btn-close" data-dismiss="modal" aria-label="Đóng"  >
                    {/* <span aria-hidden="true">&times;</span> */}
                </button>
                </div>
                <div class="modal-body">
                <form class="form-form" onSubmit={onSubmitHandle} encType="multipart/form-data">
                    <br />
                    
                    {/* <input type="hidden" name="action" value="add"> Trường ẩn để xác định hành động */}
                
                    <input type="hidden" name="id" defaultValue=""/>
                    
                    <label htmlFor="name" class="title-title">Name:</label>
                    <input type="text" class="input-btn" name="name" id='name'/>
                    <br />
                    <br />
                    <label htmlFor="avatar" class="title-title">Avatar:</label>
                    <input type="file" style={{ color: "white" }} class="input-btn" name="avatar" id='avatar'/>
                    <br />
                    <br />
                    <label htmlFor="date" class="title-title">Premiere date:</label>
                    <input type="date" class="input-btn" name="premiere_date" id='premiere_date'/>
                    <br />
                    <br />
                    <label htmlFor="country" class="title-title">Country:</label>
                    <input type='text' class="input-btn" name="country" id='country' />
                    <br />
                    <br />
                    <label htmlFor="describe" class="title-title">Describe:</label>
                    < textarea  type="text"  class="input-btn" name="description" id='description'/>
                    <br />
                    <br />
                    <label htmlFor="trailer" class="title-title">Trailer:</label>
                    <input type="file"  class="input-btn"  name="trailer" style={{ color: "white" }} />
                    <br />
                    <br />
                    <label htmlFor="name" class="title-title">Category:</label>
                    <div class="category">
                    <label>
                        <input type="checkbox" name="category" defaultValue="" />
                    </label>
                    </div>
                    <div class="modal-footer">
                    <input
                        type="submit"
                        name="category"
                        class="btn bg-danger text-white"
                        defaultValue="Add"
                    />
                    </div>
                </form>
                </div>
            </div>
        </div>
    // </div>
    )
}
export default Add;