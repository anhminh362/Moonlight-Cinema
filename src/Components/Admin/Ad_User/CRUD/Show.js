import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Ad_User.css';
import '../../Admin.css';
import { Link } from 'react-router-dom';
const AdminUsersCRUD = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);



  return (
    <div className="container-fluid">
        <br></br>
      <div className="row">
        <div className="col-lg-2 background-left">
          <div>
            <img className="logo" src="http://localhost/cinema-fe/asset/picture/3e1b693d-9dc1-43e7-b517-763a153989af-removebg-preview%20(2).png" alt="" />
            <b className="logo_text">MoonLight</b>
          </div>
          <div className="row">
            <a href="#" className="icon-user-play">
              <ion-icon name="person"></ion-icon>
              <b> User</b>
            </a>
          </div>
          <br />
          <br />
          <div className="row">
            <a href="/Show" className="icon-item">
              <ion-icon name="play-circle"></ion-icon>
              <b> Films</b>
            </a>
          </div>
          <br />
          <br />
          <div className="row">
            <a href="/ShowSchedule" className="icon-item">
              <i className="fa-solid fa-calendar-days"></i>
              <b> Schedule</b>
            </a>
          </div>
        </div>
        <div className="col-lg-10 background-right">
          <div className="row">
            <div className="col-lg-10"></div>
            <div className="col-lg-2">
              <div className="icon-user">
                <ion-icon name="person-circle" className="icon-acc"></ion-icon>
                <a className="text-signout" href="#">
                  Kieu
                </a>
              </div>
            </div>
          </div>
          <div className="row backgroud-bar">
            <div className="col-sm-3">
              <span className="bar-user">User </span>
              <span className="line-line">/</span>
              <span className="bar-film">Films</span>
            </div>
            <div className="col-sm-6"></div>
            <div className="col-sm-3">
              <span className="mess">Hello!</span>
              <span className="name-acc">Kieu hi</span>
            </div>
          </div>
          <div className="container">
            <br />
            <div className="table-responsive">
            <table className="table table-responsive" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Full name</th>
                  {/* <th>Create at</th> */}
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="tab">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    {/* <td>{user.created_at}</td> */}
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.role === 1 ? 'user' : 'admin'}</td>
                    <td>{user.status ? 'Active' : <p style={{ color: 'gray' }}>Inactive</p>}</td>
                    <td>
                      <Link to={`/Delete/${user.id}`}><button id="btn_act"><ion-icon name="trash-outline" className="del-icon"></ion-icon></button></Link>
                      {user.status ? (
                            <Link to={`/BlockUser/${user.id}`}>
                              <button id="btn_act">
                               <ion-icon name="lock-open-outline" className="del-icon"></ion-icon>
                              </button>
                            </Link>
                          ) : (
                            <Link to={`/UnblockUser/${user.id}`}>
                              <button id="btn_act">
                                <ion-icon name="lock-closed-outline" className="unlock-icon"></ion-icon>
                              </button>
                            </Link>
                          )}
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
  );
};

export default AdminUsersCRUD;
