import React, { useState, useEffect } from 'react';
import axios from 'axios';
import $ from "jquery";
import '../Ad_Movie.css'

const Add = ({handleCloseAdd}) => {
  const [newMovie, setNewMovie] = useState([]);
  const [cats,setCats]=useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
    // const [selectedCategoryId, setSelectedCategoryId] = useState(0);
useEffect(() => {
  fetch("http://127.0.0.1:8000/api/movie")
    .then(response => response.json())
    .then(movieData => setNewMovie(movieData))
    .catch(error => console.error(error));
}, []);
useEffect(() => {
  fetch("http://127.0.0.1:8000/api/cat")
    .then(response => response.json())
    .then(cat => setCats(cat))
    .catch(error => console.error(error));
}, []);

let nextMovieId = 0;
if (newMovie.length > 0) {
  let sortedMovies = newMovie.sort((a, b) => b.id - a.id);
  nextMovieId = sortedMovies[0].id + 1;
}

// console.log("Next Movie ID:", nextMovieId);
const handleCheckboxChange = (e, categoryId) => {
    if (e.target.checked) {
      setSelectedCategories(prevSelected => [...prevSelected, categoryId]);
    } else {
      setSelectedCategories(prevSelected => prevSelected.filter(id => id !== categoryId));
    }
  };
    const onSubmitHandle = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://127.0.0.1:8000/api/movie", {
                name: $("#name").val(),
                avatar: $("#avatar").val().split("\\")[2],
                premiere_date: $("#premiere_date").val(),
                description: $("#description").val(),
                country: $("#country").val(),
                trailer: $("#trailer").val(),
                // category: $("#category").val(),
            });
            for (const categoryId of selectedCategories) {
                await axios.post('http://127.0.0.1:8000/api/movieCat', {
                  movie_id: nextMovieId,
                  cat_id: categoryId
                });
              }
            $("#avatar").val("");
            alert("Thêm thành công");
            // $("#closeModalAddBtn").click();

        } catch (error) {
            console.log(error);
            alert("Thêm không thành công");
        }
    };
   

    return (
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title">FOMR ADD</h5>
                <button 
                type="button" 
                className="btn-close"  
                onClick={() => handleCloseAdd()}
                >
                    {/* <span aria-hidden="true">&times;</span> */}
                </button>
                </div>
                <div className="modal-body">
                <form className="form-form" onSubmit={onSubmitHandle} encType="multipart/form-data">
                    <br />
                    {/* <input type="hidden" name="id" defaultValue=""/> */}
                    <label htmlFor="name" className="title-title">Name:</label>
                    <input type="text" className="input-btn" name="name" id='name'/>
                    <br />
                    <br />
                    <label htmlFor="avatar" className="title-title">Avatar:</label>
                    <input type="file" style={{ color: "white" }} className="input-btn" name="avatar" id='avatar'/>
                    <br />
                    <br />
                    <label htmlFor="date" className="title-title">Premiere date:</label>
                    <input type="date" className="input-btn" name="premiere_date" id='premiere_date'/>
                    <br />
                    <br />
                    <label htmlFor="country" className="title-title">Country:</label>
                    <input type='text' className="input-btn" name="country" id='country' />
                    <br />
                    <br />
                    <label htmlFor="describe" className="title-title">Describe:</label>
                    < textarea  type="text"  className="input-btn" name="description" id='description'/>
                    <br />
                    <br />
                    <label htmlFor="trailer" className="title-title">Trailer:</label>
                    <input type="file"  className="input-btn"  name="trailer" style={{ color: "white" }} />
                    <br />
                    <br />
                    <label htmlFor="name" className="title-title">Category:</label>
                    <div className="category">
                        {cats && cats.map((cat)=> (
                        <label key={cat.id}>
                            <input type="checkbox" name={cat.name} id={cat.id} value={cat.name}  
                            onChange={(e) => handleCheckboxChange(e, cat.id)}
                            checked={selectedCategories.includes(cat.id)}
                            />
                            <span>{cat.name}</span>
                        </label>
                        ))}
                    </div>
                    <div classNameName="modal-footer">
                    <input
                        type="submit"
                        name="submit"
                        classNameName="btn bg-danger text-white"
                        defaultValue="Add"
                    />
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}
export default Add;