import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
    return (
        
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <form
              method="post"
              class="form-form"
              action="edit.php"
              encType="multipart/form-data"
            >
              <div class="modal-header">
                <h5 class="modal-title">EDIT</h5>
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
              <div class="modal-body" id="modal-body">
                
                {/* <input type="hidden" name="action" value="add"> Trường ẩn để xác định hành động */}
                <input type="hidden" id="id" name="id" />
                <label htmlFor="name" class="title-title">
                  Name:
                </label>
                <input type="text" id="name" class="input-btn" name="name" />
                <br />
                <br />
                <label htmlFor="avatar" class="title-title">
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
                  class="input-btn"
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
                <label htmlFor="date" class="title-title">
                  Premiere date:
                </label>
                <input
                  type="date"
                  id="premiere_date"
                  class="input-btn"
                  name="premiere_date"
                />
                <br />
                <br />
                <label htmlFor="country" class="title-title">
                  Country:
                </label>
                <input name="country" id="country" class="input-btn" />
                <br />
                <br />
                <label htmlFor="describe" class="title-title">
                  Describe:
                </label>
                <textarea
                  rows={6}
                  cols={50}
                  name="description"
                  id="description"
                  type="text"
                  class="input-btn"
                  defaultValue={""}
                />
                <br />
                <br />
                <label htmlFor="trailer" class="title-title">
                  Trailer:
                </label>
                <input
                  disable=""
                  style={{
                    border: "none",
                    color: "white",
                    backgroundColor: "#0B1A2A"
                  }}
                  class="input-btn"
                  name="trailer"
                  id="trailer"
                  type="text"
                />
                <input type="file" style={{ color: "white" }} name="up_trailer" />
                <br /> <br />
                <div class="category">
                  <label htmlFor="name" class="title-title">
                    Category
                  </label>
                  <input type="hidden" name="cat" id="cat" defaultValue="" />
                  <label>
                    <input
                      type="checkbox"
                      class="input-btn"
                      name="cat[]"
                      defaultValue=""
                    />
                  </label>
                </div>
                <div class="modal-footer">
                  <input
                    type="submit"
                    name="submit"
                    class="btn bg-danger text-white"
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