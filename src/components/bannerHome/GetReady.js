import React from 'react'
import './GetReady.css'
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const GetReady = () => {
  return (
    <section className="hero-pharmaex">
   
      <img
        className="hero-image"
        src="./assests/img/Charminar.png"
        alt="Charminar Hyderabad"
      />

      <div className="hero-container">
        <p className="eyebrow">PharmmaEx: Uniting the Pharmaceutical Industry</p>

        <h1 className="hero-title">
          Get ready for <span>#PharmmaEx2025!</span>
        </h1>

        <div className="hero-meta">
          <p> <FaCalendarAlt style={{ color: "#73BF45", marginRight: "5px" ,fontSize: "20px" }} /> 2 & 3 May, 2025 | FRI–SAT</p>
          <p> <FaMapMarkerAlt style={{ color: "#73BF45", marginRight: "5px" ,fontSize: "20px" }} /> HITEX Exhibition Centre, Hyderabad</p>
        </div>

        <p className="hero-copy">
          This much-anticipated event will be held at the <strong>HITEX Exhibition Centre, Hyderabad.</strong>
          Celebrate the 4th edition of this premier gathering that brings together the entire
          pharmaceutical value chain, creating unparalleled opportunities for collaboration and innovation.
        </p>

        <div className="hero-actions">
          <a href="#" className="btn btn-primary">Register Now</a>
          <a href="#" className="btn btn-outline">Learn more</a>
        </div>
      </div>
    </section>
  )
}

export default GetReady
