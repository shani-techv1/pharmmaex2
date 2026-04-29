import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./UpcomingEvents.module.css";

const FEATURED = {
  city: "Kolkata",
  state: "West Bengal",
  edition: "Flagship Edition · 2026",
  badge: "Now Open · Stalls Filling",
  dayRange: "03 — 04",
  monthYear: "July 2026",
  venue: "Biswa Bangla Exhibition Centre, New Town",
  href: "/events/kolkata",
  image: "/Kolkata.webp",
};

const SUPPORTING = [
  {
    city: "Coimbatore",
    edition: "20 — 21 February 2026",
    venue: "Codissia Trade Fair Complex",
    tag: "Recent Edition",
    href: "/events/coimbatore",
  },
  {
    city: "Mumbai",
    edition: "03 — 04 October 2025",
    venue: "Bombay Exhibition Centre, Goregaon",
    tag: "Past Edition",
    href: "/events/mumbai",
  },
];

// ---------- Inline icons ----------
const CalendarIcon = ({ size = 14 }) => (
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
    <rect x="3" y="4" width="18" height="18" rx="2.5" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const PinIcon = ({ size = 14 }) => (
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

const UpcomingEvents = ({ onBookStall }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* ============ Header row ============ */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Mark Your Calendar
            </span>
            <h2 className={styles.title}>
              Where PharmmaEx is going{" "}
              <span className={styles.titleAccent}>next</span>
            </h2>
            <p className={styles.subtitle}>
              India&apos;s most-attended pharma franchise &amp; manufacturing expo,
              on tour across the country. Pick the edition that fits your map.
            </p>
          </div>

          <Link href="/events" className={styles.viewAll}>
            View all editions <ArrowRight size={13} />
          </Link>
        </div>

        {/* ============ Asymmetric grid ============ */}
        <div className={styles.grid}>
          {/* ---- Featured upcoming card ---- */}
          <article className={styles.featured}>
            <div className={styles.featuredImg}>
              <Image
                src={FEATURED.image}
                alt={`${FEATURED.city} — ${FEATURED.venue}`}
                fill
                sizes="(max-width: 992px) 100vw, 60vw"
                priority
              />
            </div>
            <div className={styles.featuredOverlay} />

            <div className={styles.featuredTop}>
              <span className={styles.featuredBadge}>
                <span className={styles.featuredBadgeDot} />
                {FEATURED.badge}
              </span>
              <span className={styles.featuredEdition}>{FEATURED.edition}</span>
            </div>

            <div className={styles.featuredBottom}>
              <div className={styles.featuredDateRow}>
                <span className={styles.featuredDay}>{FEATURED.dayRange}</span>
                <span className={styles.featuredMonth}>{FEATURED.monthYear}</span>
              </div>
              <h3 className={styles.featuredCity}>{FEATURED.city}</h3>
              <p className={styles.featuredVenue}>
                <PinIcon size={15} />
                {FEATURED.venue}, {FEATURED.state}
              </p>
              <div className={styles.featuredActions}>
                <button
                  type="button"
                  className={styles.btnLight}
                  onClick={() => onBookStall && onBookStall(FEATURED.city)}
                >
                  Reserve a Stall <ArrowRight />
                </button>
                <Link href={FEATURED.href} className={styles.btnLightGhost}>
                  Edition details
                </Link>
              </div>
            </div>
          </article>

          {/* ---- Supporting (past) cards ---- */}
          <div className={styles.supportColumn}>
            {SUPPORTING.map((e) => (
              <Link key={e.city} href={e.href} className={styles.supportCard}>
                <div className={styles.supportHeader}>
                  <span className={styles.supportTag}>{e.tag}</span>
                  <span className={styles.supportArrow}>
                    <ArrowRight size={15} />
                  </span>
                </div>
                <h3 className={styles.supportCity}>{e.city}</h3>
                <div className={styles.supportMeta}>
                  <span className={styles.supportMetaLine}>
                    <CalendarIcon /> {e.edition}
                  </span>
                  <span className={styles.supportMetaLine}>
                    <PinIcon /> {e.venue}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
