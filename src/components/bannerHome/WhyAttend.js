import React from 'react'
import './WhyAttend.css'

const WhyAttend = () => {
  return (
    <section className="why-attend">
      <div className="container">
        <h2>Why Attend?</h2>

        <div className="cards-grid">
         
          <div className="card">
            <div className="card-icon">
              <img src="assests/img/people.png" alt="Exhibitors" />
              <h3>
              FOR <span>EXHIBITORS:</span>
            </h3>
            </div>
            
            <p>
              Showcase your products to a global audience, network with
              decision-makers, and drive business growth at one of India’s
              largest pharma exhibitions.
            </p>
            <a href="#" className="btn">
              Book your space →
            </a>
          </div>

          {/* Card 2 */}
          <div className="card">
            <div className="card-icon">
              <img src="assests/img/shop.png" alt="Visitors" />
               <h3>
              FOR <span>VISITORS:</span>
            </h3>
            </div>
           
            <p>
              Discover groundbreaking innovations, gain insights from industry
              leaders, and connect with the best minds in the pharma world.
            </p>
            <a href="#" className="btn ">
              Free Registration →
            </a>
          </div>
        </div>

        <div className="bottom-grid">
          {/* Left Text Block */}
          <div className="text-block">
            <h3>EXHIBITORS & SPONSORS</h3>
            <p>
              Be part of a growing community of innovators and professionals.
              <br />
              As an exhibitor or sponsor, gain unparalleled visibility and
              access  to <br/> a highly targeted audience.
            </p>
            <a href="#" className="btn">
              Become an Exhibitor →
            </a>
          </div>

          {/* Right Image */}
          <div className="image-block">
            <img src="assests/img/card-img.jpg" alt="Event" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyAttend
