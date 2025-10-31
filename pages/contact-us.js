import Head from "next/head";
import Image from "next/image";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import InnerPageBanner from "@/src/components/bannerHome/InnerPageBanner";
import ContactUs from "@/src/components/bannerHome/ContactUs";
import ExhibitionQueries from "@/src/components/bannerHome/ExhibitionQueries";
import Ticker from "@/src/components/bannerHome/Ticker";

export default function About() {
  const pageTitle = "Contact Us | PharmmaEx , pharmaceutical exhibition";
  const pageDescription =
    "Get in touch with PharmmaEx for exhibition inquiries, visitor information, and partnership opportunities. Contact us via phone, email, or visit our office.";
  const pageUrl = "https://pharmmaex.com/contact-us";
  const pageImage = "https://pharmmaex.com/assets/img/contactbanner.jpg"; // Replace with actual hosted image
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="PharmmaEx contact, exhibition queries, pharma exhibition Mumbai, pharma networking India, contact pharma expo"
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

        {/* Structured Data - LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "PharmmaEx",
              image: pageImage,
              "@id": pageUrl,
              url: "https://pharmmaex.com",
              telephone: "+91-1234567890", // Replace with actual contact number
              email: "info@pharmmaex.com", // Replace with actual contact email
              address: {
                "@type": "PostalAddress",
                streetAddress: "Western Express Highway, Goregaon (East)",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                postalCode: "400063",
                addressCountry: "IN",
              },
              openingHours: "Mo-Fr 09:00-18:00",
              sameAs: [
                "https://www.facebook.com/pharmmaex",
                "https://www.linkedin.com/company/pharmmaex",
                "https://www.instagram.com/pharmmaex",
              ],
            }),
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <InnerPageBanner
        pageName="Contact-Us"
        bgImage="/assests/img/contactbanner.svg"
      />
      <ContactUs />
      <ExhibitionQueries />
      <Ticker />
      <Footer />
    </>
  );
}
