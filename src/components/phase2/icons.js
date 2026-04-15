// Shared inline SVG icon set for Phase 2 SEO pages.
// Stroke-based, consistent style. Use these in place of any emoji.

import React from "react";

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

export const CalendarIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <rect x="3" y="4" width="18" height="18" rx="2.5" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export const PinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const BuildingIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <rect x="4" y="2" width="16" height="20" rx="1" />
    <path d="M9 22v-4h6v4" />
    <line x1="8" y1="6" x2="8" y2="6" />
    <line x1="12" y1="6" x2="12" y2="6" />
    <line x1="16" y1="6" x2="16" y2="6" />
    <line x1="8" y1="10" x2="8" y2="10" />
    <line x1="12" y1="10" x2="12" y2="10" />
    <line x1="16" y1="10" x2="16" y2="10" />
    <line x1="8" y1="14" x2="8" y2="14" />
    <line x1="12" y1="14" x2="12" y2="14" />
    <line x1="16" y1="14" x2="16" y2="14" />
  </svg>
);

export const MapIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
    <line x1="8" y1="2" x2="8" y2="18" />
    <line x1="16" y1="6" x2="16" y2="22" />
  </svg>
);

export const TicketIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z" />
    <path d="M13 7v2M13 13v2M13 19v-2" />
  </svg>
);

export const CameraIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

export const ClockIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const StarIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const ArrowRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps} strokeWidth={1.8}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const ArrowUpRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps} strokeWidth={1.8}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export const CheckIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps} strokeWidth={2}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const BookOpenIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

export const TagIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

// ===== Category-specific icons =====
export const PillIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <path d="M10.5 20.5L20.5 10.5a4.95 4.95 0 0 0-7-7L3.5 13.5a4.95 4.95 0 0 0 7 7z" />
    <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
  </svg>
);

export const FactoryIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <path d="M2 20h20" />
    <path d="M4 20V9l5 3V9l5 3V9l5 3v8" />
    <path d="M9 20v-4M14 20v-4" />
  </svg>
);

export const LeafIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <path d="M11 20A7 7 0 0 1 4 13c0-4 3-7 7-7 4 0 7 3 7 7 0 1.5-.5 3-1 4" />
    <path d="M11 20c0-3 1-7 6-9" />
  </svg>
);

export const SparkleIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M5 19l4-4M15 9l4-4" />
  </svg>
);

export const DropletIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.32 0z" />
  </svg>
);

export const StethoscopeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <path d="M4 5v6a4 4 0 0 0 4 4h0a4 4 0 0 0 4-4V5" />
    <line x1="4" y1="5" x2="4" y2="5" />
    <line x1="12" y1="5" x2="12" y2="5" />
    <path d="M12 15v3a3 3 0 0 0 6 0v-2" />
    <circle cx="18" cy="13" r="2" />
  </svg>
);

export const HeartPulseIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    <polyline points="3.5 12 8 12 10 8 14 16 16 12 20.5 12" />
  </svg>
);

export const BoxIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

// Map slug → icon component
export const CATEGORY_ICONS = {
  "pcd-pharma-franchise": PillIcon,
  "third-party-manufacturing": FactoryIcon,
  "ayurvedic-herbal": LeafIcon,
  "nutraceuticals-wellness": SparkleIcon,
  "cosmetics-cosmeceuticals": DropletIcon,
  "surgical-medical-devices": StethoscopeIcon,
  "veterinary-pharma": HeartPulseIcon,
  "packaging-machinery": BoxIcon,
};

export const getCategoryIcon = (slug) => CATEGORY_ICONS[slug] || PillIcon;
