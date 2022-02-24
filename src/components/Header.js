import React from 'react'

let Header=()=>{
  return (
    <div>
      <header className="main-header style-two">

{/* <!-- header-lower --> */}
<div className="header-lower">
    <div className="auto-container">
        <div className="outer-box">
            <div className="logo-box">
                <figure className="logo"><a href="index.html"><img src="assets/images/logo-3.png" alt=""/></a></figure>
            </div>
            <div className="menu-area">
                {/* <!--Mobile Navigation Toggler--> */}
                <div className="mobile-nav-toggler">
                    <i className="icon-bar"></i>
                    <i className="icon-bar"></i>
                    <i className="icon-bar"></i>
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                        <ul className="navigation clearfix">
                            <li className="dropdown"><a href="index.html">Home</a>
                                <ul>
                                    <li><a href="index.html">Home Page 01</a></li>
                                    <li><a href="index-2.html">Home Page 02</a></li>
                                    <li><a href="index-3.html">Home Page 03</a></li>
                                    <li><a href="index-4.html">Home Page 04</a></li>
                                    <li><a href="index-5.html">Home Page 05</a></li>
                                    <li><a href="index-onepage.html">OnePage Home</a></li>
                                    <li><a href="index-rtl.html">RTL Home</a></li>
                                    <li className="dropdown"><a href="index.html">Header Style</a>
                                        <ul>
                                            <li><a href="index.html">Header Style 01</a></li>
                                            <li><a href="index-2.html">Header Style 02</a></li>
                                            <li><a href="index-3.html">Header Style 03</a></li>
                                            <li><a href="index-5.html">Header Style 04</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li> 
                            <li className="dropdown"><a href="index.html">Doctors</a>
                                <ul>
                                    <li className="dropdown"><a href="doctors-dashboard.html">Doctors Dashboard</a>
                                        <ul>
                                            <li><a href="doctors-dashboard.html">Dashboard</a></li>
                                            <li><a href="appointment.html">Appointments</a></li>
                                            <li><a href="my-patients.html">My Patients</a></li>
                                            <li><a href="add-listing.html">Add Listing</a></li>
                                            <li><a href="schedule-timing.html">Schedule Timing</a></li>
                                            <li><a href="review.html">Reviews</a></li>
                                            <li><a href="message.html">Messages</a></li>
                                            <li><a href="my-profile.html">My Profile</a></li>
                                            <li><a href="change-password.html">Change Password</a></li>
                                            <li><a href="login.html">Logout</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="doctors-1.html">Doctors Page 01</a></li>
                                    <li><a href="doctors-2.html">Doctors Page 02</a></li>
                                    <li><a href="doctors-3.html">Doctors Page 03</a></li>
                                    <li><a href="doctors-4.html">Doctors Page 04</a></li>
                                    <li><a href="doctors-details.html">Doctors Details</a></li>
                                </ul>
                            </li>
                            <li className="current dropdown"><a href="index.html">Patients</a>
                                <ul>
                                    <li className="dropdown"><a href="patient-dashboard.html">Patient Dashboard</a>
                                        <ul>
                                            <li><a href="patient-dashboard.html">Dashboard</a></li>
                                            <li><a href="favourite-doctors.html">Favourite Doctors</a></li>
                                            <li><a href="schedule-timing-2.html">Schedule Timing</a></li>
                                            <li><a href="message-2.html">Messages</a></li>
                                            <li><a href="patient-profile.html">My Profile</a></li>
                                            <li><a href="change-password-2.html">Change Password</a></li>
                                            <li><a href="login-2.html">Logout</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="submit.html">Submit Review</a></li>
                                    <li><a href="book-appointment.html">Book Appointment</a></li>
                                    <li><a href="register-page.html">Register Page</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="index.html">Pages</a>
                                <div className="megamenu">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 column">
                                            <ul>
                                                <li><h4>Page List 01</h4></li>
                                                <li><a href="about.html">About Us</a></li>
                                                <li><a href="service-1.html">Service 01</a></li>
                                                <li><a href="service-2.html">Service 02</a></li>
                                                <li><a href="faq.html">Faq's</a></li>
                                                <li><a href="pricing.html">Our Pricing</a></li>
                                                <li><a href="contact.html">Contact Us</a></li>
                                                <li><a href="error.html">404</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 column">
                                            <ul>
                                                <li><h4>Page List 02</h4></li>
                                                <li><a href="clinic-1.html">Clinic Page 01</a></li>
                                                <li><a href="clinic-2.html">Clinic Page 02</a></li>
                                                <li><a href="clinic-3.html">Clinic Page 03</a></li>
                                                <li><a href="clinic-4.html">Clinic Page 04</a></li>
                                                <li><a href="clinic-details.html">Clinic Details</a></li>
                                            </ul>
                                        </div>                                   
                                    </div>                                        
                                </div>
                            </li>
                            <li className="dropdown"><a href="index.html">Elements</a>
                                <div className="megamenu">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-12 col-sm-12 column">
                                            <ul>
                                                <li><h4>Elements 1</h4></li>
                                                <li><a href="about-element-1.html">About Block 01</a></li>
                                                <li><a href="about-element-2.html">About Block 02</a></li>
                                                <li><a href="about-element-3.html">About Block 03</a></li>
                                                <li><a href="feature-element-1.html">Feature Block 01</a></li>
                                                <li><a href="feature-element-2.html">Feature Block 02</a></li>
                                                <li><a href="process-element-1.html">Process Block 01</a></li>
                                                <li><a href="process-element-2.html">Process Block 02</a></li>
                                                <li><a href="team-element-1.html">Team Block 01</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 column">
                                            <ul>
                                                <li><h4>Elements 2</h4></li>
                                                <li><a href="team-element-2.html">Team Block 02</a></li>
                                                <li><a href="news-element-1.html">News Block 01</a></li>
                                                <li><a href="news-element-2.html">News Block 02</a></li>
                                                <li><a href="category-element-1.html">Category Block 01</a></li>
                                                <li><a href="category-element-2.html">Category Block 02</a></li>
                                                <li><a href="faq-element.html">Faq Block</a></li>
                                                <li><a href="cta-element.html">CTA Block</a></li>
                                                <li><a href="clients-element.html">Clients Block</a></li>
                                            </ul>
                                        </div>                                    
                                    </div>                                        
                                </div>
                            </li>  
                            <li className="dropdown"><a href="index.html">News</a>
                                <ul>
                                    <li><a href="blog.html">Blog Grid 01</a></li>
                                    <li><a href="blog-2.html">Blog Grid 02</a></li>
                                    <li><a href="blog-3.html">Blog Standard</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul>
                            </li> 
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="btn-box"><a href="register-page.html" className="theme-btn-one"><i className="icon-image"></i>Join Now</a></div>
        </div>
    </div>
</div>

{/* <!--sticky Header--> */}
<div className="sticky-header">
    <div className="auto-container">
        <div className="outer-box">
            <div className="logo-box">
                <figure className="logo"><a href="index.html"><img src="assets/images/small-logo.png" alt=""/></a></figure>
            </div>
            <div className="menu-area">
                <nav className="main-menu clearfix">
                    {/* <!-- Keep This Empty / Menu will come through Javascript --> */}
                </nav>
            </div>
            <div className="btn-box"><a href="register-page.html" className="theme-btn-one"><i className="icon-image"></i>Join Now</a></div>
        </div>
    </div>
</div>
</header>
{/* <!-- main-header end --> */}

{/* <!-- Mobile Menu  --> */}
<div className="mobile-menu">
<div className="menu-backdrop"></div>
<div className="close-btn"><i className="fas fa-times"></i></div>

<nav className="menu-box">
    <div className="nav-logo"><a href="index.html"><img src="assets/images/logo-2.png" alt="" title=""/></a></div>
    <div className="menu-outer"></div>
    <div className="contact-info">
        <h4>Contact Info</h4>
        <ul>
            <li>Chicago 12, Melborne City, USA</li>
            <li><a href="tel:+8801682648101">+88 01682648101</a></li>
            <li><a href="mailto:info@example.com">info@example.com</a></li>
        </ul>
    </div>
    <div className="social-links">
        <ul className="clearfix">
            <li><a href="index.html"><span className="fab fa-twitter"></span></a></li>
            <li><a href="index.html"><span className="fab fa-facebook-square"></span></a></li>
            <li><a href="index.html"><span className="fab fa-pinterest-p"></span></a></li>
            <li><a href="index.html"><span className="fab fa-instagram"></span></a></li>
            <li><a href="index.html"><span className="fab fa-youtube"></span></a></li>
        </ul>
    </div>
</nav>
</div>
    </div>
  );
}

export default Header;