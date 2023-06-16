import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="header">
                <div><img className="logo" src="picture/3e1b693d-9dc1-43e7-b517-763a153989af-removebg-preview (2).png"
                    alt=""></img><b className="logo_text">Moonlight</b></div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Movies</a>
                        <ul id="type-movies">
                            <li><a href="playing.php">Playing</a></li>
                            <li><a href="upcoming.php">Upcoming</a></li>
                        </ul>
                    </li>
                    <li>
                        <input id="search" type="text"></input>

                            <a href=""><i class="fas fa-magnifying-glass"></i></a></li>
                    <li><a href="/Login/">Login <i class="fas fa-user icon_user"></i></a></li>


                    {/* <li>
                        <a id="log_out" href="">
                            <div className="user-name"><i className="fas fa-user" ></i>
                                <div id="log-out"><a href='logout.php'>Log out</a></div>

                            </div>
                        </a>
                    </li>
                    <li><a href="login.php">Login <i className="fas fa-user" style={{ color: "aliceblue"}}></i></a></li> */}
                </ul>
                
                <label for="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
            </nav>

            <div className="search_site">
                <div className="search_result">
                </div>
            </div>

        </div>
    )
}
export default Header;