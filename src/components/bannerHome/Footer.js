import React, { useEffect, useState } from "react";

const Footer = () => {
  const eventDate = new Date("2026-07-03T09:00:00.000Z");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();

      if (diff > 0) {
        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        setTimeLeft({ days, hours, minutes });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    };

    updateCountdown(); // initial call
    const intervalId = setInterval(updateCountdown, 60 * 1000); // update every minute

    return () => clearInterval(intervalId); // cleanup
  }, []);
  return (
    <footer className="footer-section">
      <div className="footer-bg">
        <img
          src="/assests/img/bg-registration.png"
          alt="Footer Background"
          className="footer-bg-img"
        />
        <div className="footer-bg-overlay"></div>
      </div>
      <div className="container footer-content">
        <div className="footer-registration-box">
          <h2 className="footer-registration-title">
            Registration for Kolkata
          </h2>
          <div className="footer-registration-details d-flex align-items-center mb-3">
            <div className="footer-registration-date-icon me-2">
              <img src="/assests/img/Calendar.svg" alt="Calendar" />
              <div className="footer-registration-date">
                3-4 July, 2026
              </div>
            </div>

            <div className="footer-registration-venue">
              <img
                src="/assests/img/Location.svg"
                alt="Location"
                className="me-1"
              />
              Biswa Bangla Exhibition Centre, <br /> New Town, Kolkata, West Bengal
            </div>
          </div>
          <div className="footer-registration-btns d-flex gap-3">
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
                          <div className="fw-bold">
                            {timeLeft.days.toLocaleString()}
                          </div>
                          <div>Days</div>
                        </div>
                        <div className="footer-countdown-box">
                          <div className="fw-bold">
                            {timeLeft.hours.toLocaleString()}
                          </div>
                          <div>Hours</div>
                        </div>
                        <div className="footer-countdown-box">
                          <div className="fw-bold">
                            {timeLeft.minutes.toLocaleString()}
                          </div>
                          <div>Minutes</div>
                        </div>
                      </div>
                      <div className="footer-event-info">
                        <div className="fw-bold">3-4 July, 2026</div>
                        <div>
                          Biswa Bangla Exhibition Centre, <br /> New Town, Kolkata, West Bengal
                        </div>
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
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1pP-d-s0pW8ZglY5Po9duednuRdY4x4Otw&s"
                        alt="LinkedIn"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-2 mb-4 mb-md-0">
                  <h5 className="footer-title">Editions</h5>
                  <ul className="footer-links">
                    <li>
                      <a href="/events">All Editions</a>
                    </li>
                    <li>
                      <a href="/events/kolkata">Kolkata 2026</a>
                    </li>
                    <li>
                      <a href="/events/coimbatore">Coimbatore 2026</a>
                    </li>
                    <li>
                      <a href="/events/mumbai">Mumbai 2025</a>
                    </li>
                    <li>
                      <a href="/events/hyderabad">Hyderabad 2025</a>
                    </li>
                    <li>
                      <a href="/exhibitor">Become Exhibitor</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2 mb-4 mb-md-0">
                  <h5 className="footer-title">Resources</h5>
                  <ul className="footer-links">
                    <li>
                      <a href="/blog">Blog</a>
                    </li>
                    <li>
                      <a href="/guides">Pharma Guides</a>
                    </li>
                    <li>
                      <a href="/exhibitor-categories">Exhibitor Categories</a>
                    </li>
                    <li>
                      <a href="/gallery/hyderabad">Photo Gallery</a>
                    </li>
                    <li>
                      <a href="/sitemap.xml">Sitemap</a>
                    </li>
                    <li>
                      <a href="/term-condition">Terms & Condition</a>
                    </li>
                    <li>
                      <a href="/privacyPolicy">Privacy Policy</a>
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
                      <a href="mailto:info@pharmmaex.com" style={{ color: "inherit", textDecoration: "none" }}>
                        info@pharmmaex.com
                      </a>
                    </li>
              
                    <li>
                      <img
                        src="/assests/img/Message1.svg"
                        alt="Mail"
                        className="me-2"
                      />
                      <a href="mailto:shivam.sharma@pharmmaex.com" style={{ color: "inherit", textDecoration: "none" }}>
                        shivam.sharma@pharmmaex.com
                      </a>
                    </li>
                   
                    <li>
                      <img
                        src="/assests/img/phone1.svg"
                        alt="Phone"
                        className="me-2"
                      />
                      <a href="tel:+91-9258002828" style={{ color: "inherit", textDecoration: "none" }}>
                        +91-92580 02828, +91-70173 36797
                      </a>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
