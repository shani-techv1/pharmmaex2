import Head from "next/head";
import Image from "next/image";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import InnerPageBanner from "@/src/components/bannerHome/InnerPageBanner";
import KeySponsorsGrid from "@/src/components/bannerHome/KeySponsorsGrid";

export default function SponsorsAssociation() {
  const pageTitle = "Sponsors & Association - PharmmaEx , pharmaceutical exhibition";
  const pageDescription =
    "Explore the key sponsors and associations supporting PharmmaEx, the leading pharmaceutical exhibition in India.";
  const pageUrl = "https://pharmmaex.com/sponsors-association"; // Update with your actual URL
  const pageImage = "https://pharmmaex.com/assets/img/sponserbanner.png"; // Update with actual path
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="PharmmaEx sponsors, pharma associations, pharmaceutical exhibition partners, event sponsors India"
        />
        <meta name="author" content="PharmmaEx" />
        <meta name="publisher" content="PharmmaEx" />

        {/* Open Graph */}
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

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: pageTitle,
              description: pageDescription,
              url: pageUrl,
              image: pageImage,
              publisher: {
                "@type": "Organization",
                name: "PharmmaEx",
                url: "https://pharmmaex.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://pharmmaex.com/assets/img/logo.png", // Replace with actual logo
                },
              },
            }),
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />

      <InnerPageBanner
        pageName="Sponsors & Association"
        bgImage="/assests/img/sponserbanner.png"
      />
      <KeySponsorsGrid />
      <Footer />
    </>
  );
}
