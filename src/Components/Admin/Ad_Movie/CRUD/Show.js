import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { Link } from 'react-router-dom';
import Add from './Add'
import '../Ad_Movie.css'; 
import '../../Admin.css';
import '../../../../Styles/global.css';
import ShowItem from './ShowItem';
import AddSchedule from '../../Ad_Schedule/CRUD/Add';
import Edit from './Edit';



const Show = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');
  console.log(role);
  if(role==1){
    alert('Please Log in as administrator');
    navigate('/');
  
  }
  const [movies, setMovies] = useState([]);
  const [showEdit,setShowEdit]=useState(false);
  const [showSchedule,setShowSchedule]=useState(false);
  const [showAdd,setShowAdd]=useState(false);
  const [id, setId] = useState(0);

  const handleEditCloseClick = () =>{
    setShowEdit(false);
    console.log(222);
  }
  const handleScheduleCloseClick = () =>{
    setShowSchedule(false);
    console.log(222);
  }
  const handleAddCloseClick=()=>{
    setShowAdd(false);
  }
  const handleAddClick=()=>{
    setShowAdd(true);
    console.log(111);
  }
  // const handleScheduleClick=()=>{
  //   setShowSchedule(true);
  //   console.log(111);
  // }
  const handleItemEditClick = num => {
    // 👇️ take the parameter passed from the Child component
    // setCount(current => current + num);
    
    console.log('argument from Child: ', num);
    setShowEdit(true);
    setId(num);
    console.log(showEdit);
    console.log('id',num);
  };
  const handleAddSchedule = num => {
    // 👇️ take the parameter passed from the Child component
    // setCount(current => current + num);
    
    console.log('argument from Child: ', num);
    setShowSchedule(true);
    setId(num);
    console.log('id',num);
  };
  useEffect(() => {
    
      fetch("http://127.0.0.1:8000/api/movie")
      .then(response => response.json())
      .then(movie => setMovies(movie));
      console.log(movies);
    
  }, []);
  
  return (
    // <div>
  <div class="row">
    <div class="col-lg-2 background-left ">
      <div>
        <a href='/'>
        <img
          class="logo"
          src="/asset/picture/3e1b693d-9dc1-43e7-b517-763a153989af-removebg-preview (2).png"
          alt=""
        />
        </a>
        <b class="logo_text">MoonLight</b>
      </div>
      <div class="row">
        <a href="/ShowUser" class="icon-item">
          <ion-icon name="person" />
          <b> User</b>
        </a>
      </div>
      <br />
      <br />
      <div class="row">
        <a href="/Show" class="icon-film-play">
          <ion-icon name="play-circle" />
          <b> Films</b>
        </a>
      </div>
      <br/>
      <br/>
      <div class="row">
        <a href="/ShowSchedule" class="icon-item">
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
        
        <button type="button" class="btn bg-danger text-white" onClick={event => handleAddClick()}>
          Add +
        </button>
        {/* <Add/> */}
        <div
          id="addModal"
          tabIndex={-1}
          role="dialog"
          // class="modal fade"
          data-backdrop="static"
          aria-labelledby="addModalLabel"
          aria-hidden="true"
        >
         {showAdd && (
          <Add  handleCloseAdd={handleAddCloseClick}/>)}
        </div>
        <br />
        <br />
        {showEdit && (
          <Edit id={id} handleCloseEdit={handleEditCloseClick}/>)}
        <div
        id="scheduleModal"
        tabIndex={-1}
        role="dialog"
        // class="modal fade"
        data-backdrop="static"
      >
        {showSchedule && (
        <AddSchedule id={id} handleCloseAddSchedule={handleScheduleCloseClick}/>)}
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
                <th>Describe</th>
                <th>Trailer</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="tab">
            {movies.map((movie, index) => (
             <ShowItem key={index} movie={movie} handleClickEditEvent={handleItemEditClick} handleClickScheduleEvent={handleAddSchedule} />
            ))}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>


    // </div>
  )

};

export default Show;