import React from "react";
import styles from "./Phase1.module.css";

const WhatsAppFloat = ({ phone = "919258002828", message = "Hi PharmmaEx, I'd like to know about booking a stall." }) => {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.waFloat}
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="#fff">
        <path d="M19.11 17.39c-.28-.14-1.65-.81-1.9-.9-.26-.09-.44-.14-.63.14s-.72.9-.88 1.09-.33.21-.6.07a7.62 7.62 0 0 1-2.24-1.38 8.42 8.42 0 0 1-1.55-1.93c-.16-.28 0-.43.12-.57s.28-.33.42-.49a1.91 1.91 0 0 0 .28-.47.51.51 0 0 0 0-.49c-.07-.14-.63-1.51-.86-2.07s-.46-.47-.63-.48h-.54a1 1 0 0 0-.74.35 3.13 3.13 0 0 0-1 2.32 5.43 5.43 0 0 0 1.13 2.86 12.41 12.41 0 0 0 4.74 4.18 16.66 16.66 0 0 0 1.58.59 3.79 3.79 0 0 0 1.74.11 2.85 2.85 0 0 0 1.87-1.32 2.32 2.32 0 0 0 .16-1.32c-.07-.12-.25-.19-.53-.33zM16 3a13 13 0 0 0-11.1 19.71L3 29l6.46-1.86A13 13 0 1 0 16 3zm0 23.7a10.65 10.65 0 0 1-5.43-1.49l-.39-.23-3.84 1.1 1.12-3.74-.25-.39A10.7 10.7 0 1 1 16 26.7z" />
      </svg>
      <span className={styles.waPulse}></span>
    </a>
  );
};

export default WhatsAppFloat;
