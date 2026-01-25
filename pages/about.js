import Head from "next/head";
import Image from "next/image";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import InnerPageBanner from "@/src/components/bannerHome/InnerPageBanner";
import AboutMain from "@/src/components/bannerHome/AboutMain";
import MissionBox from "@/src/components/bannerHome/MissionBox";
import WhoWeServe from "@/src/components/bannerHome/WhoWeServe";
import PastExhibitions from "@/src/components/bannerHome/PastExhibitions";
import TeamSection from "@/src/components/bannerHome/TeamSection";
import ExhibitionGallery from "@/src/components/bannerHome/ExhibitionGallery";

export default function About() {
  const pageTitle = "About Us - PharmmaEx 2026";
  const pageDescription =
    "Learn about PharmmaEx 2026 — our mission, vision, and the people behind India's premier pharmaceutical exhibition at the Coimbatore, Tamil Nadu";
  const pageUrl = "https://pharmmaex.com/about";
  const pageImage = "https://pharmmaex.com/assets/img/aboutBanner.svg";

  return (
    <>
      <Head>
        <title>About Us - PharmmaEx 2026</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="About PharmmaEx, Pharma exhibition Coimbatore, Pharmaceutical event India, Healthcare expo 2026"
        />
        <meta name="author" content="PharmmaEx" />
        <meta name="publisher" content="PharmmaEx" />

        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={pageImage} />

        {/* Canonical */}
        <link rel="canonical" href={pageUrl} />

        {/* Structured Data (About Page Schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              name: "About Us - PharmmaEx 2026",
              description:
                "Learn about PharmmaEx 2026 — our mission, vision, and the people behind India's premier pharmaceutical exhibition at the Coimbatore, Tamil Nadu.",
              url: "https://pharmmaex.com/about",
              publisher: {
                "@type": "Organization",
                name: "PharmmaEx",
                logo: "https://pharmmaex.com/assets/img/PharmmaEx-updated-logo.svg",
              },
              image: "https://pharmmaex.com/assets/img/aboutBanner.svg",
              mainEntity: {
                "@type": "Organization",
                name: "PharmmaEx",
                description:
                  "PharmmaEx is India's leading pharmaceutical exhibition, connecting innovators, healthcare professionals, and industry leaders.",
                url: "https://pharmmaex.com",
              },
            }),
          }}
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <InnerPageBanner
        pageName="Who we are"
        bgImage="/assests/img/aboutBanner.svg"
      />
      <AboutMain />
      <MissionBox />
      <WhoWeServe />
      <PastExhibitions />
      <TeamSection />
      <ExhibitionGallery />
      <Footer />
    </>
  );
}
