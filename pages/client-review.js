import Head from "next/head";
import Image from "next/image";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import InnerPageBanner from "@/src/components/bannerHome/InnerPageBanner";
import ClientTestimonials from "@/src/components/bannerHome/ClientTestimonials";
export default function ClientReview() {
  const pageTitle = "PharmmaEx Client Reviews & Testimonials";
  const pageDescription =
    "Read authentic client reviews and testimonials for PharmmaEx, showcasing trust, satisfaction, and successful partnerships in the pharmaceutical industry.";
  const pageUrl = "https://pharmmaex.com/client-review";
  const pageImage = "https://pharmmaex.com/assets/img/review-banner.jpg"; // Replace with actual image path
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="PharmmaEx reviews, client testimonials, pharma exhibition feedback, customer experiences, pharmaceutical networking reviews"
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

        {/* Structured Data - Review Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Review",
              itemReviewed: {
                "@type": "Organization",
                name: "PharmmaEx",
                url: "https://pharmmaex.com",
                logo: "https://pharmmaex.com/favicon.ico",
                sameAs: [
                  "https://www.facebook.com/pharmmaex",
                  "https://www.linkedin.com/company/pharmmaex",
                  "https://www.instagram.com/pharmmaex",
                ],
              },
              author: {
                "@type": "Person",
                name: "Multiple Clients",
              },
              reviewRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "152",
              },
              reviewBody:
                "PharmmaEx consistently receives outstanding feedback for its professionalism, networking opportunities, and high-quality pharmaceutical exhibitions.",
              publisher: {
                "@type": "Organization",
                name: "PharmmaEx",
              },
            }),
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <InnerPageBanner
        pageName="Reviews"
        bgImage="/assests/img/reviewBanner.svg"
      />
      <ClientTestimonials />
      <Footer />
    </>
  );
}
