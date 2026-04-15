import React, { useEffect, useState } from "react";
import styles from "./Phase1.module.css";

const FORM_META = {
  stall: {
    title: "Book Your Stall",
    sub: "Reserve your spot at India's leading pharma expo. Our team will confirm availability within 24 hours.",
    cta: "Submit & Reserve",
    fields: ["name", "company", "phone", "email", "city", "stallSize"],
    storageKey: "pharmmaex_book_stall",
  },
  brochure: {
    title: "Download Brochure",
    sub: "Get the full PharmmaEx 2026 brochure — pricing, floor plans, exhibitor list and more.",
    cta: "Download Brochure",
    fields: ["name", "company", "phone", "email"],
    storageKey: "pharmmaex_brochure",
    optional: true,
    downloadUrl: "https://agiledigitaledge.dev/pharmmaex/Brochure-kolkata.pdf",
  },
  callback: {
    title: "Request a Callback",
    sub: "Leave your details and our team will call you back within 1 business hour.",
    cta: "Request Callback",
    fields: ["name", "phone", "preferredTime"],
    storageKey: "pharmmaex_callback",
  },
};

const LABELS = {
  name: "Full Name",
  company: "Company Name",
  phone: "Phone Number",
  email: "Email Address",
  city: "Preferred City",
  stallSize: "Stall Size (sq.m)",
  preferredTime: "Best Time to Call",
};

const PLACEHOLDERS = {
  name: "Rajesh Kumar",
  company: "ABC Pharma Pvt. Ltd.",
  phone: "+91 98765 43210",
  email: "you@company.com",
  city: "Kolkata",
  stallSize: "9 sq.m / 18 sq.m / Custom",
  preferredTime: "e.g. Today 4 PM",
};

const validate = (fields, data, optional = false) => {
  const errors = {};
  fields.forEach((f) => {
    const v = (data[f] || "").trim();
    if (!v) {
      if (!optional) errors[f] = "Required";
      return;
    }
    if (f === "phone" && !/^[+\d][\d\s-]{8,}$/.test(v)) errors[f] = "Enter a valid phone";
    else if (f === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) errors[f] = "Enter a valid email";
  });
  return errors;
};

const LeadFormModal = ({ type, prefill, onClose }) => {
  const meta = FORM_META[type];
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefill && prefill.city) setData((d) => ({ ...d, city: prefill.city }));
  }, [prefill]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!meta) return null;

  const handleChange = (f) => (e) => {
    setData({ ...data, [f]: e.target.value });
    if (errors[f]) setErrors({ ...errors, [f]: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(meta.fields, data, meta.optional);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    try {
      const utm = JSON.parse(localStorage.getItem("pharmmaex_utm") || "{}");
      const list = JSON.parse(localStorage.getItem(meta.storageKey) || "[]");
      list.push({ ...data, type, ts: new Date().toISOString(), ...utm });
      localStorage.setItem(meta.storageKey, JSON.stringify(list));
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead", { content_name: type });
      }
    } catch {}
    if (meta.downloadUrl) {
      const fileName = meta.downloadUrl.split("/").pop() || "brochure.pdf";
      fetch(meta.downloadUrl)
        .then((r) => r.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url);
        })
        .catch(() => {
          window.open(meta.downloadUrl, "_blank", "noopener,noreferrer");
        });
    }
    setSubmitted(true);
  };

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose} aria-label="Close">
          ×
        </button>
        {submitted ? (
          <div className={styles.modalSuccess}>
            <div className={styles.successIcon}>✓</div>
            <h3>Thank You!</h3>
            <p>Your request has been received. Our team will reach out shortly.</p>
            <button className={styles.btnPrimaryLg} onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className={styles.modalTitle}>{meta.title}</h3>
            <p className={styles.modalSub}>{meta.sub}</p>
            <form onSubmit={handleSubmit} noValidate>
              {meta.fields.map((f) => (
                <div key={f} className={styles.formField}>
                  <label htmlFor={`f-${f}`}>{LABELS[f]}</label>
                  <input
                    id={`f-${f}`}
                    type={f === "email" ? "email" : f === "phone" ? "tel" : "text"}
                    placeholder={PLACEHOLDERS[f]}
                    value={data[f] || ""}
                    onChange={handleChange(f)}
                    className={errors[f] ? styles.inputError : ""}
                  />
                  {errors[f] && <span className={styles.errorMsg}>{errors[f]}</span>}
                </div>
              ))}
              <button type="submit" className={styles.btnPrimaryFull}>
                {meta.cta}
              </button>
              <p className={styles.formNote}>
                We respect your privacy. Your details will not be shared with third parties.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadFormModal;
