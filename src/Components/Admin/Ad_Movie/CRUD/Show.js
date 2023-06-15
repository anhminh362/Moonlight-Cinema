import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Add from './Add'
import '../Ad_Movie.css'; 
import '../../Admin.css';
import '../../../../Styles/global.css';
import Edit from './Edit';
import AddSchedule from '../../Ad_Schedule/CRUD/Add';
import Delete from './Delete';
import axios from 'axios';

const Show = () => {

  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    // fetch("http://localhost:3000/products")
    fetch("https://63aa9cf0fdc006ba6046fb1c.mockapi.io/movie")
      .then(response => response.json())
      .then(movie => setMovies(movie));
  }, []);

  return (
    // <div>
  <div className="row">
    <div className="col-lg-2 background-left ">
      <div>
        <img
          className="logo"
          src="/asset/picture/3e1b693d-9dc1-43e7-b517-763a153989af-removebg-preview (2).png"
          alt=""
        />
        <b className="logo_text">MoonLight</b>
      </div>
      <div className="row">
        <a href="" className="icon-item">
          <ion-icon name="person" />
          <b> User</b>
        </a>
      </div>
      <br />
      <br />
      <div className="row">
        <p className="icon-play">
          <ion-icon name="play-circle" />
          <b> Films</b>
        </p>
      </div>
      <br/>
      <br/>
      <div className="row">
        <a href="" className="icon-item">
          <i className="fa-solid fa-calendar-days"></i>
          <b> Schedule</b>
        </a>
      </div>
    </div>
    <div className="col-lg-10 background-right">
      <div className="row">
        <div className="col-lg-10">{/*  */}</div>
        <div className="col-lg-2">
          <div className="icon-user">
            <ion-icon name="person-circle" className="icon-acc" />
            <a className="text-signout" href="#">
              Kieu
            </a>
          </div>
        </div>
      </div>
      <div className="row backgroud-bar">
        <div className="col-sm-3">
          <a href="" className="bar-user">
            <span>User </span>
          </a>
          <span className="line-line">/</span>
          <span className="bar-film">Films</span>
        </div>
        <div className="col-sm-6">{/*  */}</div>
        <div className="col-sm-3">
          <span className="mess">Hello!</span>
          <span className="name-acc">Kieu hi</span>
        </div>
      </div>
      <div className="container">
        <br />
        <br />
        {/* Nút mở modal Add Film */}
        
        <button type="button" className="btn bg-danger text-white" data-bs-toggle="modal" data-bs-target="#addModal">
          Add +
        </button>
        {/* <Add/> */}
        <div
          id="addModal"
          tabIndex={-1}
          role="dialog"
          className="modal fade"
          data-backdrop="static"
          aria-labelledby="addModalLabel"
          aria-hidden="true"
        >
          <Add/>
        </div>
        <br />
        <br />
        {/* Modal Edit */} 
        <div
        data-backdrop="static"
        className="modal fade"
        id="editModal"
        tabIndex="{-1}"
        role="dialog"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
          <Edit/>
        </div>

        {/* Modal Add Schedule*/} 
        <div
        id="scheduleModal"
        tabIndex={-1}
        role="dialog"
        className="modal fade"
        data-backdrop="static"
      >
        <AddSchedule/>
        </div>

        <div className="table-responsive">
          <table
            className="table table-responsive"
            id="dataTable"
            width="100%"
            cellSpacing={0}
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Premiere date</th>
                <th>Country</th>
                <th>Description</th>
                <th>Trailer</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="tab">
            {movies.map((movie, index) => (
              <tr key={index}>
                <td>{movie.id}</td>
                <td>{movie.avatar}</td>
                <td>{movie.name}</td>
                <td>{movie.premiere_date}</td>
                <td>{movie.country}</td>
                <td>{movie.description}</td>
                <td>{movie.trailer}</td>
                <td>{movie.category}</td>
                <td>
                  <button type="button" data-bs-toggle="modal" data-bs-target='#editModal' class='btn-edit' 
                  data-id={movie.id} data-name={movie.name} data-premiere_date={movie.premiere_date} data-country={movie.country}
                   data-describe={movie.description} data-trailer={movie.trailer} data-category={movie.category}>
                    <ion-icon name="pencil-outline" class="icon-ac-edit" />
                  </button>
                  
                  <Delete delete={movie.id}></Delete>

                  <button type='button' class='btn-schedule'  data-bs-toggle='modal' 
                  data-bs-target='#scheduleModal'  data-id={movie.id}> <ion-icon class=
                  'icon-ac-add' name='add-circle-outline'></ion-icon></button>
                </td>
              </tr>
            ))}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
};
export default Show;