import React from "react";
import styles from "./WhyExhibit.module.css";

// ---------- Inline icons (consistent with UpcomingEvents) ----------
const TargetIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const HandshakeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
    <path d="M19 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
    <path d="M5 9l4-4 3 3 3-3 4 4" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const TrendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="3 17 9 11 13 15 21 7" />
    <polyline points="14 7 21 7 21 14" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const SpeakerIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1z" />
    <path d="M16 8a5 5 0 0 1 0 8" />
    <path d="M19 5a9 9 0 0 1 0 14" />
  </svg>
);

const ArrowRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const BENEFITS = [
  {
    icon: <TargetIcon />,
    title: "Verified Buyers",
    text: "Meet 50,000+ pre-screened doctors, distributors and franchise owners actively looking to source.",
  },
  {
    icon: <HandshakeIcon />,
    title: "Direct Deals",
    text: "Skip middlemen — close PCD, third-party manufacturing and bulk supply contracts on the spot.",
  },
  {
    icon: <GlobeIcon />,
    title: "Pan-India Reach",
    text: "Showcase your brand across 25+ states in a single year with one trusted exhibition partner.",
  },
  {
    icon: <TrendIcon />,
    title: "Proven ROI",
    text: "Past exhibitors report an average of 25k+ qualified leads and 20+ closed deals per event.",
  },
  {
    icon: <ShieldIcon />,
    title: "Trusted Brand",
    text: "3+ years organizing India\u2019s most credible pharma franchise expos with premium brand association.",
  },
  {
    icon: <SpeakerIcon />,
    title: "360° Marketing",
    text: "Pre-event digital campaigns, on-ground branding and post-event lead reports — included.",
  },
];

const WhyExhibit = ({ onCTA }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          {/* ============ LEFT — sticky editorial header ============ */}
          <div className={styles.left}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Why Exhibit With Us
            </span>
            <h2 className={styles.title}>
              Built for the brands that{" "}
              <span className={styles.titleAccent}>lead pharma</span>
            </h2>
            <p className={styles.subtitle}>
              Six reasons 500+ pharma brands return to PharmmaEx as their #1
              lead-generation channel — year after year, city after city.
            </p>

            <div className={styles.statCard}>
              <span className={styles.statValue}>
                <strong>25k+</strong> qualified leads
              </span>
              <div className={styles.statLabel}>
                Average per exhibitor, per edition. Top performers cross 250+.
              </div>
            </div>

            <div className={styles.ctaRow}>
              <button
                type="button"
                className={styles.btnPrimary}
                onClick={() => onCTA && onCTA("stall")}
              >
                Book Your Stall <ArrowRight />
              </button>
              <button
                type="button"
                className={styles.btnGhost}
                onClick={() => onCTA && onCTA("brochure")}
              >
                Download Brochure
              </button>
            </div>
          </div>

          {/* ============ RIGHT — numbered benefit grid ============ */}
          <div className={styles.grid}>
            {BENEFITS.map((b, idx) => (
              <article key={b.title} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardNumber}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.cardIcon}>{b.icon}</span>
                </div>
                <h3 className={styles.cardTitle}>{b.title}</h3>
                <p className={styles.cardText}>{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyExhibit;
