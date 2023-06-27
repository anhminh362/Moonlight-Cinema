import React from 'react';
// import { useParams } from 'react-router-dom';
import axios from 'axios';

function Delete(props) {
    const deleteMovies = async (id) => {
        if (window.confirm(`Bạn muốn xóa sản phẩm có id là ${id}`)) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/movie/${id}`, {});
                alert("Xóa thành công");

            } catch (error) {
                console.log(error);
                alert("Xóa không thành công");
            }
            try {
                await axios.delete(`http://127.0.0.1:8000/api/movieCat/${id}`, {});
                alert("Xóa thành công");

            } catch (error) {
                console.log(error);
                alert("Xóa không thành công");
            }
        } else {
            alert("Xóa không thành công");
        }
    };

    return (
        <b>
          <button data-tag="allowRowEvents" type="button" onClick={() => { deleteMovies(props.delete); }} 
          style={{ textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}>
        <ion-icon name='trash-outline' class='icon-ac-del' /></button>
        </b>
    )
}
export default Delete;