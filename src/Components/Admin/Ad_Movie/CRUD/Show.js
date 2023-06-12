import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Ad_Movie.css'; 
const Show = () => {
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   fetch("https://63aaf0fdc006ba6046fb1c.mockapi.io/movie")
  //     .then(response => response.json())
  //     .then(movie => setMovies(movie));
  // }, []);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:3000/products")
    fetch("https://63aa9cf0fdc006ba6046fb1c.mockapi.io/movie")
      .then(response => response.json())
      .then(movie => setMovies(movie));
  }, []);
  

  return (
    // <div>
      <div className="">
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
        {" "}
        <br />
        <br />
        {/* table */}
        <a className="add-btn" href="#">
          Add +
        </a>{" "}
        <br />
        <br />
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
                <th>Describe</th>
                <th>Trailer</th>
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
                <td>{movie.describe}</td>
                <td>{movie.trailer}</td>
                <td>

                  <span>
                    <ion-icon name="pencil-outline" className="icon-ac-edit" />
                  </span>
                  <span>
                    <ion-icon name="trash-outline" className="icon-ac-del" />
                  </span>
                </td>
              </tr>
            ))}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

    // </div>
  )

};

export default Show;