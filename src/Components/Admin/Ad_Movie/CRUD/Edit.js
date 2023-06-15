import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import $ from "jquery";

function Edit(props){
  const submitEditProduct = async (e) => {
    e.preventDefault();
    const id = $("#editID").val();
    const image =
        $("#avatar").val().split("\\")[2] !== "" &&
            $("#avatar").val().split("\\")[2] !== undefined
            ? $("#avatar").val().split("\\")[2]
            : $("#preview-image-before-edit").attr("src").split("/")[6];

    const fd = new FormData();
    // fd.append("uploadImage", fileUpload);

    if ($("#avatar").val().split("\\")[2]) {
        await axios.post(`https://63aa9cf0fdc006ba6046fb1c.mockapi.io/image`, fd);
    }

    try {
        await axios.put(`https://63aa9cf0fdc006ba6046fb1c.mockapi.io/movie/${id}`, {
            name: $("#name").val(),
            avatar: image,
            premiere_date: $("#premiere_date").val(),
            description: $("#description").val(),
            country: $("#country").val(),
            trailer: $("#trailer").val(),
            category: $("#category").val(),
            
        });
        alert("Sửa thành công");
        $("#closeModalEditBtn").click();
        // fetchProducts();
    } catch (error) {
        console.log(error);
        alert("Sửa không thành công");
    }
};
const editProduct = (id) => {
    const movies = movies.find((movie) => movie.id === id);
    $("#editID").val(movies.id);
    $("#name").val(movies.name);
    $("#avatar").val("");
    $("#preview-image-before-edit").attr("src", `https://63aa9cf0fdc006ba6046fb1c.mockapi.io/image/${movies.avatar}`);
    $("#premiere_date").val(movies.premiere_date);
    $("#country").val(movies.country);
    $("#description").val(movies.description);
    $("trailer").val(movies.trailer);
    $("category").val(movies.category);
};
   const editMovies = (id) => {
  const movie = movie.find((movie) => movie.id === id);
  $("#editID").val(movie.id);
  $("#name").val(movie.name);
  $("#avatar").val("");
  $("#preview-image-before-edit").attr("src", `https://63aa9cf0fdc006ba6046fb1c.mockapi.io/image/${movie.avatar}`);
  $("#premiere_date").val(movie.premiere_date);
  $("#country").val(movie.country);
  $("#description").val(movie.description);
  $("#trailer").val(movie.trailer);
  $("#category").val(movie.category);
};
    return (
        
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <form
              method="post"
              class="form-form"
              action="edit.php"
              encType="multipart/form-data">
              <div class="modal-header">
                <h5 class="modal-title">Modal Edit Movies</h5>
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

                <label htmlFor="name" class="title-title">Name:</label>
                <input type="text" class="input-btn" name="name" id="name" required />
                <br />
                <br />
                <label htmlFor="avatar" class="title-title">Avatar:</label>
                <input disabled="" style={{border: "none",color: "white",backgroundColor: "#0B1A2A"}}
                  id="avatar" class="input-btn" type="text"name="avatar" />

                <input type="hidden" id="old_img" name="old_img" />
                <input
                  type="file"
                  style={{ color: "white" }}
                  name="up_avatar"
                />
                <br />
                <br />
                <label htmlFor="date" class="title-title">Premiere date:</label>
                <input type="date"  class="input-btn" name="premiere_date" id="premiere_date"/>
                <br />
                <br />
                
                <label htmlFor="country" class="title-title">Country:</label>
                <input type='text' class="input-btn"  name="country" id="country" />
                <br />
                <br />
                <label htmlFor="describe" class="title-title">Describe:</label>
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
                <label htmlFor="trailer" class="title-title">Trailer:</label>
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
                  <label htmlFor="name" class="title-title">Category</label>
                  <input type="hidden" name="cat" id="cat" defaultValue="" />
                  <label>
                    <input type="checkbox" class="input-btn" name="cat[]" defaultValue=""/>
                  </label>
                </div>

                <div class="modal-footer">
                  <input type="submit" name="submit" class="btn bg-danger text-white" defaultValue="Update"/>
                </div>

              </div>
            </form>
          </div>
        </div>
    //   </div>
    )
}
export default Edit;