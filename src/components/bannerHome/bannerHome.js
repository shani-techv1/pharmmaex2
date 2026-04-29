import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./bannerHome.module.css";
import Ticker from "./Ticker";

const BannerHome = () => {
  const eventDate = new Date("2026-07-03T09:00:00.000Z");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();

      if (diff > 0) {
        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        setTimeLeft({ days, hours, minutes });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    };

    updateCountdown(); // initial call
    const intervalId = setInterval(updateCountdown, 60 * 1000); // update every minute

    return () => clearInterval(intervalId); // cleanup
  }, []);

  return (
    <section className={styles.bannerHomeSection}>
      {/* Background Video */}
      <video
        className={styles.bannerVideo}
        src="https://agiledigitaledge.dev/ust-pay/phasramex-Videos.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className="container position-relative h-100 z-3">
        <div
          className="row align-items-center h-100"
          style={{ minHeight: "80vh" }}
        >
          {/* Countdown Box */}
          <div className="col-lg-1 col-md-4 mb-4 mb-md-0 countdownBoxArea">
            <div className={styles.countdownBox}>
              <div className="mb-3">
                <div
                  className="fw-bold"
                  style={{ fontSize: "2.2rem", color: "#fff" }}
                >
                  {timeLeft.days.toLocaleString()}
                </div>
                <div style={{ fontSize: "1.1rem" }}>Days</div>
              </div>
              <div className="mb-3">
                <div
                  className="fw-bold"
                  style={{ fontSize: "1.7rem", color: "#fff" }}
                >
                  {timeLeft.hours.toLocaleString()}
                </div>
                <div style={{ fontSize: "1.1rem" }}>Hours</div>
              </div>
              <div className="d-none d-md-block">
                <div
                  className="fw-bold"
                  style={{ fontSize: "1.3rem", color: "#fff" }}
                >
                  {timeLeft.minutes.toLocaleString()}
                </div>
                <div style={{ fontSize: "1.1rem" }}>Minutes</div>
              </div>
            </div>

            <div className="qrBanner">
              <div className={styles.qrBox}>
                <Image
                  src="/assests/img/pharma-qr.jpeg"
                  alt="QR Code"
                  className="img-fluid mb-2"
                  width={120}
                  height={120}
                />
                <div className={styles.textQR}>
                  Scan QR for
                  <br />
                  Free Registration
                </div>
              </div>
            </div>
          </div>

          {/* Main Banner Content */}
          <div className="col-lg-6 col-md-8 text-start text-white mx-auto">
            <span className={styles.bannerEyebrow}>
              <span className={styles.bannerEyebrowDot} />
              PharmmaEx Presenting
            </span>
            <h1 className={styles.bannerTitle}>
              Connect with 500+ pharma companies, manufacturers, packing
              materials, raw ingredients & 
              <span className={styles.bannerTitleAccent}> franchises under one roof.</span>
            </h1>
            {/* <p className={styles.bannerSubtitle}>
              Connect with 500+ verified pharma companies, distributors and
              franchise buyers under one roof.
            </p> */}
            <div className={styles.bannerEventLine}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="18" rx="2.5" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              3–4 July 2026 · Biswa Bangla Exhibition Centre, New Town, Kolkata
            </div>
            <div className={styles.bannerBtnGroup}>
              <a href="/exhibitor" className={styles.bannerBtnPrimary}>
                Book a Stall
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="/events" className={styles.bannerBtnGhost}>
                Explore Events
              </a>
            </div>
          </div>

          {/* QR Code Box */}
          <div className="col-lg-3 d-flex flex-column align-items-end justify-content-end d-none d-md-flex">
            <div className={styles.qrBox}>
              <Image
                src="/assests/img/pharma-qr.jpeg"
                alt="QR Code"
                className="img-fluid mb-2"
                width={120}
                height={120}
              />
              <div className={styles.textQR}>
                Scan QR for
                <br />
                Free Registration
              </div>
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
