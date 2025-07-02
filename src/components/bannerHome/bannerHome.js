import React from 'react';
import styles from './bannerHome.module.css';
import Ticker from './Ticker';

const BannerHome = () => {
  return (
    <section className={styles.bannerHomeSection}>
      {/* Background Video */}
      <video
        className={styles.bannerVideo}
        src="https://pharmmaex.com/assets/img/phasramex-Videos.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className={styles.overlay}></div>
      {/* Content */}
      <div className="container position-relative h-100 z-3">
        <div className="row align-items-center h-100" style={{ minHeight: '80vh' }}>
          {/* Countdown Box */}
          <div className="col-lg-1 col-md-4 mb-4 mb-md-0">
            <div className={styles.countdownBox}>
              <div className="mb-3">
                <div className="fw-bold" style={{ fontSize: '2.2rem', color: '#fff' }}>130</div>
                <div className="" style={{ fontSize: '1.1rem' }}>Days</div>
              </div>
              <div className="mb-3">
                <div className="fw-bold" style={{ fontSize: '1.7rem', color: '#fff' }}>3,105</div>
                <div className="" style={{ fontSize: '1.1rem' }}>Hours</div>
              </div>
              <div>
                <div className="fw-bold" style={{ fontSize: '1.3rem', color: '#fff' }}>1,86,347</div>
                <div className="" style={{ fontSize: '1.1rem' }}>Minutes</div>
              </div>
            </div>
          </div>
          {/* Main Banner Content */}
          <div className="col-lg-6 col-md-8 text-start text-white mx-auto">
            <div className="mb-2" style={{ letterSpacing: '0.2em', fontSize: '1.1rem' }}>PHARMMAEX PRESENTING</div>
            <h1 className={styles.bannerTitle + " fw-bold mb-3"}>
              India's Largest Platform for Third Party Pharma Manufacturing and PCD Franchise Opportunities.
            </h1>
            <div className={styles.bannerSubtitle + " mb-3"}>
              03–04 October, 2025 | Bombay Exhibition Centre, Mumbai
            </div>
            <div className={styles.bannerBtnGroup}>
              <a href="#" className="btn btn-success px-4 py-2">Pre-Registration</a>
              <a href="#" className="btn btn-outline-light px-4 py-2 border border-2">Become Exhibitor</a>
            </div>
          </div>
          {/* QR Code Box */}
          <div className="col-lg-3 d-flex flex-column align-items-end justify-content-end">
            <div className={styles.qrBox}>
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://pharmmaex.com/pre-registration" alt="QR Code" className="img-fluid mb-2" />
              <div className={styles.textQR}>Scan QR for<br />Free Registration</div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Ticker */}
      <Ticker />
    </section>
  );
};

export default BannerHome;