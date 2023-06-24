import React, { useState, useEffect,useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import $ from "jquery";

function Edit({ id, handleCloseEdit}){
  const [movies, setMovies] = useState([]);
  const [cats,setCats]=useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
    useEffect(() => {
      // console.log('useEffect');
    
      const fetchData = async (id) => {
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/movie/${id}`);
          const movie = await response.json();
          setMovies(movie);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };
      fetchData(id);
      fetchCats(id);
    }, [id,movies]);
    
    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/cat")
        .then(response => response.json())
        .then(cat => setCats(cat))
        .catch(error => console.error(error));
    }, []);
    const fetchCats = (id) => {
      fetch(`http://127.0.0.1:8000/api/movieCat/${id}`)
        .then(response => response.json())
        .then(catMovie => setSelectedCategories(catMovie))
        .catch(error => console.error(error));
        // console.log('movCat',selectedCategories);
    };
    // console.log("Next Movie ID:", nextMovieId);
    const handleCheckboxChange = (e, categoryId) => {
        if (e.target.checked) {
          setSelectedCategories(prevSelected => [...prevSelected, categoryId]);
        } else {
          setSelectedCategories(prevSelected => prevSelected.filter(id => id !== categoryId));
        }
        console.log(categoryId);
      };
const imageRef = useRef(null);
const handleInputChange = (event) => {
    var target = event.target;
    var name = target.name;
    var type = target.type;
    var value = target.value;
    if (type === 'file') {
        value = imageRef.current.value.replace(/C:\\fakepath\\/i, "/picture/");
    }
    if(name!='category'){setMovies({ ...movies, [name]: value })};
};
// $("#closeModalEditBtn").click();

const handleSubmit = async (event) => {
  console.log(12121,movies);
  // var idInput = document.getElementById("edit-id");
  // var id = idInput.value;
    event.preventDefault();
    if(id &&  movies){
      // console.log('abc',id,selectedCategoriesj);

    try {
        await axios.put(`http://127.0.0.1:8000/api/movie/${id}`, movies);
        setMovies({
          name:'',
          avatar:'',
          premiere_date: '',
          description: '',
          country: '',
          trailer: '',
          // category: '',
          id:0
        });
        for (const categoryId of selectedCategories) {
          await axios.post('http://127.0.0.1:8000/api/movieCat', {
            movie_id: id,
            cat_id: categoryId
          });
        }
        setSelectedCategories([])
        alert('Product edited successfully!');

        setTimeout(() => {
            window.location = 'http://localhost:3000/Show';
        }, 100);
    } catch (error) {
        console.log('Error adding product: ', error);
    }
};}
  

    return (
      <div
      data-backdrop="static"
      // class="modal"
      id="editModal"
      tabIndex="{-1}"
      role="dialog"
      aria-labelledby="editModalLabel"
      aria-hidden="true"
    >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <form
              method="post"
              class="form-form"
              onSubmit={handleSubmit}
              onChange={handleInputChange}
              encType="multipart/form-data">
              <div class="modal-header">
                <h5 class="modal-title">Modal Edit Movies</h5>
                <button
                onClick={() => handleCloseEdit()}
                class="btn-close"
                type='button'
                >
                  {/* New */}
                </button>
              </div>
              <div class="modal-body" id="modal-body">
                
                {/* <input type="hidden" name="action" value="add"> Trường ẩn để xác định hành động */}
                {/* <input type="hidden" id="edit-id" name="id"  /> */}
                <label htmlFor="name" class="title-title">Name:</label>
                <input type="text" class="input-btn" name="name" id="name" required  value={movies.name} onChange={handleInputChange}/>
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
                  onChange={handleInputChange}
                />
                <br />
                <br />
                <label htmlFor="date" class="title-title">Premiere date:</label>
                <input type="date"  class="input-btn" name="premiere_date" id="premiere_date"  value={movies.premiere_date} onChange={handleInputChange}/>
                <br />
                <br />
                
                <label htmlFor="country" class="title-title">Country:</label>
                <input type='text' class="input-btn"  name="country" id="country"  value={movies.country} onChange={handleInputChange}/>
                <br />
                <br />
                <label htmlFor="describe" class="title-title">Description:</label>
                <textarea
                  rows={6}
                  cols={50}
                  name="description"
                  id="description"
                  type="text"
                  class="input-btn"
                  value={movies.description}
                  onChange={handleInputChange}
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
                  value={movies.trailer} 
                  onChange={handleInputChange}
                />
                <input type="file" style={{ color: "white" }} name="up_trailer" />
                <br /> <br />

                <div class="category">
                        {cats && cats.map((cat)=> (
                        <label key={cat.id}>
                            <input type="checkbox" name='category' id={cat.id} value={cat.name}  
                            onChange={(e) => handleCheckboxChange(e, cat.id)}
                            checked={selectedCategories.includes(cat.id)}
                            />
                            <span>{cat.name}</span>
                        </label>
                        ))}
                    </div>
                <div class="modal-footer">
                  <input type="submit" name="submit" class="btn bg-danger text-white" defaultValue="Update"/>
                  
                </div>
              </div>
            </form>
          </div>
        </div>
   </div>
    )
}
export default Edit;
