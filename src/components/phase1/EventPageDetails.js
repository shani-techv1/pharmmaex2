import React, { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./Phase1.module.css";
import detail from "./EventPage.module.css";
import FAQ from "./FAQ";
import { focusFirstError, validateForm } from "@/src/shared/validation";

const LeadFormModal = dynamic(() => import("./LeadFormModal"), { ssr: false });

const WHO_ATTENDS = [
  { icon: "🩺", title: "Doctors & Clinicians" },
  { icon: "💊", title: "Retail & Wholesale Chemists" },
  { icon: "🚚", title: "Distributors & Stockists" },
  { icon: "🏥", title: "Hospital Buyers" },
  { icon: "🚀", title: "PCD Franchise Seekers" },
  { icon: "🏭", title: "Manufacturing Buyers" },
];

const EXHIBITOR_PROFILE = [
  "PCD Pharma Franchise Companies",
  "Third-Party Manufacturers",
  "Ayurvedic & Herbal Brands",
  "Nutraceuticals & Wellness",
  "Surgical & Medical Devices",
  "Packaging & Machinery Suppliers",
  "Cosmeceuticals & Personal Care",
  "Veterinary Pharma",
];

const VISITOR_PROFILE = [
  "Aspiring PCD entrepreneurs from Tier 1, 2 & 3 cities",
  "Distributors looking for new monopoly products",
  "Hospital & retail purchase managers",
  "Doctors & clinicians sourcing direct supply",
  "Investors evaluating pharma franchise opportunities",
];

const BENEFITS = [
  { icon: "🎯", title: "Direct Buyer Access", text: "Meet 10,000+ pre-screened pharma buyers in two days." },
  { icon: "🤝", title: "On-Spot Deals", text: "Sign PCD agreements and franchise contracts on the floor." },
  { icon: "📣", title: "Brand Visibility", text: "Premium branding across pre-event campaigns and venue signage." },
  { icon: "📊", title: "Lead Reports", text: "Receive a digital lead report within 7 days of the event." },
];

const PACKAGES = [
  {
    name: "Standard",
    price: "₹85,000",
    unit: "9 sq.m shell scheme",
    features: ["1 Table + 2 Chairs", "2 Spotlights", "1 Power Socket", "Fascia Branding", "2 Exhibitor Passes"],
    cta: "Book Standard",
    highlight: false,
  },
  {
    name: "Premium",
    price: "₹1,65,000",
    unit: "18 sq.m corner booth",
    features: [
      "Custom Branding Wall",
      "2 Tables + 4 Chairs",
      "4 Spotlights + LED",
      "Premium Lounge Area",
      "5 Exhibitor Passes",
      "Logo on Event Website",
    ],
    cta: "Book Premium",
    highlight: true,
  },
  {
    name: "Island",
    price: "On Request",
    unit: "36 sq.m island booth",
    features: [
      "4-Side Open Layout",
      "Fully Custom Design",
      "Dedicated Lounge",
      "Speaker Slot Included",
      "10 Exhibitor Passes",
      "Co-Branding Rights",
    ],
    cta: "Talk to Sales",
    highlight: false,
  },
];

const GALLERY = [
  "/assests/img/gal2024/IMG-001.jpg",
  "/assests/img/gal2024/IMG-002.jpg",
  "/assests/img/gal2024/IMG-003.jpg",
  "/assests/img/gal2024/IMG-004.jpg",
  "/assests/img/gal2024/IMG-005.jpg",
  "/assests/img/gal2024/IMG-007.jpg",
  "/assests/img/gal2024/IMG-008.jpg",
  "/assests/img/gal2024/IMG-009.jpg",
];

const CONTACT_SCHEMA = {
  name: { label: "Full name", required: true, type: "name", minLength: 2, maxLength: 60 },
  company: { label: "Company name", maxLength: 100 },
  phone: { label: "Phone number", required: true, type: "phone" },
  email: { label: "Email", required: true, type: "email", maxLength: 100 },
  message: { label: "Message", maxLength: 1000 },
};

const ContactForm = ({ onSubmit }) => {
  const [data, setData] = useState({ name: "", company: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const handle = (f) => (e) => {
    setData({ ...data, [f]: e.target.value });
    if (errors[f]) setErrors({ ...errors, [f]: null });
  };

  const fieldProps = (f) => ({
    name: f,
    value: data[f],
    onChange: handle(f),
    className: errors[f] ? styles.inputError : "",
    "aria-invalid": Boolean(errors[f]),
    "aria-describedby": errors[f] ? `contact-${f}-error` : undefined,
  });

  const renderError = (f) =>
    errors[f] && <span id={`contact-${f}-error`} className={styles.errorMsg}>{errors[f]}</span>;

  const submit = (e) => {
    e.preventDefault();
    const errs = validateForm(data, CONTACT_SCHEMA);
    if (Object.keys(errs).length) {
      setErrors(errs);
      focusFirstError(e.currentTarget, errs);
      return;
    }
    try {
      const list = JSON.parse(localStorage.getItem("pharmmaex_event_contact") || "[]");
      list.push({ ...data, ts: new Date().toISOString() });
      localStorage.setItem("pharmmaex_event_contact", JSON.stringify(list));
    } catch {}
    setDone(true);
  };

  if (done) {
    return (
      <div className={detail.contactSuccess}>
        <div className={styles.successIcon}>✓</div>
        <h3>Message Received</h3>
        <p>Our event team will reach out within 1 business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={detail.contactForm} noValidate>
      <div className={detail.row2}>
        <div className={styles.formField}>
          <label>Full Name</label>
          <input aria-label="Full Name" placeholder="Rajesh Kumar" maxLength={60} {...fieldProps("name")} />
          {renderError("name")}
        </div>
        <div className={styles.formField}>
          <label>Company</label>
          <input aria-label="Company" placeholder="ABC Pharma Pvt. Ltd." maxLength={100} {...fieldProps("company")} />
          {renderError("company")}
        </div>
      </div>
      <div className={detail.row2}>
        <div className={styles.formField}>
          <label>Phone</label>
          <input type="tel" aria-label="Phone" placeholder="+91 98765 43210" maxLength={14} {...fieldProps("phone")} />
          {renderError("phone")}
        </div>
        <div className={styles.formField}>
          <label>Email</label>
          <input type="email" aria-label="Email" placeholder="you@company.com" maxLength={100} {...fieldProps("email")} />
          {renderError("email")}
        </div>
      </div>
      <div className={styles.formField}>
        <label>How can we help?</label>
        <textarea
          rows={4}
          aria-label="How can we help?"
          placeholder="Tell us about your requirements..."
          maxLength={1000}
          {...fieldProps("message")}
        />
        {renderError("message")}
      </div>
      <button type="submit" className={styles.btnPrimaryFull}>Send Enquiry</button>
    </form>
  );
};

const EventPageDetails = ({ city = "Ahmedabad", year = "2027", date = "8-9 January, 2027", venue = "Vigyan Bhawan, Science City, Ahmedabad" }) => {
  const [modal, setModal] = useState(null);
  const open = (type) => setModal({ type });
  const close = () => setModal(null);

  return (
    <>
      {/* Event Overview */}
      <section className={detail.section}>
        <div className="container">
          <div className={styles.headerCenter}>
            <span className={styles.eyebrow}>Event Overview</span>
            <h2 className={styles.sectionTitle}>PharmmaEx {city} {year}</h2>
            <p className={styles.sectionSub}>
              India&apos;s largest dedicated pharma franchise & manufacturing expo returns to {city} on {date}.
              Two power-packed days at {venue} bringing together 500+ brands and 12,000+ qualified pharma buyers.
            </p>
          </div>
          <div className={detail.overviewCards}>
            <div><strong>📅 {date}</strong><span>Friday – Saturday</span></div>
            <div><strong>📍 {city}</strong><span>{venue}</span></div>
            <div><strong>⏰ 10 AM – 6 PM</strong><span>Both Days</span></div>
            <div><strong>🎟️ Free Entry</strong><span>With Pre-Registration</span></div>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className={`${detail.section} ${detail.alt}`}>
        <div className="container">
          <div className={styles.headerCenter}>
            <span className={styles.eyebrow}>Audience</span>
            <h2 className={styles.sectionTitle}>Who Should Attend</h2>
          </div>
          <div className={detail.whoGrid}>
            {WHO_ATTENDS.map((w) => (
              <div key={w.title} className={detail.whoCard}>
                <span className={detail.whoIcon}>{w.icon}</span>
                <span>{w.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibitor & Visitor Profile */}
      <section className={detail.section}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <span className={styles.eyebrow}>Exhibitor Profile</span>
              <h2 className={styles.sectionTitleLeft}>Who Exhibits</h2>
              <ul className={detail.bulletList}>
                {EXHIBITOR_PROFILE.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
            <div className="col-lg-6">
              <span className={styles.eyebrow}>Visitor Profile</span>
              <h2 className={styles.sectionTitleLeft}>Who Visits</h2>
              <ul className={detail.bulletList}>
                {VISITOR_PROFILE.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Participation */}
      <section className={`${detail.section} ${detail.alt}`}>
        <div className="container">
          <div className={styles.headerCenter}>
            <span className={styles.eyebrow}>Benefits</span>
            <h2 className={styles.sectionTitle}>Benefits of Participation</h2>
          </div>
          <div className={styles.benefitGrid}>
            {BENEFITS.map((b) => (
              <div key={b.title} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{b.icon}</div>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitText}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className={detail.section}>
        <div className="container">
          <div className={styles.headerCenter}>
            <span className={styles.eyebrow}>Pricing</span>
            <h2 className={styles.sectionTitle}>Stall Packages</h2>
            <p className={styles.sectionSub}>Three flexible options for every brand size. Lock in early-bird pricing before stalls fill up.</p>
          </div>
          <div className={detail.priceGrid}>
            {PACKAGES.map((p) => (
              <div key={p.name} className={`${detail.priceCard} ${p.highlight ? detail.priceFeatured : ""}`}>
                {p.highlight && <div className={detail.priceBadge}>Most Popular</div>}
                <h3 className={detail.priceName}>{p.name}</h3>
                <div className={detail.priceVal}>{p.price}</div>
                <div className={detail.priceUnit}>{p.unit}</div>
                <ul className={detail.priceFeatures}>
                  {p.features.map((f) => <li key={f}>✓ {f}</li>)}
                </ul>
                <button
                  type="button"
                  onClick={() => open("stall")}
                  className={p.highlight ? styles.btnPrimaryFull : detail.btnOutlineFull}
                >
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className={`${detail.section} ${detail.alt}`}>
        <div className="container">
          <div className={styles.headerCenter}>
            <span className={styles.eyebrow}>Gallery</span>
            <h2 className={styles.sectionTitle}>From Past Editions</h2>
          </div>
          <div className={detail.eventGallery}>
            {GALLERY.map((src, i) => (
              <div key={src} className={detail.eventGalleryItem}>
                <img src={src} alt={`PharmmaEx ${city} ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Contact Form */}
      <section className={detail.section}>
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-5">
              <span className={styles.eyebrow}>Get In Touch</span>
              <h2 className={styles.sectionTitleLeft}>Have Questions About {city}?</h2>
              <p className={styles.sectionSubLeft}>
                Speak directly with our event team for stall booking, sponsorship or visitor assistance.
              </p>
              <ul className={detail.contactList}>
                <li>📞 +91 92580 02828</li>
                <li>✉️ info@pharmmaex.com</li>
                <li>📍 {venue}</li>
              </ul>
            </div>
            <div className="col-lg-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {modal && <LeadFormModal type={modal.type} prefill={{ city }} onClose={close} />}
    </>
  );
};

export default EventPageDetails;
