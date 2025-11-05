import React from 'react';
import Image from "next/image";
const Header = () => {
  return (
    <header>
      <div className='tobBarArea'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-6 '>
              <ul className='topBarLeftInfo d-flex'>
                <li><a href='tel:+91-9258002828'>
                  <img src='/assests/img/phone.svg' alt='Phone Icon' />
                  +91-925 800 2828</a></li>
                <li><a href='mailto:info@pharmmaex.com'>
                  <img src='/assests/img/Message.svg' alt='Phone Icon' />
                  info@pharmmaex.com</a></li>
              </ul>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6  '>
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
          <a className="navbar-brand d-flex align-items-center" href="/">
            <Image src="/assests/img/logo.svg" alt="Logo" className="websiteLogo" width={60}
              height={60} />
            <span className="d-none d-md-block ms-3" style={{ fontSize: '0.85rem', lineHeight: 1.1, color: '#222' }}>
              <strong>20-21 February, 2026</strong><br />
              Codissia Trade Fair Complex Coimbatore,<br />
               Tamil Nadu
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link active fw-bold text-success" aria-current="page" href="/">Home</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/about" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">About us</a>
                <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                  <li><a className="dropdown-item" href="/about">Who we are</a></li>
                  <li><a className="dropdown-item" href="/about#our-mission">Our Mission</a></li>
                  <li><a className="dropdown-item" href="/pressRealise">Press Release</a></li>
                  <li><a className="dropdown-item" href="/privacyPolicy">Privacy Policy</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/events" id="eventsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Events</a>
                <ul className="dropdown-menu" aria-labelledby="eventsDropdown">
                  <li><a className="dropdown-item" href="/up-coming">Upcoming Events</a></li>
                  <li><a className="dropdown-item" href="/past-exhibitions">Past Exhibitors</a></li>
                  <li><a className="dropdown-item" href="/sponsors-association">Sponsors & Associations</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="resourcesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Resources</a>
                <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                  <li className="dropdown-submenu position-relative">
                    <a className="dropdown-item dropdown-toggle" href="#">Download</a>
                    <ul className="dropdown-menu">
                      {/* <li><a className="dropdown-item" href="/assests/pdf/PharmmaEx-Floor-Plan-mumbai.pdf" download>Floor Plan</a></li>
                      <li><a className="dropdown-item" href="/assests/pdf/pharmmaex-mumbai-Brochure-2025 (1).pdf" download>Brochure</a></li> */}
                      <li><a className="dropdown-item" href="/assests/pdf/Coimbotore_layout.pdf" download>Floor Plan</a></li>
                      <li><a className="dropdown-item" href="/assests/pdf/Brochure-coimbatore.pdf" download >Brochure</a></li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="/review-form">Review</a></li>
                  <li><a className="dropdown-item" href="/client-review">Testimonial</a></li>
                  <li><a className="dropdown-item" href="/gallery/mumbai">Gallery</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/contact-us">Contact us</a>
              </li>
            </ul>

            <div className="d-flex gap-2">
              <a href="https://www.pharmmaexregistration.in/Pharmaex/visitor.aspx" className="btn btn-success">Pre-Registration</a>
              <a href="/exhibitor" className="btn btn-outline-success">Become Exhibitor</a>
            </div>
          </div>
        </div>
      </nav>

      {/* End Navbar Section */}
    </header>
  );
};

export default Header;