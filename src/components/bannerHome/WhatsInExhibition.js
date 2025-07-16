import React from 'react';

const WhatsInExhibition = () => {
  return (
    <section className="whats-in-exhibition-section">
      <div className="container whats-in-exhibition-container">
        <div className="row align-items-center">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h2 className="whats-in-exhibition-heading">What&apos;s in the<br />Exhibition</h2>
          </div>
          <div className="col-lg-8 d-flex justify-content-lg-start justify-content-center gap-4 whats-in-exhibition-stats">
            <div className="whats-in-exhibition-box">
              <div className="whats-in-exhibition-number">10K</div>
              <div className="whats-in-exhibition-label">Attendees</div>
            </div>
            <div className="whats-in-exhibition-box">
              <div className="whats-in-exhibition-number">150+</div>
              <div className="whats-in-exhibition-label">Exhibitors</div>
            </div>
            <div className="whats-in-exhibition-box">
              <div className="whats-in-exhibition-number">1L+</div>
              <div className="whats-in-exhibition-label">Product on Display</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsInExhibition; 