import React, { useEffect, useState } from "react";
import styles from "./Phase1.module.css";

const StickyCTA = ({ onBookStall, onCallback }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;
  return (
    <div className={styles.stickyBar}>
      <div className={styles.stickyInner}>
        <div className={styles.stickyText}>
          <strong className={styles.stickyVenue}>
            Vigyan Bhawan, Science City, Ahmedabad, Gujarat
          </strong>
          <span className={styles.stickyDot}> • </span>
          <span className={styles.stickyEntry}>Visitor Entry Free</span>
        </div>
        <div className={styles.stickyActions}>
          <button type="button" className={styles.btnGhostSm} onClick={onCallback}>
            Request Callback
          </button>
          <button type="button" className={styles.btnPrimarySm} onClick={onBookStall}>
            Book Stall
          </button>
          <a
            href="https://www.pharmmaexregistration.in/Pharmaex/visitor.aspx"
            className={styles.btnPrimarySm}
          >
            Visitor Registration
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
