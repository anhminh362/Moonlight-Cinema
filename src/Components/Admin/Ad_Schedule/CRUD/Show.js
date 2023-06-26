import React, { useState, useEffect } from "react";
// import axios from "axios";
import '../Ad_Schedule.css';
import '../../Admin.css';
// import ShowAdSchedule from '../Ad_Schedule';
const Show = () => {
     
    const [schedules, setschedules] = useState([]);

    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/get-schedule")
        .then(response => response.json())
        .then(schedule => setschedules(schedule));
        console.log(schedules);
    }, []);

    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-2 background-left ">
                    <div><img class="logo" src="../../asset/picture/3e1b693d-9dc1-43e7-b517-763a153989af-removebg-preview (2).png" alt="" /><b class="logo_text">MoonLight</b></div>
                    <div class="row">
                        <a href="/ShowUser" class="icon-item">
                            <ion-icon name="person"></ion-icon>
                            <b> Users</b>
                        </a>
                    </div><br /><br />
                    <div class="row">
                        <a href="/Show" class="icon-item">
                            <ion-icon name="play-circle"></ion-icon>
                            <b> Films</b>
                        </a>
                    </div><br /><br />
                    <div class="row">
                        <a href="#" class="icon-schedule-play">
                            <i class="fa-solid fa-calendar-days"></i>
                            <b> Schedule</b>
                        </a>
                    </div>
                </div>
                <div class="col-lg-10 background-right">
                    <div class="row">
                        <div class="col-lg-10">
                        </div>
                        <div class="col-lg-2">
                            <div class="icon-user">
                                <ion-icon name="person-circle" class="icon-acc"></ion-icon>
                                <a class="text-signout" href="#">Kieu</a>
                            </div>
                        </div>
                    </div>
                    <div class="row backgroud-bar">
                        <div class="col-sm-3">
                            <span class="bar-user">User </span>
                            <span class="line-line">/</span>
                            <span class="bar-film">Schedule</span>
                        </div>
                        <div class="col-sm-6">

                        </div>
                        <div class="col-sm-3">
                            <span class="mess">Hello!</span>
                            <span class="name-acc">Kieu hi</span>
                        </div>
                    </div>

                    <div class="container"> <br /><br />
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
                                        <th>Movie</th>
                                        <th>Time Begin</th>
                                        <th>Time End</th>
                                        <th>Movie Date</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody id="tab">
                                    {schedules.map((schedule, index) => (
                                        // <ShowAdSchedule key={index} movie={schedule} />
                                        <tr key={index}>
                                            <td>{schedule.id}</td>
                                            <td>{schedule.movie_id}</td>
                                            <td>{schedule.room_id}</td>
                                            <td>{schedule.time_begin}</td>
                                            <td>{schedule.time_end}</td>
                                            <td>{schedule.movie_date}</td>
                                            <td>{schedule.price}</td>
                                            {/* <td>
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#editModal" className="btn-edit" data-id={schedule.id}>
                                                <ion-icon name="pencil-outline" className="icon-ac-edit" />
                                            </button>
                                            <Edit id={schedule.id} />
                                            <Delete delete={schedule.id} />
                                            </td> */}
                                        </tr>     
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Show;