import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
    return (
        
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form
              method="post"
              className="form-form"
              action="edit.php"
              encType="multipart/form-data"
            >
              <div className="modal-header">
                <h5 className="modal-title">EDIT</h5>
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
              <div className="modal-body" id="modal-body">
                
                {/* <input type="hidden" name="action" value="add"> Trường ẩn để xác định hành động */}
                <input type="hidden" id="id" name="id" />
                <label htmlFor="name" className="title-title">
                  Name:
                </label>
                <input type="text" id="name" className="input-btn" name="name" />
                <br />
                <br />
                <label htmlFor="avatar" className="title-title">
                  Avatar:
                </label>
                <input
                  disabled=""
                  style={{
                    border: "none",
                    color: "white",
                    backgroundColor: "#0B1A2A"
                  }}
                  id="avatar"
                  className="input-btn"
                  type="text"
                  name="avatar"
                />
                <input type="hidden" id="old_img" name="old_img" />
                <input
                  type="file"
                  style={{ color: "white" }}
                  name="up_avatar"
                />
                <br />
                <br />
                <label htmlFor="date" className="title-title">
                  Premiere date:
                </label>
                <input
                  type="date"
                  id="premiere_date"
                  className="input-btn"
                  name="premiere_date"
                />
                <br />
                <br />
                <label htmlFor="country" className="title-title">
                  Country:
                </label>
                <input name="country" id="country" className="input-btn" />
                <br />
                <br />
                <label htmlFor="describe" className="title-title">
                  Describe:
                </label>
                <textarea
                  rows={6}
                  cols={50}
                  name="description"
                  id="description"
                  type="text"
                  className="input-btn"
                  defaultValue={""}
                />
                <br />
                <br />
                <label htmlFor="trailer" className="title-title">
                  Trailer:
                </label>
                <input
                  disable=""
                  style={{
                    border: "none",
                    color: "white",
                    backgroundColor: "#0B1A2A"
                  }}
                  className="input-btn"
                  name="trailer"
                  id="trailer"
                  type="text"
                />
                <input type="file" style={{ color: "white" }} name="up_trailer" />
                <br /> <br />
                <div className="category">
                  <label htmlFor="name" className="title-title">
                    Category
                  </label>
                  <input type="hidden" name="cat" id="cat" defaultValue="" />
                  <label>
                    <input
                      type="checkbox"
                      className="input-btn"
                      name="cat[]"
                      defaultValue=""
                    />
                  </label>
                </div>
                <div className="modal-footer">
                  <input
                    type="submit"
                    name="submit"
                    className="btn bg-danger text-white"
                    defaultValue="Update"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
    //   </div>
    )
}
export default Edit;