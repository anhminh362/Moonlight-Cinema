import Edit from './Edit';
import Delete from './Delete';
import React from 'react';
// import $ from "jquery";
import { useState,useEffect } from 'react';
const ShowItem = ({ movie,handleClickEditEvent,handleClickScheduleEvent }) => {

  const [cats, setCats] = useState([]);
  const [catNames,setCatNames]=useState([]);
  // const [showEdit,setShowEdit]=useState(false);
  
  const fetchCats = (id) => {
    fetch(`http://127.0.0.1:8000/api/movieCat/${id}`)
      .then(response => response.json())
      .then(cat => setCats(cat))
      .catch(error => console.error(error));
      // console.log(cats);
  };

  useEffect(() => {
    fetchCats(movie.id);
  }, [movie.id]);

  const fetchCatName=(id)=>{
   
    fetch(`http://127.0.0.1:8000/api/cat/${id}`)
    .then(res=>res.json())
    // .then(catName=>setCatName(catName))
    .then(catNameData => {
      setCatNames(prevCatNames => {
        if (!prevCatNames.includes(catNameData.name)) {
          // console.log(2);
          return [...prevCatNames, catNameData.name];
        }
        return prevCatNames;
      });
    })
    .catch(error => console.error(error));  }
  useEffect(() => {
    cats.forEach(cat => {
      fetchCatName(cat);
    });
  }, [cats]);
   
    return (
      <>
       <tr>
                <td>{movie.id}</td>
                <td>{movie.avatar}</td>
                <td>{movie.name}</td>
                <td>{movie.premiere_date}</td>
                <td>{movie.country}</td>
                <td>{movie.description}</td>
                <td>{movie.trailer}</td>
                <td>
                 {catNames.map((catName, index) => (
            <p key={index}>{catName}</p>
          ))}
                </td>
                <td>
                  
                  <button  type="button"  id='btn-edit' onClick={event => handleClickEditEvent(movie.id)}   >
                  
                  <ion-icon name="pencil-outline" class="icon-ac-edit" id={movie.id}/>
                
                
                </button>
                  
                  <Delete delete={movie.id}></Delete>
               
                 
                  <button type='button'  id='btn-schedule'   onClick={event => handleClickScheduleEvent(movie.id)}> 
                  <ion-icon class='icon-ac-add' name='add-circle-outline' id={movie.id}></ion-icon></button>
                </td>
              </tr>
            
      </>
    );
  };
export default ShowItem;