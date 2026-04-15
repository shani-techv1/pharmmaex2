import React from "react";
import Image from "next/image";
import styles from "./OurExhibitors.module.css";

// ===== Logo rows =====
const row1 = [
  "/assests/img/Clientslogo/Clientslogo/02.jpg",
  "/assests/img/Clientslogo/Clientslogo/03.jpg",
  "/assests/img/Clientslogo/Clientslogo/04.jpg",
  "/assests/img/Clientslogo/Clientslogo/05.jpg",
  "/assests/img/Clientslogo/Clientslogo/06.jpg",
  "/assests/img/Clientslogo/Clientslogo/07.jpg",
  "/assests/img/Clientslogo/Clientslogo/08.jpg",
  "/assests/img/Clientslogo/Clientslogo/09.jpg",
  "/assests/img/Clientslogo/Clientslogo/10.jpg",
  "/assests/img/Clientslogo/Clientslogo/11.jpg",
  "/assests/img/Clientslogo/Clientslogo/12.jpg",
  "/assests/img/Clientslogo/Clientslogo/13.jpg",
  "/assests/img/Clientslogo/Clientslogo/14.jpg",
  "/assests/img/Clientslogo/Clientslogo/15.jpg",
];

const row2 = [
  "/assests/img/Clientslogo/Clientslogo/16.jpg",
  "/assests/img/Clientslogo/Clientslogo/17.jpg",
  "/assests/img/Clientslogo/Clientslogo/18.jpg",
  "/assests/img/Clientslogo/Clientslogo/19.jpg",
  "/assests/img/Clientslogo/Clientslogo/20.jpg",
  "/assests/img/Clientslogo/Clientslogo/21.jpg",
  "/assests/img/Clientslogo/Clientslogo/22.jpg",
  "/assests/img/Clientslogo/Clientslogo/23.jpg",
  "/assests/img/Clientslogo/Clientslogo/24.jpg",
  "/assests/img/Clientslogo/Clientslogo/25.jpg",
  "/assests/img/Clientslogo/Clientslogo/26.jpg",
  "/assests/img/Clientslogo/Clientslogo/27.jpg",
  "/assests/img/Clientslogo/Clientslogo/28.jpg",
  "/assests/img/Clientslogo/Clientslogo/29.jpg",
  "/assests/img/Clientslogo/Clientslogo/30.jpg",
  "/assests/img/Clientslogo/Clientslogo/31.jpg",
  "/assests/img/Clientslogo/Clientslogo/32.jpg",
  "/assests/img/Clientslogo/Clientslogo/33.jpg",
  "/assests/img/Clientslogo/Clientslogo/34.jpg",
  "/assests/img/Clientslogo/Clientslogo/35.jpg",
  "/assests/img/Clientslogo/Clientslogo/36.jpg",
  "/assests/img/Clientslogo/Clientslogo/37.jpg",
  "/assests/img/Clientslogo/Clientslogo/38.jpg",
  "/assests/img/Clientslogo/Clientslogo/39.jpg",
  "/assests/img/Clientslogo/Clientslogo/40.jpg",
  "/assests/img/Clientslogo/Clientslogo/41.jpg",
];

const row3 = [
  "/assests/img/Clientslogo/Clientslogo/42.jpg",
  "/assests/img/Clientslogo/Clientslogo/43.jpg",
  "/assests/img/Clientslogo/Clientslogo/44.jpg",
  "/assests/img/Clientslogo/Clientslogo/45.jpg",
  "/assests/img/Clientslogo/Clientslogo/46.jpg",
  "/assests/img/Clientslogo/Clientslogo/47.jpg",
  "/assests/img/Clientslogo/Clientslogo/48.jpg",
  "/assests/img/Clientslogo/Clientslogo/49.jpg",
  "/assests/img/Clientslogo/Clientslogo/50.jpg",
  "/assests/img/Clientslogo/Clientslogo/51.jpg",
  "/assests/img/Clientslogo/Clientslogo/52.jpg",
  "/assests/img/Clientslogo/Clientslogo/53.jpg",
  "/assests/img/Clientslogo/Clientslogo/54.jpg",
  "/assests/img/Clientslogo/Clientslogo/55.png",
];

const TOTAL_LOGOS = row1.length + row2.length + row3.length;

// CSS marquee row — render images twice for seamless loop.
const MarqueeRow = ({ images, direction = "left", speed }) => {
  const trackClass = [
    styles.marqueeTrack,
    direction === "right" ? styles.marqueeTrackRight : "",
    speed === "slow" ? styles.marqueeTrackSlow : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.marqueeRow}>
      <div className={trackClass}>
        {[...images, ...images].map((src, idx) => (
          <div key={idx} className={styles.logoCard}>
            <Image
              src={src}
              alt="PharmmaEx exhibitor brand"
              width={120}
              height={60}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const OurExhibitors = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          Our Exhibitors
        </span>
        <h2 className={styles.title}>
          Trusted by{" "}
          <span className={styles.titleAccent}>India&apos;s pharma brands</span>
        </h2>
        <p className={styles.subtitle}>
          A glimpse of the {TOTAL_LOGOS}+ verified pharma companies — across PCD,
          third-party manufacturing, ayurvedic, cosmetic and herbal segments — that
          have exhibited at PharmmaEx editions.
        </p>
      </div>

      <MarqueeRow images={row1} direction="left" />
      <MarqueeRow images={row2} direction="right" speed="slow" />
      <MarqueeRow images={row3} direction="left" />

      <div className={styles.footerStat}>
        {/* <span><strong>{TOTAL_LOGOS}+</strong> verified brands shown</span>
        <span className={styles.footerStatDivider} />
        <span><strong>500+</strong> total exhibitors all-time</span> */}
        <span className={styles.footerStatDivider} />
        <span>Hover any logo to pause</span>
      </div>
    </section>
  );
};

export default OurExhibitors;
