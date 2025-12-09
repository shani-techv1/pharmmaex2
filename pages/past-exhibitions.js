import Head from "next/head";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import InnerPageBanner from "@/src/components/bannerHome/InnerPageBanner";
import PastExhibitionsSimple from "@/src/components/bannerHome/PastExhibitionsSimple";
export default function PastExhibitions() {
  const pageTitle = "Past Exhibitions | PharmmaEx ,pharmaceutical exhibition";
  const pageDescription =
    "Explore past editions of PharmmaEx and discover highlights, innovations, and milestones from previous pharmaceutical exhibitions,pharmaceutical exhibition";
  const pageUrl = "https://pharmmaex.com/past-exhibitions";
  const pageImage =
    "https://pharmmaex.com/assets/img/past-exhibitions-banner.jpg"; // Replace with actual image URL
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="past pharma exhibitions, previous PharmmaEx events, pharma expo history, pharmaceutical trade shows India"
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
              "@type": "CollectionPage",
              name: "Past Exhibitions - PharmmaEx",
              description: pageDescription,
              url: pageUrl,
              image: pageImage,
              publisher: {
                "@type": "Organization",
                name: "PharmmaEx",
                url: "https://pharmmaex.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://pharmmaex.com/assets/img/logo.png", // Replace with your logo URL
                },
              },
            }),
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <InnerPageBanner
        pageName="Past Exhibitions"
        bgImage="/assests/img/pastExhibitionbanner.svg"
      />
      <PastExhibitionsSimple />
      <Footer />
    </>
  );
}
