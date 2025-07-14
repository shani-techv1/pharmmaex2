import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-bg">
        <img
          src="/assests/img/bg-registration.webp"
          alt="Footer Background"
          className="footer-bg-img"
        />
        <div className="footer-bg-overlay"></div>
      </div>
      <div className="container footer-content">
        <div className="footer-registration-box">
          <h2 className="footer-registration-title">Registration for Mumbai</h2>
          <div className="footer-registration-details d-flex align-items-center mb-3 flex-wrap gap-2 gap-md-0">
            <div className="footer-registration-date-icon me-2">
              <img src="/assests/img/Calendar.svg" alt="Calendar" />
              <div className="footer-registration-date">
                03-04 October, 2025
              </div>
            </div>

            <div className="footer-registration-venue">
              <img
                src="/assests/img/Location.svg"
                alt="Location"
                className="me-1"
              />
              Bombay Exhibition Centre, Mumbai
            </div>
          </div>
          <div className="footer-registration-btns d-flex gap-3 flex-wrap">
            <a
              href=" https://www.pharmmaexregistration.in/Pharmaex/visitor.aspx  "
              className="btn btn-outline-light"
            >
              Pre-Registration
            </a>
            <a href="/exhibitor" className="btn btn-outline-light">
              Become Exhibitor
            </a>
          </div>
        </div>
      </div>
      <div className="footer-main-content">
        <div className="container innerContainer  ">
          <div className="row align-items-center mb-4">
            <div className="col-md-12">
              <div className="footerPart1">
                <div className="row">
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <img
                      src="/assests/img/pharmmaex-footer.svg"
                      alt="PharmaEx Logo"
                      className="footer-logo mb-3"
                    />
                  </div>
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <div className="d-flex flex-wrap">
                      <div className="footer-countdown d-flex gap-2 mb-3 me-3">
                        <div className="footer-countdown-box">
                          <div className="fw-bold">131</div>
                          <div>Days</div>
                        </div>
                        <div className="footer-countdown-box">
                          <div className="fw-bold">40</div>
                          <div>Hours</div>
                        </div>
                        <div className="footer-countdown-box">
                          <div className="fw-bold">23</div>
                          <div>Minutes</div>
                        </div>
                      </div>
                      <div className="footer-event-info">
                        <div className="fw-bold">03-04 October, 2025</div>
                        <div>Bombay Exhibition Centre, Mumbai</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div className="col-md-4 mb-4 mb-md-0">
                  <h5 className="footer-title">About Us</h5>
                  <div className="footer-about-text mb-2">
                    PharmmaEx is India&apos;s leading pharmaceutical exhibition
                    focused exclusively on Third-Party Manufacturing and PCD
                    Franchise Business.
                  </div>
                  <div className="footer-social-icons d-flex gap-2 mt-4">
                    <a href="https://www.facebook.com/PharmmaEx/">
                      <img src="/assests/img/facebook.jpg" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/pharmmaex/#">
                      <img src="/assests/img/instagram.jpg" alt="Instagram" />
                    </a>
                    <a href="https://www.youtube.com/@PharmmaEx">
                      <img src="/assests/img/twitter.jpg" alt="X" />
                    </a>
                    <a href="https://www.linkedin.com/company/pharmmaex/">
                      <img src="/assests/img/linkedin.jpg" alt="LinkedIn" />
                    </a>
                  </div>
                </div>
                <div className="col-md-2 mb-4 mb-md-0">
                  <h5 className="footer-title">Quick Links</h5>
                  <ul className="footer-links">
                    <li>
                      <a href="/#">Exhibitor Form</a>
                    </li>
                    <li>
                      <a href="#">Visitor Registration</a>
                    </li>
                    <li>
                      <a href="/gallery/hyderabad">Photo Gallery</a>
                    </li>
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/events">Past Events</a>
                    </li>
                    <li>
                      <a href="/contact">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2 mb-4 mb-md-0">
                  <h5 className="footer-title">Helpful Links</h5>
                  <ul className="footer-links">
                    <li>
                      <a href="#">Sitemap</a>
                    </li>
                    <li>
                      <a href="/term-condition">Terms & Condition</a>
                    </li>
                    <li>
                      <a href="privacyPolicy">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h5 className="footer-title">Contact Us</h5>
                  <ul className="footer-contact-list">
                    <li>
                      <img
                        src="/assests/img/Location1.svg"
                        alt="Location"
                        className="me-2"
                      />
                      Bhardwaj Complex, Near Mobile Tower, Behind HDFC Bank,
                      Krishna Nagar Bulandshahr (U.P.)-203001
                    </li>
                    <li>
                      <img
                        src="/assests/img/Message1.svg"
                        alt="Mail"
                        className="me-2"
                      />
                      shivam.sharma@pharmmaex.com
                    </li>
                    <li>
                      <img
                        src="/assests/img/phone1.svg"
                        alt="Phone"
                        className="me-2"
                      />
                      +91-92580 02828, +91-70173 36797
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom d-flex justify-content-between align-items-center py-3">
            <img
              src="/assests/img/dev-logo.svg"
              alt="Devasya"
              className="footer-devaysa"
            />
            <div className="footer-copyright">
              Copyright © 2025 PharmmaEx. All rights reserved.
            </div>
            <div className="footer-floating-icons d-flex gap-3">
              <a href="https://wa.me/">
                <img src="/assests/img/watsapp.svg" alt="WhatsApp" />
              </a>
              <a href="tel:+919258002828">
                <img src="/assests/img/phoneblue.svg" alt="Call" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
