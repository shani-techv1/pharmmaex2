"use client";

import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
    return (
        <section className="contact-form-section">
            <div className="container">
                <div className="form-grid">
                    {/* Left Side Image */}
                    <div className="form-image">
                        <img src="./assests/img/form-img.png" alt="Contact" />
                    </div>

                    {/* Right Side Form */}
                    <div className="form-box">
                        <h2>
                            Have Questions? <span>Get in Touch With Us!</span>
                        </h2>
                        <p>Fill out the form below, and our team will get back to you shortly.</p>

                        <form>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" placeholder="Enter your full name" name="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" placeholder="Enter your email address" name="email" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="text" id="phone" placeholder="Enter your contact number" name="phone" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" placeholder="Enter your company name" name="company" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="query">Query Type</label>
                                    <select name="query" id="query">
                                        <option>General Inquiry</option>
                                        
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="documents">Upload Documents</label>
                                    <input type="file" id="documents" name="documents" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" placeholder="Type your message here" name="message" rows="4"></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                Submit Form →
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
