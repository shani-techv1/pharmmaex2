import React from 'react'
import './AboutEvent.css';

const AboutEvent = () => {
  return (
     <section className="about-ahmedabad">
      <div className="container">
        <h2>
          About the Event in <span>#Ahmedabad</span>
        </h2>
        <p className="description">
          PharmmaEx is India‘s premier platform for formulation professionals,
          connecting industry leaders, innovators, and decision-makers from
          around the globe. From breakthrough technologies to networking with
          key stakeholders, discover the future of pharma right here in
          Ahmedabad.
        </p>

        <div className="stats">
          <div className="stat-item">
            <h3>150+</h3>
            <p>Exhibitors</p>
          </div>
          <div className="divider"></div>
          <div className="stat-item">
            <h3>5000+</h3>
            <p>Visitors</p>
          </div>
          <div className="divider"></div>
          <div className="stat-item">
            <h3>1000+</h3>
            <p>Product</p>
          </div>
          <div className="divider"></div>
          <div className="stat-item">
            <h3>3+</h3>
            <p>Cities Done</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutEvent
