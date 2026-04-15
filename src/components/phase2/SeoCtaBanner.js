import React from "react";
import Link from "next/link";
import styles from "./Phase2.module.css";
import { ArrowRight } from "./icons";

const SeoCtaBanner = ({
  title = "Ready to meet 500+ verified pharma brands?",
  subtitle = "Two days. One venue. Hundreds of franchise, manufacturing and distribution opportunities under one roof.",
  primaryLabel = "Book Your Stall",
  primaryHref = "/exhibitor",
  secondaryLabel = "Pre-Register Free",
  secondaryHref = "https://www.pharmmaexregistration.in/Pharmaex/visitor.aspx",
}) => {
  return (
    <div className={styles.ctaBanner}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div className={styles.ctaBannerActions}>
        <Link href={primaryHref} className={styles.btnLight}>
          {primaryLabel} <ArrowRight />
        </Link>
        <a
          href={secondaryHref}
          className={styles.btnGhost}
          style={{
            background: "transparent",
            color: "#fff",
            borderColor: "rgba(255, 255, 255, 0.32)",
          }}
          target={secondaryHref.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
        >
          {secondaryLabel}
        </a>
      </div>
    </div>
  );
};

export default SeoCtaBanner;
