import React from "react";
import Image from "next/image";
import styles from "./OurExhibitors.module.css";

const TOTAL_LOGOS = 150;

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

      <div className={styles.logosWrap}>
        <div className={styles.logosFrame}>
          <Image
            src="/assests/img/Client-Logos.jpg"
            alt="PharmmaEx exhibitor brands — collage of verified pharma companies"
            width={1920}
            height={1637}
            sizes="(max-width: 640px) 92vw, (max-width: 1200px) 88vw, 1200px"
            className={styles.logosImage}
            priority={false}
          />
        </div>
      </div>

      <div className={styles.footerStat}>
        <span><strong>{TOTAL_LOGOS}+</strong> verified brands</span>
        <span className={styles.footerStatDivider} />
        <span>Across PCD, third-party, ayurvedic & cosmetic segments</span>
      </div>
    </section>
  );
};

export default OurExhibitors;
