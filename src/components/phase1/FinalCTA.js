import React from "react";
import styles from "./FinalCTA.module.css";

const ArrowRight = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
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
);

const TRUST_STATS = [
  { value: "500+", label: "Verified Exhibitors" },
  { value: "50,000+", label: "Pre-Screened Visitors" },
  { value: "25+", label: "States Covered" },
  { value: "3+", label: "Years of Experience" },
];

const FinalCTA = ({ onBookStall, onBrochure }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.grid} aria-hidden="true" />

          <div className={styles.inner}>
            {/* ---- Left content ---- */}
            <div>
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                Limited Stalls Remaining
              </span>
              <h2 className={styles.title}>
                Ready to meet 50,000+{" "}
                <span className={styles.titleAccent}>pharma buyers?</span>
              </h2>
              <p className={styles.subtitle}>
                Lock in your stall at the next PharmmaEx edition before it sells
                out. Premium and corner booths get booked 90 days in advance.
              </p>

              <div className={styles.actions}>
                <button
                  type="button"
                  className={styles.btnPrimary}
                  onClick={onBookStall}
                >
                  Book Your Stall <ArrowRight />
                </button>
                <button
                  type="button"
                  className={styles.btnGhost}
                  onClick={onBrochure}
                >
                  Download Brochure
                </button>
              </div>
            </div>

            {/* ---- Right trust stats ---- */}
            <div className={styles.statBlock}>
              {TRUST_STATS.map((s) => (
                <div key={s.label} className={styles.trustItem}>
                  <span className={styles.trustValue}>
                    <strong>{s.value}</strong>
                  </span>
                  <span className={styles.trustLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
