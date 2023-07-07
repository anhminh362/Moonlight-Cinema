import React from 'react';


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                            
                                <div><img className="logo"
                                    src="../picture/3e1b693d-9dc1-43e7-b517-763a153989af-removebg-preview (2).png"
                                    alt=""></img>Moonlight
                                </div>                                            
                            
                            <p className="text">We guarantee quality and satisfaction when coming to our movie ticket booking
                                site.</p>

                        <div className="contact_icon">
                            <i className="fa-brands fa-square-facebook"></i>
                            <i className="fa-brands fa-square-twitter"></i>
                            <i className="fa-brands fa-square-whatsapp"></i>
                            <i className="fa-brands fa-square-instagram"></i>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3"><br></br>
                        <h5 className="text-footer">Quick Link</h5>
                            <a className='a' href="homepage.php">About Us</a><br></br>
                            <a className='a' href="homepage.php">Movies</a><br></br>
                            <a className='a' href="homepage.php">Partner</a><br></br>
                            <a  className='a' href="homepage.php">Help</a><br></br>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 li"><br></br>
                        <h5 className="text-footer">Important</h5>
                            <a className='a' href="homepage.php">Support</a><br></br>
                            <a  className='a'href="homepage.php">FAQ</a><br></br>
                            <a className='a' href="homepage.php">Check</a><br></br>
                            <a className='a' href="homepage.php">Contact Us</a><br></br>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3"><br></br>                                 
                        <h5 className="text-footer">Contact</h5>
                            <p className="text">Subscribe our newsletter to get latest update & news.</p><br></br>
                            <input type="text" name="Send" className="Send" placeholder="Enter Email"></input><button type="submit" className="btn btn-danger">Send</button>
                    </div>
                </div>
            </div>
    </footer >
    )
}
export default Footer;