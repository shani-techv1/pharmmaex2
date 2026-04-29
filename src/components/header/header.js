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
              <strong>3rd-4th July, 2026</strong><br />
              Kolkata, West Bengal
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
                  <li><a className="dropdown-item" href="/events">All Editions</a></li>
                  <li><a className="dropdown-item" href="/events/kolkata">Kolkata 2026 (Flagship)</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/events/coimbatore">Coimbatore 2026</a></li>
                  <li><a className="dropdown-item" href="/events/mumbai">Mumbai 2025</a></li>
                  <li><a className="dropdown-item" href="/events/hyderabad">Hyderabad 2025</a></li>
                  <li><a className="dropdown-item" href="/events/ahmedabad">Ahmedabad 2024</a></li>
                  <li><a className="dropdown-item" href="/events/pune">Pune 2024</a></li>
                  <li><a className="dropdown-item" href="/events/bangalore">Bangalore 2024</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/up-coming">Upcoming Events</a></li>
                  <li><a className="dropdown-item" href="/past-exhibitions">Past Exhibitors</a></li>
                  <li><a className="dropdown-item" href="/sponsors-association">Sponsors & Associations</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/districts">Pharma Events in India</a></li>
                  
                  
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/exhibitor-categories" id="exhibitorsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Exhibitors</a>
                <ul className="dropdown-menu" aria-labelledby="exhibitorsDropdown">
                  <li><a className="dropdown-item" href="/exhibitor-categories">All Categories</a></li>
                  <li><a className="dropdown-item" href="/exhibitor-categories/pcd-pharma-franchise">PCD Pharma Franchise</a></li>
                  <li><a className="dropdown-item" href="/exhibitor-categories/third-party-manufacturing">Third-Party Manufacturing</a></li>
                  <li><a className="dropdown-item" href="/exhibitor-categories/ayurvedic-herbal">Ayurvedic & Herbal</a></li>
                  <li><a className="dropdown-item" href="/exhibitor-categories/nutraceuticals-wellness">Nutraceuticals & Wellness</a></li>
                  <li><a className="dropdown-item" href="/exhibitor-categories/cosmetics-cosmeceuticals">Cosmetics & Cosmeceuticals</a></li>
                  <li><a className="dropdown-item" href="/exhibitor-categories/surgical-medical-devices">Surgical & Medical Devices</a></li>
                  <li><a className="dropdown-item" href="/exhibitor-categories/veterinary-pharma">Veterinary Pharma</a></li>
                  <li><a className="dropdown-item" href="/exhibitor-categories/packaging-machinery">Packaging & Machinery</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="resourcesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Resources</a>
                <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                  <li><a className="dropdown-item" href="/blog">Blog</a></li>
                  <li><a className="dropdown-item" href="/guides">Pharma Franchise Guides</a></li>
                  <li className="dropdown-submenu position-relative">
                    <a className="dropdown-item dropdown-toggle" href="#">Download</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/assests/pdf/kolkataLayout.pdf" target="_blank" >Floor Plan</a></li>
                      <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("openBrochureModal")); }}>Brochure</a></li>
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

            <div className="header-ctas">
              <a
                href="https://www.pharmmaexregistration.in/Pharmaex/visitor.aspx"
                className="header-cta-primary"
              >
                Pre-Register
              </a>
              <a href="/exhibitor" className="header-cta-ghost">
                Book a Stall
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* End Navbar Section */}
    </header>
  );
};

export default Header;