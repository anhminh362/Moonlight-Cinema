import Edit from './Edit';
import Delete from './Delete';
import React from 'react';
// import $ from "jquery";
import { useState,useEffect } from 'react';
const ShowItem = ({ movie }) => {
  //   const [cats,setCats]=useState();

  // const Cats=({id})=>{
  //   useEffect(() => {
  //     fetch(`http://127.0.0.1:8000/api/cat/${id}`)
  //       .then(response => response.json())
  //       .then(cat => setCats(cat));
  //     //   console.log(cats);
  //   }, [id,cats]);
  // }
  // Cats(movie.id)
  const [cats, setCats] = useState([]);
  const [catNames,setCatNames]=useState([]);
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
          return [...prevCatNames, catNameData.name];
        }
        return prevCatNames;
      });
    })
    .catch(error => console.error(error));  }
  useEffect(() => {
    cats.forEach(cat => {
      fetchCatName(cat.cat_id);
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
                {/* {cats.map((cat, index) => (
                  <p key={index}>{catName.name}</p>
                ))} */}
                 {catNames.map((catName, index) => (
            <p key={index}>{catName}</p>
          ))}
                </td>
                <td>
                  
                  <button  type="button" data-bs-toggle="modal" data-bs-target='#editModal'  data-id={movie.id} >
                  
                  <ion-icon name="pencil-outline" class="icon-ac-edit"/>
                
                
                </button>
                  <Edit id={movie.id}/>
                  <Delete delete={movie.id}></Delete>
               
                 
                  <button type='button'  data-bs-toggle='modal' data-bs-target='#scheduleModal'  data-id={movie.id}> <ion-icon class='icon-ac-add' name='add-circle-outline'></ion-icon></button>
                </td>
              </tr>
      </>
    );
  };
export default ShowItem;