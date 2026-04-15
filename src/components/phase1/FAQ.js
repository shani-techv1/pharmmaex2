import React, { useState } from "react";
import Link from "next/link";
import styles from "./FAQ.module.css";

const FAQS = [
  {
    q: "Who can exhibit at PharmmaEx?",
    a: "Any pharma manufacturer, PCD franchise company, third-party manufacturer, packaging supplier, machinery vendor, ayurvedic/nutraceutical brand or pharma service provider can book a stall.",
  },
  {
    q: "How much does it cost to book a stall?",
    a: "Stall packages start from a value-friendly entry tier and scale up to premium island booths. Download our brochure or request a callback to get the latest pricing for your preferred city.",
  },
  {
    q: "Is visitor entry free?",
    a: "Yes — visitor entry is 100% free with pre-registration. Walk-in entry is also available subject to badge verification.",
  },
  {
    q: "What kind of visitors should I expect?",
    a: "Doctors, retail/wholesale chemists, distributors, stockists, PCD franchise seekers, hospital purchase managers and pharma entrepreneurs. Average footfall is 8,000–12,000 buyers per city.",
  },
  {
    q: "Do you provide leads after the event?",
    a: "Yes. Every exhibitor receives a digital lead report containing visitor scans, contact details and category interest within 7 days of the event.",
  },
  {
    q: "Can I sponsor the event for extra branding?",
    a: "Absolutely. Title, Co-Title, Lanyard, Registration and Networking Sponsorship slots are available. Contact our team for a custom sponsorship deck.",
  },
];

const ChevronDown = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ArrowRight = ({ size = 13 }) => (
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

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          {/* ============ LEFT — sticky editorial header ============ */}
          <div className={styles.left}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              FAQs
            </span>
            <h2 className={styles.title}>
              Everything you need to{" "}
              <span className={styles.titleAccent}>know</span>
            </h2>
            <p className={styles.subtitle}>
              The questions exhibitors and visitors ask us most often — answered in
              one place. Still curious? Our team is one call away.
            </p>

            <div className={styles.helperBox}>
              <div className={styles.helperLabel}>Still have a question?</div>
              <h3 className={styles.helperTitle}>Talk to a real human</h3>
              <p className={styles.helperText}>
                Our team responds within one business hour on weekdays. Email or
                WhatsApp us — no chatbots.
              </p>
              <Link href="/contact-us" className={styles.helperCta}>
                Contact our team <ArrowRight />
              </Link>
            </div>
          </div>

          {/* ============ RIGHT — accordion list ============ */}
          <div className={styles.list}>
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <article
                  key={f.q}
                  className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
                >
                  <button
                    type="button"
                    className={styles.question}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.questionLeft}>
                      <span className={styles.questionNumber}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={styles.questionText}>{f.q}</span>
                    </span>
                    <span className={styles.toggleBtn}>
                      <ChevronDown />
                    </span>
                  </button>
                  {isOpen && <div className={styles.answer}>{f.a}</div>}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
