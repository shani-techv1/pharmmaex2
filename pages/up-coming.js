import Head from "next/head";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import InnerPageBanner from "@/src/components/bannerHome/InnerPageBanner";
import React from "react";
import styles from "@/styles/Upcoming.module.css";
import Image from "next/image";

const Upcoming = () => {
  const eventName = "PharmmaEx 2026 - Coimbatore, Tamil Nadu";
  const eventDescription =
    "Join PharmmaEx 2026 on 20–21 February at Coimbatore, to explore pharmaceutical innovations, cutting-edge technologies, and key networking opportunities with industry leaders.";
  const eventImage =
    "https://pharmmaex.com/assets/img/pharmmaex-event-bombay-exhibition-centre.webp";
  const eventUrl = "https://pharmmaex.com/up-coming";
  const startDate = "2026-02-20T09:00:00+05:30";
  const endDate = "2026-02-21T18:00:00+05:30";

  return (
    <>
      <Head>
        <title>Upcoming Pharma Exhibition In India</title>
        <meta
          name="keywords"
          content="PharmmaEx 2026, Coimbatore, Tamil Nadu pharma exhibition, Codissia Trade Fair Complex event, pharmaceutical networking Coimbatore, pharma technology India, healthcare business expo"
        />
        <meta name="author" content="PharmmaEx" />
        <meta name="publisher" content="PharmmaEx" />

        <meta property="og:title" content={eventName} />
        <meta property="og:description" content={eventDescription} />
        <meta property="og:type" content="event" />
        <meta property="og:url" content={eventUrl} />
        <meta property="og:image" content={eventImage} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={eventName} />
        <meta name="twitter:description" content={eventDescription} />
        <meta name="twitter:image" content={eventImage} />
        {/* Canonical URL */}
        <link rel="canonical" href={eventUrl} />

        {/* Structured Data - Event Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: eventName,
              startDate: startDate,
              endDate: endDate,
              description: eventDescription,
              image: eventImage,
              url: "https://pharmmaex.com/up-coming",
              location: {
                "@type": "Place",
                name: "Codissia Trade Fair Complex",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Avinashi Road, Peelamedu",
                  addressLocality: "Coimbatore",
                  addressRegion: "Tamil Nadu",
                  postalCode: "641014",
                  addressCountry: "India",
                },
              },
              organizer: {
                "@type": "Organization",
                name: "PharmmaEx",
                url: "https://pharmmaex.com",
              },
            }),
          }}
        />

        <meta name="description" content="PharmmaEx Visitor Registration" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <InnerPageBanner
        pageName="Upcoming Events"
        bgImage="/assests/img/sponserbanner.png"
      />

      <h1 className={styles.heading}>
        Our Upcoming <span className={styles.greenText}>Exhibhition</span>
      </h1>

      <div className={styles.imageContainer}>
        <Image
          src="/assests/img/entryplaza.jpg"
          alt="PharmmaEx Event"
          className={styles.image}
          width={1000}
          height={600}
        />
      </div>

      <div className={styles.buttonGroup}>
        {/* <a
          href="/assests/pdf/PharmmaEx-Floor-Plan-mumbai.pdf"
          className="btn btn-success about-home-btn "
          download
        >
          Download Floor Plan
        </a>
        <a
          href="/assests/pdf/pharmmaex-mumbai-Brochure-2026 (1).pdf"
          className="btn btn-outline-success about-home-btn"
          download
        >
          Download Brochure
        </a> */}
        <a
          href="/assests/pdf/Floor_Plan_11x17.pdf"
          className="btn btn-success about-home-btn"
        >
          Download Floor Plan
        </a>
        <a
          href="/assests/pdf/Brochure-coimbatore.pdf"
          className="btn btn-outline-success about-home-btn"
        >
          Download Brochure
        </a>
      </div>

      <div className={styles.eventContainer}>
        <div className={styles.eventBox}>
          <div className={styles.eventItem}>
            <span className={styles.eventIcon}>📅</span>
            <div className={styles.eventTextBox}>
              <div className={styles.eventTitle}>20-21 February, 2026</div>
              <div className={styles.eventSub}>(Friday,Saturday)</div>
            </div>
          </div>

          <div className={styles.eventItem}>
            <span className={styles.eventIcon}>📍</span>
            <div className={styles.eventTextBox}>
              <div className={styles.eventTitle}>
                Codissia Trade Fair Complex
              </div>
              <div className={styles.eventSub}>Coimbatore, Tamil Nadu</div>
            </div>
          </div>

          <div className={styles.eventItem}>
            <span className={styles.eventIcon}>⏰</span>
            <div className={styles.eventTextBox}>
              <div className={styles.eventTitle}>10:00 AM – 06:00 PM</div>
              <div className={styles.eventSub}>Business Hours</div>
            </div>
          </div>
        </div>

        <div className={styles.registerBtnWrapper}>
          <a
            href="https://www.pharmmaexregistration.in/Pharmaex/visitor.aspx"
            className={styles.registerBtn}
          >
            Registration Open!
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Upcoming;
