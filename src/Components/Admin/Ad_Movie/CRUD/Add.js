import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
    return (
        
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title">FOMR ADD</h5>
                <button
                    type="button"
                    name="close"
                    className="btn-close"
                    data-dismiss="modal"
                    aria-label="Đóng"
                >
                    {/* <span aria-hidden="true">&times;</span> */}
                </button>
                </div>
                <div className="modal-body">
                <form
                    method="post"
                    className="form-form"
                    action="add.php"
                    encType="multipart/form-data"
                >
                    <br />
                    
                    {/* <input type="hidden" name="action" value="add"> Trường ẩn để xác định hành động */}
                
                    <input
                    type="hidden"
                    name="id"
                    defaultValue="<?php echo $row['id']; ?>"
                    />
                    <label htmlFor="name" className="title-title">
                    Name:
                    </label>
                    <input type="text" className="input-btn" name="name" />
                    <br />
                    <br />
                    <label htmlFor="avatar" className="title-title">
                    Avatar:
                    </label>
                    <input
                    type="file"
                    style={{ color: "white" }}
                    className="input-btn"
                    name="avatar"
                    />
                    <br />
                    <br />
                    <label htmlFor="date" className="title-title">
                    Premiere date:
                    </label>
                    <input type="date" className="input-btn" name="premiere_date" />
                    <br />
                    <br />
                    <label htmlFor="country" className="title-title">
                    Country:
                    </label>
                    <input name="country" className="input-btn" />
                    <br />
                    <br />
                    <label htmlFor="describe" className="title-title">
                    Describe:
                    </label>
                    <input name="description" type="text" className="input-btn" />
                    <br />
                    <br />
                    <label htmlFor="trailer" className="title-title">
                    Trailer:
                    </label>
                    <input
                    name="trailer"
                    style={{ color: "white" }}
                    type="file"
                    className="input-btn"
                    />
                    <br />
                    <br />
                    <label htmlFor="name" className="title-title">
                    Category:
                    </label>
                    <div className="category">
                    <label>
                        <input
                        type="checkbox"
                        name="<?php echo $category['name'] ?>"
                        defaultValue="<?php echo $category['name'] ?>"
                        />
                    </label>
                    </div>
                    <div className="modal-footer">
                    <input
                        type="submit"
                        name="submit"
                        className="btn bg-danger text-white"
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