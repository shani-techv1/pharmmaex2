import React from "react";
import styles from "./VisitorBenefits.module.css";

// ---------- Inline icons ----------
const FactoryIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 20h20" />
    <path d="M4 20V9l5 3V9l5 3V9l5 3v8" />
    <path d="M9 20v-4M14 20v-4" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const PriceTagIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const PackageIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const GraduationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const TicketIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z" />
    <path d="M13 7v2M13 13v2M13 19v-2" />
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
    icon: <FactoryIcon />,
    title: "150+ Manufacturers",
    text: "Meet pre-screened pharma manufacturers and franchise companies under one roof.",
  },
  {
    icon: <BriefcaseIcon />,
    title: "PCD Franchise",
    text: "Compare PCD franchise opportunities and lock monopoly rights district by district.",
  },
  {
    icon: <PriceTagIcon />,
    title: "Direct Negotiation",
    text: "Negotiate the best wholesale and third-party manufacturing rates without any middlemen.",
  },
  {
    icon: <PackageIcon />,
    title: "New Launches",
    text: "Discover new molecules, finished products and packaging innovations from top brands.",
  },
  {
    icon: <GraduationIcon />,
    title: "Knowledge Sessions",
    text: "Free CME-style sessions on regulations, exports and pharma business growth from industry leaders.",
  },
  {
    icon: <TicketIcon />,
    title: "Free Entry",
    text: "100% complimentary visitor access with pre-registration. No tickets, no surprises.",
  },
];

const VisitorBenefits = ({ onRegister }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          {/* ============ LEFT — sticky editorial header ============ */}
          <div className={styles.left}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              For Visitors
            </span>
            <h2 className={styles.title}>
              Everything a pharma buyer needs —{" "}
              <span className={styles.titleAccent}>in one day</span>
            </h2>
            <p className={styles.subtitle}>
              Whether you&apos;re a doctor, distributor or aspiring franchise owner,
              PharmmaEx puts every opportunity in front of you. Free with
              pre-registration.
            </p>

            <div className={styles.statCard}>
              <span className={styles.statValue}>
                <strong>100%</strong> free entry
              </span>
              <div className={styles.statLabel}>
                Complimentary access for verified visitors. Pre-register online to
                skip the queue at the venue.
              </div>
            </div>

            <div className={styles.ctaRow}>
              <button
                type="button"
                className={styles.btnPrimary}
                onClick={onRegister}
              >
                Pre-Register Free <ArrowRight />
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

export default VisitorBenefits;
