import React from 'react';

const PharmaConnections = () => {
  return (
    <section className="pharma-connections-section">
      <div className="innerContainer container">
        <div className="row align-items-center">
          {/* Left: Text Content */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <h2 className="pharma-connections-heading">Pharma Connections<br />Made Easy</h2>
            <p className="pharma-connections-desc">
              PharmmaEx is set to make history as the first-of-its-kind event in the bustling commercial capital of India – Mumbai. This three-day business extravaganza will showcase the very best of the pharmaceutical industry, featuring.
            </p>
            <p className="pharma-connections-desc">
              Mumbai, often referred to as the gateway to the Indian pharmaceutical industry, serves as the perfect backdrop for this monumental event. With its strategic importance and global connections, the expo is expected to draw 8,000+ business delegates from around the world.
            </p>
            <a href=" https://www.pharmmaexregistration.in/Pharmaex/visitor.aspx  " className="btn btn-success pharma-connections-btn">Pre-Registration</a>
          </div>
          {/* Right: Profile Cards */}
          <div className="col-lg-7">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="pharma-connections-card">
                  <div className="d-flex align-items-center mb-2">
                    <img src="/assests/img/briefCase.svg" alt="Visitor Icon" className="pharma-connections-icon me-2" />
                    <span className="pharma-connections-card-title">Visitor Profile</span>
                  </div>
                  <ul className="pharma-connections-list">
                    <li>Plant Management</li>
                    <li>Plant Engineering</li>
                    <li>Manufacturing/ Production ocers/ Formulations</li>
                    <li>Maintenance Engineering</li>
                    <li>Packaging</li>
                    <li>Pharmacists</li>
                    <li>Contract Manufacturers</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="pharma-connections-card">
                  <div className="d-flex align-items-center mb-2">
                    <img src="/assests/img/briefCase.svg" alt="Exhibitor Icon" className="pharma-connections-icon me-2" />
                    <span className="pharma-connections-card-title">Exhibitor Profile</span>
                  </div>
                  <ul className="pharma-connections-list">
                    <li>Pharma Processing Machineries (Tablet / Capsule / Liquid/ Injectable / Ointment / Dry Syrup)</li>
                    <li>Packaging Machineries, Packaging Materials & Consumables</li>
                    <li>Environment Control Equipment/ Services, Clean room Partitions, Equipment, Furniture & Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PharmaConnections; 