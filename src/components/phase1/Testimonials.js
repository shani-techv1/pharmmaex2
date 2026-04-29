import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Testimonials.module.css";
import { clientsReviewData } from "@/src/shared/clientReviewData";

// Trim long quotes so all cards balance visually. Full text stays on /client-review.
const trimQuote = (text, max) => {
  if (!text) return "";
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return clean.slice(0, max).replace(/[\s,;:.-]+\S*$/, "") + "…";
};

const REVIEWS = clientsReviewData;
const TOTAL = REVIEWS.length;
const AUTOPLAY_MS = 6000;

// ---------- Inline icons ----------
const StarIcon = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

const QuoteIcon = ({ size = 60 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// ---------- Sub-components ----------
const TestimonialCard = ({ review, position }) => {
  const isCenter = position === "center";
  const cardClass = `${styles.card} ${
    isCenter ? styles.cardCenter : styles.cardSide
  }`;
  const trimMax = isCenter ? 280 : 180;

  return (
    <article className={cardClass} aria-hidden={!isCenter}>
      <div className={styles.cardQuoteIcon}>
        <QuoteIcon size={isCenter ? 70 : 50} />
      </div>

      <div className={styles.cardStars}>
        {Array.from({ length: review.rating || 5 }).map((_, i) => (
          <StarIcon key={i} size={isCenter ? 15 : 13} />
        ))}
      </div>

      <p className={styles.cardQuote}>
        &ldquo;{trimQuote(review.text, trimMax)}&rdquo;
      </p>

      <div className={styles.cardFooter}>
        <div className={styles.cardAvatar}>
          {review.avatar ? (
            <Image
              src={review.avatar}
              alt={review.name.trim()}
              width={64}
              height={64}
            />
          ) : (
            <div className={styles.cardAvatarFallback}>
              {review.name.trim().charAt(0)}
            </div>
          )}
        </div>
        <div className={styles.cardAuthor}>
          <span className={styles.cardName}>{review.name.trim()}</span>
          <span className={styles.cardRole}>
            {review.title}, {review.company}
          </span>
        </div>
      </div>
    </article>
  );
};

// ---------- Main component ----------
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((idx) => {
    setActiveIndex(((idx % TOTAL) + TOTAL) % TOTAL);
  }, []);

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActiveIndex((i) => (i + 1) % TOTAL);
    }, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused]);

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const leftIdx = (activeIndex - 1 + TOTAL) % TOTAL;
  const rightIdx = (activeIndex + 1) % TOTAL;

  // Show up to 6 dots — clamps for long lists
  const visibleDots = Math.min(TOTAL, 6);

  return (
    <section className={styles.section}>
      <div className="container">
        {/* ============ Header ============ */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Exhibitor Success Stories
          </span>
          <h2 className={styles.title}>
            In the words of{" "}
            <span className={styles.titleAccent}>pharma leaders</span>
          </h2>
          <p className={styles.subtitle}>
            Don&apos;t just take our word for it. Here&apos;s what brand directors,
            founders and senior sales heads say after exhibiting at PharmmaEx
            editions across India.
          </p>
        </div>

        {/* ============ Slider ============ */}
        <div
          className={styles.slider}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className={styles.counter}>
            <strong>{String(activeIndex + 1).padStart(2, "0")}</strong> / {String(TOTAL).padStart(2, "0")}
          </div>

          <div className={styles.track}>
            <TestimonialCard review={REVIEWS[leftIdx]} position="left" />
            <TestimonialCard review={REVIEWS[activeIndex]} position="center" />
            <TestimonialCard review={REVIEWS[rightIdx]} position="right" />
          </div>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.navBtn}
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </button>

            <div className={styles.dots} role="tablist">
              {Array.from({ length: visibleDots }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`${styles.dot} ${
                    i === activeIndex % visibleDots ? styles.dotActive : ""
                  }`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className={styles.navBtn}
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
