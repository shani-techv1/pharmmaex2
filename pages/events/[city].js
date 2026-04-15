import Head from "next/head";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import WhatsAppFloat from "@/src/components/phase1/WhatsAppFloat";
import CityEventPage from "@/src/components/phase2/CityEventPage";
import { CITY_EVENTS, getCityEvent } from "@/src/data/cityEvents";

const SITE_URL = "https://pharmmaex.com";

export async function getStaticPaths() {
  return {
    paths: Object.keys(CITY_EVENTS).map((city) => ({ params: { city } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const event = getCityEvent(params.city);
  if (!event) return { notFound: true };
  return { props: { event } };
}

export default function CityEventLanding({ event }) {
  const pageTitle = `${event.headline} | PharmmaEx`;
  const pageDescription = event.intro;
  const pageUrl = `${SITE_URL}/events/${event.slug}`;
  const pageImage = `${SITE_URL}${event.heroImage}`;

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `PharmmaEx ${event.city} ${event.status === "upcoming" ? "2026" : ""}`.trim(),
    description: event.intro,
    image: [pageImage],
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus:
      event.status === "upcoming"
        ? "https://schema.org/EventScheduled"
        : "https://schema.org/EventCompleted",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.venue,
      address: {
        "@type": "PostalAddress",
        streetAddress: event.venue,
        addressLocality: event.city,
        addressRegion: event.state,
        postalCode: event.postalCode,
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "PharmmaEx",
      url: SITE_URL,
    },
    offers:
      event.status === "upcoming"
        ? {
            "@type": "Offer",
            url: `${SITE_URL}/exhibitor`,
            price: "0",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            validFrom: event.startDate,
            category: "Free visitor entry with pre-registration",
          }
        : undefined,
    url: pageUrl,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Events", item: `${SITE_URL}/up-coming` },
      { "@type": "ListItem", position: 3, name: `PharmmaEx ${event.city}`, item: pageUrl },
    ],
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={event.keywords.join(", ")} />
        <meta name="author" content="PharmmaEx" />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="event" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={pageImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <CityEventPage event={event} />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
