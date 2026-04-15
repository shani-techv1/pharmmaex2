import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./PastEventHighlights.module.css";

const FEATURED = {
  src: "/assests/img/gal2024/IMG-001.jpg",
  alt: "PharmmaEx Mumbai 2025 — Bombay Exhibition Centre",
  caption: "Mumbai 2025 · Bombay Exhibition Centre",
};

const SMALL_PHOTOS = [
  { src: "/assests/img/gal2024/IMG-002.jpg", alt: "PharmmaEx exhibition floor" },
  { src: "/assests/img/gal2024/IMG-003.jpg", alt: "PharmmaEx exhibitor booth" },
  { src: "/assests/img/gal2024/IMG-004.jpg", alt: "PharmmaEx visitor networking" },
  { src: "/assests/img/gal2024/IMG-005.jpg", alt: "PharmmaEx product showcase" },
];

const STATS = [
  {
    value: "12K+",
    label: "Our Exhibition Footfall",
    detail: "Our exhibition welcomed over 12,000 doctors, distributors and franchise buyers in just two days.",
  },
  {
    value: "100k+",
    label: "Brands Showcased",
    detail: "Across allopathic, ayurvedic, cosmetic and herbal segments.",
  },
  {
    value: "₹100+Cr",
    label: "Business Generated",
    detail: "On-spot orders, franchise contracts and manufacturing tie-ups.",
  },
];

const ArrowRight = ({ size = 14 }) => (
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

const PinIcon = ({ size = 13 }) => (
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
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PastEventHighlights = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* ============ Header row ============ */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Past Editions
            </span>
            <h2 className={styles.title}>
              Six cities. Six{" "}
              <span className={styles.titleAccent}>stories.</span>
            </h2>
            <p className={styles.subtitle}>
              From Bangalore in 2024 to Mumbai in 2025 — moments from packed halls,
              signed deals and proud exhibitors at every PharmmaEx edition so far.
            </p>
          </div>

          <Link href="/past-exhibitions" className={styles.viewAll}>
            View full gallery <ArrowRight size={13} />
          </Link>
        </div>

        {/* ============ Asymmetric photo grid ============ */}
        <div className={styles.photoGrid}>
          {/* Featured image */}
          <div className={`${styles.photo} ${styles.photoFeatured}`}>
            <Image
              src={FEATURED.src}
              alt={FEATURED.alt}
              fill
              sizes="(max-width: 992px) 100vw, 60vw"
            />
            <span className={styles.photoCaption}>
              <PinIcon /> {FEATURED.caption}
            </span>
          </div>

          {/* 2x2 small grid */}
          <div className={styles.smallGrid}>
            {SMALL_PHOTOS.map((p) => (
              <div key={p.src} className={`${styles.photo} ${styles.photoSmall}`}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 992px) 50vw, 20vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ============ Stat row ============ */}
        <div className={styles.statRow}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.statCard}>
              <span className={styles.statValue}>
                <strong>{s.value}</strong>
              </span>
              <div className={styles.statLabel}>
                <strong>{s.label}</strong>
                <br />
                {s.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEventHighlights;
