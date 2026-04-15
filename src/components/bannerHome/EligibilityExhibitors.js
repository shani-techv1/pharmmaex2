import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./EligibilityExhibitors.module.css";

const CATEGORIES = [
  {
    img: "/assests/img/p1.webp",
    title: "Allopathic",
    desc:
      "Modern pharma brands showcasing prescription medicines, OTC, generics and chronic-therapy ranges to franchise buyers.",
    href: "/exhibitor-categories/pcd-pharma-franchise",
  },
  {
    img: "/assests/img/itemimg3.webp",
    title: "Ayurvedic",
    desc:
      "AYUSH-licensed brands presenting classical and proprietary ayurvedic medicines for clinics, pharmacies and PCD partners.",
    href: "/exhibitor-categories/ayurvedic-herbal",
  },
  {
    img: "/assests/img/itemimg5.webp",
    title: "Cosmetic",
    desc:
      "Derma cosmetics, cosmeceuticals and clinical skincare brands sourcing private-label and franchise opportunities.",
    href: "/exhibitor-categories/cosmetics-cosmeceuticals",
  },
  {
    img: "/assests/img/itemimg4.webp",
    title: "Herbal",
    desc:
      "Standardised herbal extracts, wellness formulations and natural product brands for the Indian and export markets.",
    href: "/exhibitor-categories/ayurvedic-herbal",
  },
  {
    img: "/assests/img/ex2.svg",
    title: "Third-Party Manufacturing",
    desc:
      "WHO-GMP contract manufacturers for tablets, capsules, syrups, ointments, injectables and nutraceuticals.",
    href: "/exhibitor-categories/third-party-manufacturing",
  },
  {
    img: "/assests/img/ex4.svg",
    title: "Nutraceuticals",
    desc:
      "FSSAI-licensed nutraceuticals, sports nutrition, protein and wellness brands offering private-label and franchise deals.",
    href: "/exhibitor-categories/nutraceuticals-wellness",
  },
  {
    img: "/assests/img/about2.webp",
    title: "Surgical & Devices",
    desc:
      "Surgical disposables, medical devices, diagnostic kits and hospital consumables from CDSCO-approved suppliers.",
    href: "/exhibitor-categories/surgical-medical-devices",
  },
  {
    img: "/assests/img/manpho.jpg",
    title: "Veterinary Pharma",
    desc:
      "Veterinary medicines, feed supplements, poultry health and dairy nutrition brands with PCD and franchise opportunities.",
    href: "/exhibitor-categories/veterinary-pharma",
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

const Chevron = ({ dir = "right", size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ transform: dir === "left" ? "rotate(180deg)" : "none" }}
  >
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

const AUTOPLAY_MS = 4000;

const EligibilityExhibitors = () => {
  const scrollerRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [index, setIndex] = useState(0);

  const getStep = () => {
    const el = scrollerRef.current;
    if (!el) return 320;
    const card = el.querySelector(`.${styles.card}`);
    if (!card) return 320;
    return card.getBoundingClientRect().width + 20;
  };

  const scrollToIndex = useCallback((i) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = getStep();
    const max = CATEGORIES.length - 1;
    const clamped = ((i % CATEGORIES.length) + CATEGORIES.length) % CATEGORIES.length;
    void max;
    el.scrollTo({ left: step * clamped, behavior: "smooth" });
    setIndex(clamped);
  }, []);

  const next = useCallback(() => scrollToIndex(index + 1), [index, scrollToIndex]);
  const prev = useCallback(() => scrollToIndex(index - 1), [index, scrollToIndex]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return undefined;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const step = getStep();
        const i = Math.round(el.scrollLeft / step);
        setIndex(Math.max(0, Math.min(CATEGORIES.length - 1, i)));
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => {
      const el = scrollerRef.current;
      if (!el) return;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      if (atEnd) scrollToIndex(0);
      else scrollToIndex(index + 1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, index, scrollToIndex]);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Who Can Exhibit
            </span>
            <h2 className={styles.title}>
              Built for every pharma{" "}
              <span className={styles.titleAccent}>vertical</span>
            </h2>
            <p className={styles.subtitle}>
              From allopathic prescription brands to ayurvedic, cosmetic and herbal
              specialists — PharmmaEx is the meeting point for every kind of
              pharma exhibitor in India.
            </p>
          </div>

          <Link href="/exhibitor-categories" className={styles.viewAll}>
            View all {CATEGORIES.length} categories <ArrowRight size={13} />
          </Link>
        </div>

        <div
          className={styles.carousel}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className={styles.scroller} ref={scrollerRef}>
            {CATEGORIES.map((c, idx) => (
              <Link
                key={c.title}
                href={c.href}
                className={`${styles.card} ${idx === index ? styles.cardActive : ""}`}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={c.img}
                    alt={c.title}
                    width={640}
                    height={480}
                    sizes="(max-width: 640px) 80vw, (max-width: 1100px) 40vw, 24vw"
                  />
                  <div className={styles.imageOverlay} />
                  <span className={styles.imageTag}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className={styles.body}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>{c.title}</h3>
                    <span className={styles.cardArrow}>
                      <ArrowRight size={15} />
                    </span>
                  </div>
                  <p className={styles.cardDesc}>{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* ===== Controls row ===== */}
          <div className={styles.controls}>
            <div className={styles.counter}>
              <span className={styles.counterCurrent}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.counterDivider} />
              <span className={styles.counterTotal}>
                {String(CATEGORIES.length).padStart(2, "0")}
              </span>
            </div>

            <div className={styles.dots} role="tablist" aria-label="Category slides">
              {CATEGORIES.map((c, i) => (
                <button
                  key={c.title}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to ${c.title}`}
                  className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                  onClick={() => scrollToIndex(i)}
                />
              ))}
            </div>

            <div className={styles.navPair}>
              <button
                type="button"
                className={styles.navBtn}
                onClick={prev}
                aria-label="Previous category"
              >
                <Chevron dir="left" />
              </button>
              <button
                type="button"
                className={styles.navBtn}
                onClick={next}
                aria-label="Next category"
              >
                <Chevron dir="right" />
              </button>
            </div>
          </div>

          <div
            className={styles.progressTrack}
            aria-hidden="true"
          >
            <div
              key={`${index}-${paused}`}
              className={`${styles.progressBar} ${paused ? styles.progressPaused : ""}`}
              style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilityExhibitors;
