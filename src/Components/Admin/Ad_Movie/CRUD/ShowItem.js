import Edit from './Edit';
import Delete from './Delete';
import React from 'react';
// import $ from "jquery";

const ShowItem = ({ movie }) => {
   
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
                <td>{movie.category}</td>
                <td>
                  
                  <button  type="button" data-bs-toggle="modal" data-bs-target='#editModal' class='btn-edit'  data-id={movie.id} >
                  
                  <ion-icon name="pencil-outline" class="icon-ac-edit"/>
                
                
                </button>
                  <Edit id={movie.id}/>
                  <Delete delete={movie.id}></Delete>
               
                 
                  <button type='button' class='btn-schedule'  data-bs-toggle='modal' data-bs-target='#scheduleModal'  data-id={movie.id}> <ion-icon class='icon-ac-add' name='add-circle-outline'></ion-icon></button>
                </td>
              </tr>
      </>
    );
  };
export default ShowItem;