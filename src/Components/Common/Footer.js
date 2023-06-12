import React from 'react';


const Footer = () => {
    return (
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                        <ul>
                            <li>
                                <div><img class="logo"
                                    src="picture/3e1b693d-9dc1-43e7-b517-763a153989af-removebg-preview (2).png"
                                    alt=""></img>Moonlight
                                </div>
                            </li>
                            <li><p class="text">We guarantee quality and satisfaction when coming to our movie ticket booking
                                site.</p></li>
                        </ul>

                        <div class="contact_icon">
                            <i class="fa-brands fa-square-facebook"></i>
                            <i class="fa-brands fa-square-twitter"></i>
                            <i class="fa-brands fa-square-whatsapp"></i>
                            <i class="fa-brands fa-square-instagram"></i>
                        </div>
                    </div>
                    <div class="col-sm-3"><br></br>
                        <h4 class="text-footer">Quick Link</h4>
                        <ul>
                            <li><a href="homepage.php">About Us</a></li>
                            <li><a href="homepage.php">Movies</a></li>
                            <li><a href="homepage.php">Partner</a></li>
                            <li><a href="homepage.php">Help</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-3"><br></br>
                        <h5 class="text-footer">Important</h5>
                        <ul>
                            <li><a href="homepage.php">Support</a></li>
                            <li><a href="homepage.php">FAQ</a></li>
                            <li><a href="homepage.php">Check</a></li>
                            <li><a href="homepage.php">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-3"><br></br>
                        <h5 class="text-footer">Contact</h5>
                        <ul>
                            <li><p class="text">Subscribe our newsletter to get latest update & news.</p></li>
                            <li><input type="text" name="Send" class="Send" placeholder="   Enter Email"></input>
                                <button type="submit" class="btn btn-primary">Send</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </footer >
    )
}
export default Footer;