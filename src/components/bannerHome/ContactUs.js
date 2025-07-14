import React from "react";

const ContactUs = () => {
  return (
    <div className="contactUsFlexWrap">
      <div className="contactLeftBox">
        <h2>Devasya Media Pvt. Ltd.</h2>
        <div className="contact-details">
          <div className="contact-el">
            <p>
              <span className="iconSpan">
                <img
                  src="/assests/img/whiteiconct.svg"
                  alt="Address Icon"
                  width={20}
                  height={20}
                />
              </span>
              Bhardwaj Complex, Near Mobile Tower,
            </p>
            <p style={{ paddingLeft: 32 }}>
              Behind HDFC Bank, Krishna Nagar, Bulandshahr
            </p>
            <p style={{ paddingLeft: 32 }}>(U.P.)-203001</p>
          </div>
          <p className="contact-el">
            <span className="iconSpan">
              <img
                src="/assests/img/whitemailicon.svg"
                alt="Mail Icon"
                width={20}
                height={20}
              />
            </span>
            info@pharmmaex.com
          </p>
          <p className="contact-el">
            <span className="iconSpan">
              <img
                src="/assests/img/whiteiconct.svg"
                alt="Phone Icon"
                width={20}
                height={20}
              />
            </span>
            +91-9258002828 &nbsp; +91-701 733 6797
          </p>
        </div>
        <div className="venue-details">
          <h3>Exhibition Venue-Mumbai</h3>
          <p>Bombay Exhibition Centre, (NESCO) Mumbai</p>
          <p>03-04 October, 2025</p>
        </div>
        <div className="contact-btns">
          <a href="#" className="btn btn-outline-success">
            Pre-Registration
          </a>
          <a href="#" className="btn btn-outline-success">
            Become Exhibitor
          </a>
        </div>
      </div>
      <div className="contactRightBox">
        <form className="contactForm">
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="fullname"
                name="fullname"
                required
                placeholder="Full Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email Address"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="phone"
                name="phone"
                required
                placeholder="Phone"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company/Organisation"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="designation"
                name="designation"
                placeholder="Designation"
              />
            </div>
            <div className="form-group">
              <input type="text" id="city" name="city" placeholder="City" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group full-width">
              <textarea
                id="message"
                name="message"
                rows="3"
                required
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>
          {/* <div className="form-row align-center">
                        {/* recaptcha to add after registeration key
                    </div> */}
          <div className="form-row">
            <button type="submit" className="btn submit-btn contact-btns">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <style jsx>{`
        .contactUsFlexWrap {
          display: flex;
          gap: 2rem;
          width: 80%;
          justify-content: center;
          margin: auto;
          align-items: stretch;
        }
        .contactLeftBox,
        .contactRightBox {
          width: 50%;
          min-width: 0;
        }
        .contactLeftBox {
          background: #00833d;
          color: #fff;
          padding: 4.5rem 2rem 3.5rem 2rem;
          border-bottom: 4px solid #fff;
          margin-bottom: 2.75rem;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 0 0 25px 25px;
        }
        .contactLeftBox .contact-details {
          border-bottom: 1px solid #ffffff;
          padding-bottom: 2rem;
        }
        .contactLeftBox h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.7rem;
        }
        .contactLeftBox h3 {
          font-size: 1.15rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1.5rem;
        }
        .contactLeftBox .contact-el {
          margin-bottom: 0.5rem;
        }
        .contactLeftBox p {
          margin: 0 0 0.1rem 0;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
        }
        .iconSpan {
          display: inline-flex;
          align-items: center;
          margin-right: 0.7em;
          min-width: 24px;
          height: 24px;
        }
        .iconSpan img {
          width: 18px;
          height: 18px;
          display: block;
        }
        .contactLeftBox .venue-details {
          margin-bottom: 1.5rem;
        }
        .contactLeftBox .contact-btns {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .contactLeftBox .btn {
          font-weight: 600;
          padding: 0.6rem 1.5rem;
          font-size: 1rem;
          border: 2px solid #fff;
          transition: background 0.2s, color 0.2s;
          box-shadow: none;
          text-decoration: none;
          display: inline-block;
          border-radius: 2rem;
        }
        .contactLeftBox .btn-outline-success {
          background: transparent;
          color: #fff;
          border: 2px solid #fff;
        }
        .contactLeftBox .btn-outline-success:hover {
          background: #fff;
          color: #00833d;
        }
        .contactRightBox {
          background: #fff;
          border-radius: 0 0 25px 25px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
          padding: 3.5rem 2rem 3.5rem 2rem;
          margin-bottom: 2.75rem;
          display: flex;
          align-items: center;
        }
        .contactForm {
          width: 100%;
          max-width: 430px;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .form-row {
          display: flex;
          gap: 1rem;
          width: 100%;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          flex: 1 1 0;
        }
        .form-group label {
          display: none;
        }
        .form-group input,
        .form-group textarea {
          border: 1px solid #dbdbdb;
          border-radius: 200px;
          padding: 0.55rem 0.9rem;
          font-size: 1rem;
          outline: none;
          transition: border 0.2s;
          background: #ffffff;
          color: #222;
          resize: none;
        }

        .form-group textarea {
          border-radius: 20px;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          border: 1.5px solid #00833d;
          background: #fff;
        }
        .form-group.full-width {
          flex: 1 1 100%;
        }
        .align-center {
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .robot-label {
          font-size: 0.95rem;
          color: #00833d;
          font-weight: 500;
          margin-left: 0.2rem;
        }
        .submit-btn {
          background: #00833d;
          color: #fff;
          border: 2px solid #00833d;
          border-radius: 2rem;
          font-weight: 600;
          font-size: 1rem;
          padding: 0.6rem 1.5rem;
          cursor: pointer;
          width: 40%;
        }
        .submit-btn:hover {
          background: #ffffff;
          color: #00833d;
          border: 2px solid #00833d;
        }
        @media (max-width: 900px) {
          .contactUsFlexWrap {
            flex-direction: column;
            width: 98%;
          }
          .contactLeftBox,
          .contactRightBox {
            width: 100%;
          }
          .contactLeftBox,
          .contactRightBox {
            margin-bottom: 1.2rem;
          }
        }
        @media (max-width: 600px) {
          .contactLeftBox {
            padding: 1.2rem 0.7rem 1rem 0.7rem;
            border-radius: 0.7rem;
            margin-top: 50px;
          }
          .contactLeftBox h2 {
            font-size: 1.1rem;
          }
          .contactLeftBox h3 {
            font-size: 1rem;
          }
          .contactLeftBox .btn {
            font-size: 0.9rem;
            padding: 0.4rem 1rem;
          }
          .contactRightBox {
            padding: 1.2rem 0.7rem 1rem 0.7rem;
            border-radius: 0.7rem;
          }
          .contactForm {
            max-width: 100%;
          }
          .form-row {
            flex-direction: column;
            gap: 0.5rem;
          }
          .submit-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
