import Head from "next/head";
import Image from "next/image";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import InnerPageBanner from "@/src/components/bannerHome/InnerPageBanner";
import ExhibitionGallery from "@/src/components/bannerHome/ExhibitionGallery";
import ExhibitorRegistrationPage from "@/src/components/bannerHome/ExhibitorRegistrationPage";

const Exhibitor = () => {
  const pageTitle = "Exhibitor Registration | PharmmaEx 2026";
  const pageDescription =
    "Register as an exhibitor for PharmmaEx 2026 at Kolkata, West Bengal. Showcase your products and services to top pharmaceutical industry professionals.";
  const pageUrl = "https://pharmmaex.com/exhibitor-registration";
  const pageImage = "https://pharmmaex.com/assets/img/exhibitor-banner.jpg"; // Replace with actual image URL
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="pharma exhibition exhibitor registration, Kolkata pharma expo, exhibit pharma products, pharmaceutical trade show India"
        />
        <meta name="author" content="PharmmaEx" />
        <meta name="publisher" content="PharmmaEx" />

        {/* Open Graph Meta */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />

        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />

        {/* Structured Data - Event + Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "PharmmaEx 2026",
              startDate: "2026-10-03T09:00:00+05:30",
              endDate: "2026-10-04T18:00:00+05:30",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              location: {
                "@type": "Place",
                name: "Biswa Bangla Exhibition Centre",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Biswa Bangla Exhibition Centre, New Town, Kolkata, West Bengal",
                  addressLocality: "Kolkata",
                  addressRegion: "West Bengal",
                  postalCode: "700156",
                  addressCountry: "India",
                },
              },
              image: [pageImage],
              description: pageDescription,
              organizer: {
                "@type": "Organization",
                name: "PharmmaEx",
                url: "https://pharmmaex.com",
              },
              offers: {
                "@type": "Offer",
                url: pageUrl,
                price: "0",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                validFrom: "2026-01-01T00:00:00+05:30",
              },
            }),
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <InnerPageBanner
        pageName="Exhibitor Registration Form"
        bgImage="/assests/img/exbg.svg"
      />
      <ExhibitorRegistrationPage />
      <ExhibitionGallery />
      <Footer />
    </>
  );
};

export default Exhibitor;
