import React from 'react';

const JoinPharma = () => {
  return (
    <section className="py-5 text-center join-pharma-section">
      <div className="container">
        <h2 className="fw-bold mb-3 join-pharma-heading">
          Join This Pharma Exhibition to Network<br />
          With Leading Industry Professionals.
        </h2>
        <p className="mb-4 join-pharma-desc">
          Connect with top pharma manufacturers, suppliers, and innovators at this exclusive exhibition. Explore the latest trends, expand your business network, and discover new growth opportunities. Whether you&apos;re in PCD, third-party manufacturing, or bulk supply, this event is your gateway to meaningful collaborations and success in the pharmaceutical industry.
        </p>
        <div className="d-flex justify-content-center gap-3 join-pharma-btn-group">
          <a href=" https://www.pharmmaexregistration.in/Pharmaex/visitor.aspx  " className="btn btn-success px-4 py-2">Pre-Registration</a>
          <a href="/exhibitor" className="btn btn-outline-success px-4 py-2">Become Exhibitor</a>
          <a href="/assests/pdf/Coimbotore_layout.pdf" className="btn btn-success px-4 py-2">Floor Plan</a>
        </div>
      </div>
    </section>
  );
};

export default JoinPharma; 