import React, { useState, useEffect } from 'react';
import Add from './Add'; 
import '../Ad_Schedule.css';
import '../../Admin.css';
const Show = () => {
        return (
        <div class="container-fluid">
        <div class="row">
            <div class="col-lg-2 background-left ">
                <div><img class="logo" src="../../asset/picture/3e1b693d-9dc1-43e7-b517-763a153989af-removebg-preview (2).png" alt=""/><b class="logo_text">MoonLight</b></div>
                <div class="row">
                    <a href="ad_user.php" class="icon-play">
                        <ion-icon name="person"></ion-icon>
                        <b> Users</b>
                    </a>
                </div><br/><br/>
                <div class="row">
                    <a href="ad_film.php" class="icon-play">
                        <ion-icon name="play-circle"></ion-icon>
                        <b> Films</b>
                    </a>
                </div><br/><br/>
                <div class="row">
                    <a href="ad_schedule.php" class="icon-item">
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
                
                <div class="container"> <br/><br/>
                  {/* Modals Mở */}
                    <div className="container">
                        <button type="button" className="btn bg-danger text-white" data-bs-toggle="modal" data-bs-target="#addModal">
                            Add +
                        </button> <br/> <br/>
                        <Add/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}
export default Show;