import React from 'react';
import Image from 'next/image';

const AboutHome = () => {
  return (
    <section className="about-home-section py-5">
      <div className="innerContainer container">
        <div className="row align-items-center">
          {/* Left: Text Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-3 about-home-heading">About PharmmaEx</h2>
            <p className="about-home-desc mb-4">
              PharmmaEx is India&apos;s leading pharmaceutical exhibition focused exclusively on Third-Party Manufacturing and PCD Franchise Business. We bring together manufacturers, distributors, wholesalers, and industry professionals from across the country under one roof to explore new partnerships, expand networks, and grow their pharma businesses.
            </p>
            <div className="d-flex align-items-start mb-3 about-home-feature">
              <span className="about-home-icon me-3">
                {/* Globe SVG */}
                <Image
                  src="/assests/img/about-icon.svg"
                  alt="About PharmmaEx 1"
                  className="img-fluid"
                  width={40}
                  height={40}
                />
              </span>
              <div>
                <strong>Global Networking Opportunities:</strong> Connect with top industry stakeholders, researchers, and decision-makers from across the globe.
              </div>
            </div>
            <div className="d-flex align-items-start mb-4 about-home-feature">
              <span className="about-home-icon me-3">
                {/* Capsule SVG */}
                <Image
                  src="/assests/img/about-icon1.svg"
                  alt="About PharmmaEx 1"
                  className="img-fluid"
                  width={40}
                  height={40}
                />
              </span>
              <div>
                <strong>Showcase Innovations:</strong> Explore the latest advancements in pharmaceutical technologies, formulations, and manufacturing processes.
              </div>
            </div>
            <a href="/about" className="btn btn-outline-dark about-home-btn">Read More</a>
          </div>
          {/* Right: Images Grid */}
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-12">
                <Image
                  src="/assests/img/hyderabad.webp"
                  alt="About PharmmaEx 1"
                  className="img-fluid rounded-4 w-100 about-home-img mb-2"
                  width={800}
                  height={400}
                />
              </div>
              <div className="col-6">
                <Image
                  src="/assests/img/about2.webp"
                  alt="About PharmmaEx 2"
                  className="img-fluid rounded-4 w-100 about-home-img"
                  width={400}
                  height={400}
                />
              </div>
              <div className="col-6">
                <Image
                  src="/assests/img/about3.svg"
                  alt="About PharmmaEx 3"
                  className="img-fluid rounded-4 w-100 about-home-img"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
