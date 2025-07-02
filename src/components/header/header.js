import React from 'react';

const Header = () => {
    return (
        <header>
           
           <div className='tobBarArea'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <ul className='topBarLeftInfo d-flex'>
                            <li><a href='tel:+919999999999'>
                                <img src='/assests/img/phone.svg' alt='Phone Icon' />
                                 +91 99999 99999</a></li>
                            <li><a href='mailto:info@pharmmaex.com'>
                                 <img src='/assests/img/Message.svg' alt='Phone Icon' />
                                info@pharmmaex.com</a></li>
                        </ul>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='topBarRightInfo'>
                            <h3 className='text-end'>Organized by: <span>Devasya Media Pvt. Ltd.</span></h3>
                    </div>
                        </div>
                         
                </div>
            </div>
           </div>
            {/* Navbar Section */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-2">
                <div className="container">
                    {/* Logo and Event Info */}
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img src='/assests/img/logo.svg' alt='Logo' className='websiteLogo' />
                        <span className="d-none d-md-block ms-3" style={{ fontSize: '0.85rem', lineHeight: 1.1, color: '#222' }}>
                            <strong>03–04 October, 2025</strong><br />
                            Bombay Exhibition Centre,<br />
                            Mumbai
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mainNavbar">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center">
                            <li className="nav-item">
                                <a className="nav-link active fw-bold text-success" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">About us</a>
                                <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                                    <li><a className="dropdown-item" href="#">Who we are</a></li>
                                    <li><a className="dropdown-item" href="#">Our Mission</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="eventsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Events</a>
                                <ul className="dropdown-menu" aria-labelledby="eventsDropdown">
                                    <li><a className="dropdown-item" href="#">Schedule</a></li>
                                    <li><a className="dropdown-item" href="#">Speakers</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="resourcesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Resources</a>
                                <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                                    <li><a className="dropdown-item" href="#">Brochure</a></li>
                                    <li><a className="dropdown-item" href="#">Gallery</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact us</a>
                            </li>
                        </ul>
                        <div className="d-flex gap-2">
                            <a href="#" className="btn btn-success ">Pre-Registration</a>
                            <a href="#" className="btn btn-outline-success ">Become Exhibitor</a>
                        </div>
                    </div>
                </div>
            </nav>
            {/* End Navbar Section */}
           
        </header>
    );
};

export default Header;