import React, { useEffect, useRef, useState } from "react";
import styles from "./StatsCounter.module.css";

const STATS = [
  { value: 500, suffix: "+", label: "Exhibitors" },
  { value: 50000, suffix: "+", label: "Visitors" },
  { value: 25, suffix: "+", label: "States Covered" },
  { value: 3, suffix: "+", label: "Years" },
];

const useCountUp = (end, duration = 1800, start = false) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start]);
  return value;
};

const StatItem = ({ value, suffix, label, visible }) => {
  const count = useCountUp(value, 1800, visible);
  return (
    <div className={styles.statBlock}>
      <div className={styles.statValue}>
        {count.toLocaleString()}
        <span>{suffix}</span>
      </div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
};

const StatsCounter = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Our Track Record
          </span>
          <h2 className={styles.title}>
            Trusted by India&apos;s{" "}
            <span className={styles.titleAccent}>pharma leaders</span>
          </h2>
          <p className={styles.subtitle}>
            3+ years of delivering high-impact pharma franchise &amp; manufacturing
            expos across India. The numbers speak for themselves.
          </p>
        </div>

        <div className={styles.statsRow}>
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
