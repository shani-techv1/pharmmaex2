import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import InnerPageBanner from "@/src/components/bannerHome/InnerPageBanner";
import { images, locations } from "@/src/components/staticData/galleryData";
const GalleryGrid = dynamic(
  () => import("@/src/components/bannerHome/GalleryGridBox"),
  { ssr: false }
);
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import gstyles from "../../src/components/bannerHome/ExhibitionGallery.module.css";

export async function getServerSideProps(context) {
  const { city } = context.params;
  // You can fetch data based on city here if needed
  return {
    props: {
      city,
    },
  };
}

export default function Gallery({ city: initialCity }) {
  const router = useRouter();
  const [city, setCity] = useState(initialCity);

  useEffect(() => {
    if (router.query.city && router.query.city !== city) {
      setCity(router.query.city);
    }
  }, [router.query.city]);

  const handleTabClick = (e, locId) => {
    e.preventDefault();
    if (locId !== city) {
      router.push(`/gallery/${locId}`);
      setCity(locId);
    }
  };

  // SEO Variables
  const pageTitle = `PharmmaEx Gallery - ${city}`;
  const pageDescription = `Explore the photo gallery of PharmmaEx exhibitions held in ${city}, showcasing highlights, exhibitors, and event moments.`;
  const pageUrl = `https://pharmmaex.com/gallery/${city}`;
  const pageImage = "https://pharmmaex.com/assets/img/gallerybanner.svg";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content={`PharmmaEx ${city} gallery, ${city} pharma exhibition photos, pharmaceutical trade show images, pharma expo highlights ${city}`}
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
              "@type": "ImageGallery",
              name: `PharmmaEx Gallery - ${city}`,
              description: pageDescription,
              url: pageUrl,
              image: pageImage,
              publisher: {
                "@type": "Organization",
                name: "PharmmaEx",
                url: "https://pharmmaex.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://pharmmaex.com/assets/img/logo.png",
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
        pageName={`Gallery`}
        bgIage="/assests/img/gallerybanner.svg"
      />
      <div className={gstyles.gallerySection}>
        <div className="container innerContainer galleryPage">
          <div
            className={gstyles.galleryHeader}
            style={{ justifyContent: "center" }}
          >
            <h2 className={gstyles.heading}>Our Exhibition Photos Gallery</h2>
          </div>
        </div>
        {/* City Tabs */}
        <div
          className="gallerPageButtonGroup"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            margin: "0 0 40px 0",
            overflowX: "auto",
            alignItems: "center",
          }}
        >
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={(e) => handleTabClick(e, loc.id)}
              className="btn btn-outline-light exhibition-series-card-btn mt-2 galery-btn"
              style={{
                background: city === loc.id ? "#00833d" : "none",
                color: city === loc.id ? "#fff" : "#444444",
                border: "1.5px solid",
                borderColor: city === loc.id ? " #00833d" : "#444444",
                borderRadius: 8,
                padding: "8px 20px",
                fontSize: 14,
                transition: "background 0.2s, color 0.2s",
                cursor: city === loc.id ? "default" : "pointer",
                outline: "none",
              }}
              disabled={city === loc.id}
            >
              <span className="me-2">
                <Image
                  src={
                    city === loc.id
                      ? "/assests/img/gaIIcon.svg"
                      : "/assests/img/greengallericon.png"
                  }
                  alt="Gallery Icon"
                  width={100}
                  height={100}
                />
              </span>
              {loc.name}
            </button>
          ))}
        </div>
        <GalleryGrid images={images[city]} />
      </div>
      <Footer />
    </>
  );
}
