import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";
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
  <div class="row">
    <div class="col-lg-2 background-left ">
      <div>
        <img
          class="logo"
          src="/asset/picture/3e1b693d-9dc1-43e7-b517-763a153989af-removebg-preview (2).png"
          alt=""
        />
        <b class="logo_text">MoonLight</b>
      </div>
      <div class="row">
        <a href="" class="icon-item">
          <ion-icon name="person" />
          <b> User</b>
        </a>
      </div>
      <br />
      <br />
      <div class="row">
        <p class="icon-play">
          <ion-icon name="play-circle" />
          <b> Films</b>
        </p>
      </div>
      <br/>
      <br/>
      <div class="row">
        <a href="" class="icon-item">
          <i class="fa-solid fa-calendar-days"></i>
          <b> Schedule</b>
        </a>
      </div>
    </div>
    <div class="col-lg-10 background-right">
      <div class="row">
        <div class="col-lg-10">{/*  */}</div>
        <div class="col-lg-2">
          <div class="icon-user">
            <ion-icon name="person-circle" class="icon-acc" />
            <a class="text-signout" href="#">
              Kieu
            </a>
          </div>
        </div>
      </div>
      <div class="row backgroud-bar">
        <div class="col-sm-3">
          <a href="" class="bar-user">
            <span>User </span>
          </a>
          <span class="line-line">/</span>
          <span class="bar-film">Films</span>
        </div>
        <div class="col-sm-6">{/*  */}</div>
        <div class="col-sm-3">
          <span class="mess">Hello!</span>
          <span class="name-acc">Kieu hi</span>
        </div>
      </div>
      <div class="container">
        <br />
        <br />
        {/* Nút mở modal Add Film */}
        
        <button type="button" class="btn bg-danger text-white" data-bs-toggle="modal" data-bs-target="#addModal">
          Add +
        </button>
        {/* <Add/> */}
        <div
          id="addModal"
          tabIndex={-1}
          role="dialog"
          class="modal fade"
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
        class="modal fade"
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
        class="modal fade"
        data-backdrop="static"
      >
        <AddSchedule/>
        </div>

        <div class="table-responsive">
          <table
            class="table table-responsive"
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