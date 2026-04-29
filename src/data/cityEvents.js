// City-based event data — uses REAL PharmmaEx event history.
// Source of truth: src/components/bannerHome/ExhibitionSeries.js + PastExhibitions.js
// Each entry powers /events/[city] and JSON-LD Event schema.

export const CITY_EVENTS = {
  // ============ UPCOMING ============
  kolkata: {
    slug: "kolkata",
    city: "Kolkata",
    state: "West Bengal",
    edition: "Flagship Edition 2026",
    status: "upcoming",
    date: "3 - 4 July, 2026",
    startDate: "2026-07-03T09:00:00+05:30",
    endDate: "2026-07-04T18:00:00+05:30",
    venue: "Biswa Bangla Exhibition Centre",
    address: "Biswa Bangla Exhibition Centre, New Town, Kolkata, West Bengal 700156",
    locality: "New Town",
    postalCode: "700156",
    heroImage: "/Kolkata.webp",
    bannerImage: "/assests/img/sponserbanner.png",
    floorPlanPdf: "/assests/pdf/kolkataLayout.pdf",
    galleryHref: "/gallery/hyderabad",
    expectedExhibitors: "300+",
    expectedVisitors: "15,000+",
    headline:
      "PharmmaEx Kolkata 2026 — East India's Largest Pharma Franchise & Manufacturing Expo",
    intro:
      "PharmmaEx returns to East India with its 2026 flagship edition at the Biswa Bangla Exhibition Centre, Kolkata. Two days of direct franchise deals, third-party manufacturing tie-ups and on-spot order booking with 300+ verified pharma brands.",
    keywords: [
      "pharma expo Kolkata",
      "PCD pharma franchise Kolkata",
      "pharma exhibition West Bengal",
      "pharma trade show Kolkata 2026",
      "Biswa Bangla pharma event",
      "pharma franchise expo East India",
    ],
    highlights: [
      "300+ verified PCD pharma franchise & manufacturing brands",
      "15,000+ doctors, distributors, chemists & franchise buyers",
      "On-spot deal closures with monopoly franchise opportunities",
      "Live product launches and CME-style knowledge sessions",
      "Lead reports delivered to every exhibitor within 7 days",
    ],
    whyAttend: [
      {
        title: "Discover 300+ Brands",
        body: "Compare allopathic, ayurvedic, cosmetic and herbal franchise opportunities side-by-side.",
      },
      {
        title: "Negotiate Monopoly Rights",
        body: "Meet decision-makers and lock in district or state-wise PCD franchise rights on the spot.",
      },
      {
        title: "Sample Third-Party Manufacturing",
        body: "Audit GMP-certified contract manufacturers and request product samples directly.",
      },
      {
        title: "Free Visitor Entry",
        body: "Pre-register online to skip the queue. 100% complimentary access with verified buyer badge.",
      },
    ],
    audience: [
      "Doctors, clinicians and hospital purchase managers",
      "Retail and wholesale chemists",
      "Distributors and stockists looking for monopoly products",
      "Aspiring PCD pharma franchise entrepreneurs (Tier 1-3 cities)",
      "Hospital procurement teams and group purchase officers",
      "Investors entering the pharma manufacturing & distribution space",
    ],
  },

  // ============ PAST EDITIONS (real data) ============
  coimbatore: {
    slug: "coimbatore",
    city: "Coimbatore",
    state: "Tamil Nadu",
    edition: "Tamil Nadu Edition 2026",
    status: "past",
    date: "20 - 21 February, 2026",
    startDate: "2026-02-20T09:00:00+05:30",
    endDate: "2026-02-21T18:00:00+05:30",
    venue: "Codissia Trade Fair Complex",
    address: "Codissia Trade Fair Complex, Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu 641004",
    locality: "Peelamedu",
    postalCode: "641004",
    heroImage: "/assests/img/entryplaza.jpg",
    bannerImage: "/assests/img/sponserbanner.png",
    floorPlanPdf: "/assests/pdf/kolkataLayout.pdf",
    galleryHref: "/gallery/coimbatore",
    expectedExhibitors: "230+",
    expectedVisitors: "11,000+",
    headline:
      "PharmmaEx Coimbatore 2026 — Tamil Nadu's Pharma Franchise & Manufacturing Edition",
    intro:
      "Held on 20–21 February 2026 at the Codissia Trade Fair Complex, the PharmmaEx Coimbatore edition brought 230+ pharma brands face-to-face with doctors, distributors and franchise buyers from across Tamil Nadu and Kerala.",
    keywords: [
      "pharma expo Coimbatore",
      "PCD pharma franchise Tamil Nadu",
      "pharma exhibition Coimbatore",
      "Codissia pharma event",
      "Tamil Nadu pharma trade show",
    ],
    highlights: [
      "230+ pharma franchise & manufacturing exhibitors",
      "11,000+ verified buyers from Tamil Nadu & Kerala",
      "Dedicated ayurvedic, siddha and herbal pavilion",
      "Live tablet, capsule and syrup manufacturing demos",
    ],
    whyAttend: [
      {
        title: "Photo Gallery",
        body: "Browse the complete Coimbatore 2026 photo album.",
      },
      {
        title: "Past Exhibitor List",
        body: "Request the list of brands that exhibited at Coimbatore 2026.",
      },
      {
        title: "Notify Me — Next Edition",
        body: "Be the first to know when PharmmaEx returns to Coimbatore.",
      },
    ],
    audience: [
      "Past exhibitors and visitors",
      "Tamil Nadu and Kerala distributors",
      "Doctors and hospital purchase managers",
      "Ayurvedic and siddha product distributors",
    ],
  },

  mumbai: {
    slug: "mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    edition: "West India Edition 2025",
    status: "past",
    date: "3 - 4 October, 2025",
    startDate: "2025-10-03T09:00:00+05:30",
    endDate: "2025-10-04T18:00:00+05:30",
    venue: "Bombay Exhibition Centre",
    address: "Bombay Exhibition Centre, Western Express Highway, Goregaon East, Mumbai 400063",
    locality: "Goregaon East",
    postalCode: "400063",
    heroImage: "/assests/img/image58.svg",
    bannerImage: "/assests/img/sponserbanner.png",
    floorPlanPdf: "/assests/pdf/kolkataLayout.pdf",
    galleryHref: "/gallery/mumbai",
    expectedExhibitors: "350+",
    expectedVisitors: "12,000+",
    headline:
      "PharmmaEx Mumbai 2025 — Recap of West India's Biggest Pharma Franchise Expo",
    intro:
      "Held on 3–4 October 2025 at the Bombay Exhibition Centre, PharmmaEx Mumbai 2025 was a milestone edition with 350+ exhibitors, 12,000+ verified visitors and a packed two-day schedule of franchise deals and on-spot orders.",
    keywords: [
      "pharma expo Mumbai",
      "PCD pharma franchise Mumbai",
      "pharma exhibition Maharashtra",
      "Bombay Exhibition Centre pharma",
      "Mumbai pharma trade show 2025",
    ],
    highlights: [
      "350+ Brands Showcased across allopathic, ayurvedic, cosmetic and herbal",
      "12,000+ verified footfall in two days",
      "Largest dedicated PCD pharma networking lounges",
      "120+ on-spot franchise deals signed",
    ],
    whyAttend: [
      {
        title: "Recap & Highlights",
        body: "Browse the full photo gallery and watch the official aftermovie of Mumbai 2025.",
      },
      {
        title: "Exhibitor List",
        body: "Download the complete list of 350+ brands that exhibited at Mumbai 2025.",
      },
      {
        title: "Notify Me — Mumbai 2026",
        body: "Be first in line when Mumbai 2026 stall booking opens. Register your interest today.",
      },
    ],
    audience: [
      "Past exhibitors and visitors",
      "Brands evaluating Mumbai 2026",
      "Distributors looking for past exhibitor contact lists",
      "Researchers and journalists tracking the pharma franchise space",
    ],
  },

  hyderabad: {
    slug: "hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    edition: "South India Edition 2025",
    status: "past",
    date: "2 - 3 May, 2025",
    startDate: "2025-05-02T09:00:00+05:30",
    endDate: "2025-05-03T18:00:00+05:30",
    venue: "HITEX Exhibition Centre",
    address: "HITEX Exhibition Centre, Izzathnagar, Kothaguda, Hyderabad, Telangana 500084",
    locality: "Kothaguda",
    postalCode: "500084",
    heroImage: "/assests/img/image1.webp",
    bannerImage: "/assests/img/sponserbanner.png",
    floorPlanPdf: "/assests/pdf/kolkataLayout.pdf",
    galleryHref: "/gallery/hyderabad",
    expectedExhibitors: "250+",
    expectedVisitors: "10,000+",
    headline:
      "PharmmaEx Hyderabad 2025 — South India's Premier Pharma Franchise Edition",
    intro:
      "Held on 2–3 May 2025 at the HITEX Exhibition Centre, PharmmaEx Hyderabad 2025 brought 250+ pharma manufacturers and PCD franchise companies face-to-face with doctors, distributors and hospital buyers from Telangana, Andhra Pradesh, Karnataka and Tamil Nadu.",
    keywords: [
      "pharma expo Hyderabad",
      "PCD pharma franchise Hyderabad",
      "pharma exhibition Telangana",
      "south India pharma trade show",
      "HITEX pharma event",
      "third party manufacturing Hyderabad",
    ],
    highlights: [
      "250+ pharma franchise & contract manufacturing brands",
      "10,000+ verified buyers across South India",
      "Bulk drug, API and formulation manufacturers in one hall",
      "Dedicated pavilions for ayurvedic, nutraceuticals and cosmeceuticals",
    ],
    whyAttend: [
      {
        title: "Photo Gallery",
        body: "Browse the complete Hyderabad 2025 album with hundreds of event photos.",
      },
      {
        title: "Past Exhibitor List",
        body: "Request the list of 250+ brands that exhibited at Hyderabad 2025.",
      },
      {
        title: "Notify Me — Next Edition",
        body: "Get notified when PharmmaEx returns to Hyderabad.",
      },
    ],
    audience: [
      "Past exhibitors and visitors",
      "PCD entrepreneurs targeting Telangana, AP, Karnataka, Tamil Nadu, Kerala",
      "Bulk drug and API buyers",
      "Hospital and medical college purchase officers",
      "Distributors expanding their product basket",
    ],
  },

  ahmedabad: {
    slug: "ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    edition: "West India Edition 2024",
    status: "past",
    date: "14 - 15 December, 2024",
    startDate: "2024-12-14T09:00:00+05:30",
    endDate: "2024-12-15T18:00:00+05:30",
    venue: "Vigyan Bhawan, Science City",
    address: "Vigyan Bhawan, Science City, Sola, Ahmedabad, Gujarat 380060",
    locality: "Sola",
    postalCode: "380060",
    heroImage: "/assests/img/image2.webp",
    bannerImage: "/assests/img/sponserbanner.png",
    floorPlanPdf: "/assests/pdf/kolkataLayout.pdf",
    galleryHref: "/gallery/ahmedabad",
    expectedExhibitors: "280+",
    expectedVisitors: "11,500+",
    headline:
      "PharmmaEx Ahmedabad 2024 — Gujarat's Leading Pharma Franchise & Manufacturing Edition",
    intro:
      "Held on 14–15 December 2024 at Vigyan Bhawan, Science City, the PharmmaEx Ahmedabad edition put 280+ exhibitors face-to-face with 11,500+ franchise buyers, distributors and hospital purchase teams from across western India.",
    keywords: [
      "pharma expo Ahmedabad",
      "PCD pharma franchise Gujarat",
      "pharma exhibition Ahmedabad",
      "Gujarat pharma trade show",
      "Vigyan Bhawan Science City pharma event",
      "third party manufacturing Gujarat",
    ],
    highlights: [
      "280+ Gujarat-headquartered pharma & nutraceutical brands",
      "11,500+ verified buyers from Gujarat, Maharashtra, MP, Rajasthan",
      "Dedicated halls for veterinary, ayurvedic and herbal segments",
      "Direct meetings with WHO-GMP certified manufacturers",
    ],
    whyAttend: [
      {
        title: "Photo Gallery",
        body: "Browse the complete Ahmedabad 2024 photo album.",
      },
      {
        title: "Past Exhibitor List",
        body: "Request the list of 280+ brands that exhibited at Ahmedabad 2024.",
      },
      {
        title: "Notify Me — Next Edition",
        body: "Get notified when PharmmaEx returns to Ahmedabad.",
      },
    ],
    audience: [
      "Past exhibitors and visitors",
      "Exporters and merchant exporters",
      "PCD franchise buyers from Gujarat, Maharashtra, MP, Rajasthan",
      "Veterinary distributors and dealers",
      "Ayurvedic and herbal product distributors",
    ],
  },

  pune: {
    slug: "pune",
    city: "Pune",
    state: "Maharashtra",
    edition: "Maharashtra Edition 2024",
    status: "past",
    date: "21 - 22 June, 2024",
    startDate: "2024-06-21T09:00:00+05:30",
    endDate: "2024-06-22T18:00:00+05:30",
    venue: "Auto Cluster Exhibition Centre, Chinchwad",
    address: "Auto Cluster Exhibition Centre, H Block, MIDC, Chinchwad, Pune 411019",
    locality: "Chinchwad",
    postalCode: "411019",
    heroImage: "/assests/img/image3.webp",
    bannerImage: "/assests/img/sponserbanner.png",
    floorPlanPdf: "/assests/pdf/kolkataLayout.pdf",
    galleryHref: "/gallery/pune",
    expectedExhibitors: "220+",
    expectedVisitors: "9,500+",
    headline:
      "PharmmaEx Pune 2024 — Maharashtra Pharma Franchise Edition Recap",
    intro:
      "Held on 21–22 June 2024 at the Auto Cluster Exhibition Centre, Chinchwad, PharmmaEx Pune 2024 brought 220+ exhibitors and 9,500+ verified buyers together for two days of franchise deals, contract manufacturing tie-ups and product launches.",
    keywords: [
      "pharma expo Pune",
      "PCD pharma Pune",
      "pharma exhibition Pune 2024",
      "Auto Cluster Chinchwad pharma event",
      "Maharashtra pharma trade show",
    ],
    highlights: [
      "220+ exhibiting brands",
      "9,500+ verified visitors",
      "65+ on-spot franchise agreements",
      "Live demos from packaging and machinery suppliers",
    ],
    whyAttend: [
      {
        title: "Photo Gallery",
        body: "Relive Pune 2024 — exhibitor booths, knowledge sessions and award nights.",
      },
      {
        title: "Past Exhibitor List",
        body: "Request the list of brands that exhibited at Pune 2024.",
      },
      {
        title: "Notify Me — Next Edition",
        body: "Get notified when PharmmaEx returns to Pune.",
      },
    ],
    audience: [
      "Past exhibitors and visitors",
      "Pune-based distributors and PCD buyers",
      "Maharashtra hospital purchase teams",
    ],
  },

  bangalore: {
    slug: "bangalore",
    city: "Bangalore",
    state: "Karnataka",
    edition: "South India Edition 2024",
    status: "past",
    date: "2 - 3 February, 2024",
    startDate: "2024-02-02T09:00:00+05:30",
    endDate: "2024-02-03T18:00:00+05:30",
    venue: "Manpho Convention Centre",
    address: "Manpho Convention Centre, Nagavara, Bangalore, Karnataka 560045",
    locality: "Nagavara",
    postalCode: "560045",
    heroImage: "/assests/img/manpho.jpg",
    bannerImage: "/assests/img/sponserbanner.png",
    floorPlanPdf: "/assests/pdf/kolkataLayout.pdf",
    galleryHref: "/gallery/bangalore",
    expectedExhibitors: "200+",
    expectedVisitors: "9,000+",
    headline:
      "PharmmaEx Bangalore 2024 — South India Pharma Franchise Edition Recap",
    intro:
      "Held on 2–3 February 2024 at the Manpho Convention Centre, Bangalore, PharmmaEx Bangalore 2024 connected 200+ pharma franchise and contract manufacturing brands with 9,000+ doctors, chemists and distributors from Karnataka, Kerala and Tamil Nadu.",
    keywords: [
      "pharma expo Bangalore",
      "PCD pharma franchise Bangalore",
      "pharma exhibition Karnataka",
      "Manpho Convention Centre pharma event",
      "south India pharma trade show 2024",
    ],
    highlights: [
      "200+ exhibitors across 9 product categories",
      "9,000+ verified buyers from south India",
      "Dedicated nutraceuticals and wellness pavilion",
      "Strong presence of PCD franchise companies",
    ],
    whyAttend: [
      {
        title: "Photo Gallery",
        body: "Browse the complete Bangalore 2024 photo album.",
      },
      {
        title: "Past Exhibitor List",
        body: "Request the list of brands that exhibited at Bangalore 2024.",
      },
      {
        title: "Notify Me — Next Edition",
        body: "Get notified when PharmmaEx returns to Bangalore.",
      },
    ],
    audience: [
      "Past exhibitors and visitors",
      "Karnataka and Kerala distributors",
      "South India hospital purchase teams",
    ],
  },
};

export const CITY_LIST = Object.values(CITY_EVENTS);

export const UPCOMING_CITIES = CITY_LIST.filter((c) => c.status === "upcoming");
export const PAST_CITIES = CITY_LIST.filter((c) => c.status === "past");

export function getCityEvent(slug) {
  return CITY_EVENTS[slug] || null;
}
