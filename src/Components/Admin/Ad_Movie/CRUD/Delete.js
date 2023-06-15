import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Delete(props) {
    const deleteMovies = async (id) => {
        if (window.confirm(`Bạn muốn xóa sản phẩm có id là ${id}`)) {
            try {
                await axios.delete(`https://63aa9cf0fdc006ba6046fb1c.mockapi.io/movie/${id}`, {});
                alert("Xóa thành công");
                // fetchMovies();

            } catch (error) {
                console.log(error);
                alert("Xóa không thành công");
            }
        } else {
            alert("Xóa không thành công");
        }
    };

    return (
        <div>
          {/* <button className="btn btn-danger btn-sm" onClick={()=>deleteMovies(props.delete)}>Delete</button> */}
          <button data-tag="allowRowEvents" type="button" onClick={() => { deleteMovies(props.delete); }} style={{ textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}><ion-icon name='trash-outline' class='icon-ac-del' /></button>
        </div>
    )
}
export default Delete;