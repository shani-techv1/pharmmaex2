import React from 'react'
import './CityBanner.css'

const CityBanner = () => {
  return (
   <section className="hyderabad-banner">
      <div className="overlay">
        <p className="subtitle">
          Explore India’s Largest Exhibition: PharmmaEx
        </p>
        <h1 className="title">#MUMBAI</h1>
        <p className="date-location">
          03–04 October, 2025 | Bombay Exhibition Centre , Mumbai
        </p>
        <p className="description">
          Join us at the heart of India’s pharma hub, Ahmedabad, for the largest
          formulation pharma exhibition. <br />
          Discover innovations, network with industry leaders, and explore the
          future of pharma.
        </p>
      </div>
    </section>
  )
}

export default CityBanner
