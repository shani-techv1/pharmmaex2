import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

import Header from "@/src/components/header/header";

import Footer from "@/src/components/bannerHome/Footer";
import InnerPageBanner from "@/src/components/bannerHome/InnerPageBanner";
import { images, locations } from "@/src/components/staticData/galleryData";
const GalleryGrid = dynamic(() => import("@/src/components/bannerHome/GalleryGridBox"), { ssr: false });
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import gstyles from '../../src/components/bannerHome/ExhibitionGallery.module.css';

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

  return (
    <>
      <Head>
        <title>{`Gallery - ${city}`}</title>
        <meta name="description" content={`Gallery page for ${city}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <InnerPageBanner pageName={`Gallery`} bgIage="/assests/img/aboutBanner.svg" />
      <div className={gstyles.gallerySection}>
      <div className='container innerContainer'>
        <div className={gstyles.galleryHeader} style={{ justifyContent: 'center' }}>
          <h2 className={gstyles.heading}>Our Exhibition Photos Gallery</h2>
        </div>
      </div>
      {/* City Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, margin: '0 0 40px 0' }}>
        {locations.map((loc) => (
          <button
            key={loc.id}
            onClick={(e) => handleTabClick(e, loc.id)}
            className="btn btn-outline-light exhibition-series-card-btn mt-2"
            style={{
              background: city === loc.id ? '#00833d' : 'none',
              color: city === loc.id ? '#fff' : '#444444',
              border: '1.5px solid',
              borderColor: city === loc.id ? ' #00833d' : '#444444',
              borderRadius: 8,
              padding: '8px 20px',
              fontSize: 14,
              transition: 'background 0.2s, color 0.2s',
              cursor: city === loc.id ? 'default' : 'pointer',
              outline: 'none',
            }}
            disabled={city === loc.id}
          >
            <span className="me-2">
              <img src={city === loc.id ? "/assests/img/gaIIcon.svg" : "/assests/img/greengallericon.png"} alt="Gallery Icon" />
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
