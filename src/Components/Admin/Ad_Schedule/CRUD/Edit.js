import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
    const submitEditProduct = async (e) => {
        e.preventDefault();
        const id = $("#editID").val();
        try {
            await axios.put(`http://127.0.0.1:8000/api/schedule/${id}`, {
                movie_id: $("#editMovie").val(),
                room_id: $("#editRoom").val(),
                movie_date: $("#editMovieDate").val(),
                time_begin: $("#editTimeBegin").val(),
                time_end: $("#editTimeEnd").val(),
                price: $("#editPrice").val(),
            });
            alert("Sửa thành công");
            $("#closeModalEditBtn").click();
            componentDidMount();
        } catch (error) {
            console.log(error);
            alert("Sửa không thành công");
        }
    };

    return (
        <div>
            <div className="modal fade" id="editModal" tabIndex={-1} role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header btn bg-danger text-white">
                            <h5 className="modal-title" id="editModalLabel">Edit Schedule</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="closeModalEditBtn">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {selectedProduct && (
                            <form onSubmit={submitEditProduct}>
                                <div className="modal-body" style={{ background: "#0B1A2A" }}>
                                    <div className="form-group" style={{ background: "#0B1A2A" }}>
                                        <input type="hidden" className="form-control" id="editID" defaultValue={selectedProduct.id} readOnly />
                                    </div>
                                    <div className="form-group">
                                        <input type="hidden" className="form-control" id="editMovie" defaultValue={selectedProduct.movie_id} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="editRoom" className=" text-white">Room</label>
                                        <input type="number" className="form-control" id="editRoom" defaultValue={selectedProduct.room_id} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="editMovieDate" className=" text-white">Movie Date</label>
                                        <input type="date" className="form-control" id="editMovieDate" defaultValue={selectedProduct.movie_date} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="editTimeBegin" className=" text-white">Time Begin</label>
                                        <input type="time" className="form-control" id="editTimeBegin" defaultValue={selectedProduct.time_begin} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="editTimeEnd" className=" text-white">Time End</label>
                                        <input type="time" className="form-control" id="editTimeEnd" defaultValue={selectedProduct.time_end} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="editPrice" className=" text-white">Price</label>
                                        <input type="number" min={1000} className="form-control" id="editPrice" defaultValue={selectedProduct.price} />
                                    </div>
                                    <button type="submit" className="btn bg-danger text-white">Update</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Edit;