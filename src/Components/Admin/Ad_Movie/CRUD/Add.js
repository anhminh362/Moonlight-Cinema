import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
    return (
        
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title">FOMR ADD</h5>
                <button
                    type="button"
                    name="close"
                    class="btn-close"
                    data-dismiss="modal"
                    aria-label="Đóng"
                >
                    {/* <span aria-hidden="true">&times;</span> */}
                </button>
                </div>
                <div class="modal-body">
                <form
                    method="post"
                    class="form-form"
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
                    <label htmlFor="name" class="title-title">
                    Name:
                    </label>
                    <input type="text" class="input-btn" name="name" />
                    <br />
                    <br />
                    <label htmlFor="avatar" class="title-title">
                    Avatar:
                    </label>
                    <input
                    type="file"
                    style={{ color: "white" }}
                    class="input-btn"
                    name="avatar"
                    />
                    <br />
                    <br />
                    <label htmlFor="date" class="title-title">
                    Premiere date:
                    </label>
                    <input type="date" class="input-btn" name="premiere_date" />
                    <br />
                    <br />
                    <label htmlFor="country" class="title-title">
                    Country:
                    </label>
                    <input name="country" class="input-btn" />
                    <br />
                    <br />
                    <label htmlFor="describe" class="title-title">
                    Describe:
                    </label>
                    <input name="description" type="text" class="input-btn" />
                    <br />
                    <br />
                    <label htmlFor="trailer" class="title-title">
                    Trailer:
                    </label>
                    <input
                    name="trailer"
                    style={{ color: "white" }}
                    type="file"
                    class="input-btn"
                    />
                    <br />
                    <br />
                    <label htmlFor="name" class="title-title">
                    Category:
                    </label>
                    <div class="category">
                    <label>
                        <input
                        type="checkbox"
                        name="<?php echo $category['name'] ?>"
                        defaultValue="<?php echo $category['name'] ?>"
                        />
                    </label>
                    </div>
                    <div class="modal-footer">
                    <input
                        type="submit"
                        name="submit"
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