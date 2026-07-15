import React, { useMemo, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./Phase2.module.css";
import SeoBreadcrumb from "./SeoBreadcrumb";
import SeoCtaBanner from "./SeoCtaBanner";
import { ArrowRight, PinIcon } from "./icons";
import {
  getDistrictRelatedEvents,
  getStateRelatedEvents,
} from "@/src/data/districtLandingData";

const LeadFormModal = dynamic(() => import("@/src/components/phase1/LeadFormModal"), {
  ssr: false,
});

const DISTRICT_MEDIA = {
  kolkata: {
    heroImage: "/Kolkata.webp",
    gallery: [
      "/assests/img/entryplaza.jpg",
      "/assests/img/image1.webp",
      "/assests/img/image2.webp",
    ],
    videos: [
      "https://www.youtube.com/embed/QzsLDlDjMzw",
      "https://www.youtube.com/embed/8RVapflKv6Y",
    ],
  },
};

const DistrictLandingPage = ({ landing }) => {
  const [modal, setModal] = useState(null);

  const districtEvents = useMemo(
    () => getDistrictRelatedEvents(landing),
    [landing]
  );
  const sameStateEvents = useMemo(
    () => getStateRelatedEvents(landing.state, landing.slug),
    [landing]
  );

  const openStall = () => setModal({ type: "stall", prefill: { city: landing.district } });
  const openBrochure = () => setModal({ type: "brochure" });
  const closeModal = () => setModal(null);
  const media = DISTRICT_MEDIA[landing.slug];

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <SeoBreadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: landing.state, href: `/${landing.stateSlug}/${landing.slug}` },
              { label: landing.district },
            ]}
          />
          <div style={{ maxWidth: 860 }}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              {landing.state}
            </span>
            <h1 className={styles.h1}>{landing.h1}</h1>
            <p className={styles.lead}>{landing.subtitle}</p>
          </div>
          {media?.heroImage && (
            <div className={styles.heroImage} style={{ marginTop: "1.2rem" }}>
              <Image
                src={media.heroImage}
                alt={`${landing.district} events and exhibitions`}
                width={1200}
                height={650}
                priority
              />
            </div>
          )}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Local Event Guide
          </span>
          {landing.introSections.map((section) => (
            <article key={section.heading} style={{ marginBottom: "1.5rem" }}>
              <h2 className={styles.h2} style={{ marginBottom: "0.7rem" }}>
                {section.heading}
              </h2>
              <p className={styles.lead} style={{ marginBottom: 0 }}>
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Current Events
          </span>
          <h2 className={styles.h2}>
            Current and upcoming events in{" "}
            <span className={styles.titleAccent}>{landing.district}</span>
          </h2>

          {districtEvents.length > 0 ? (
            <div className={styles.cardGrid}>
              {districtEvents.map((event, idx) => (
                <Link key={event.slug} href={`/events/${event.slug}`} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardNumber}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.cardIcon}>
                      <PinIcon size={17} />
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>
                    {event.city}, {event.state}
                  </h3>
                  <p className={styles.cardBody}>
                    <strong>{event.date}</strong>
                    <br />
                    {event.venue}
                  </p>
                  <div
                    style={{
                      marginTop: "0.4rem",
                      color: "#00833D",
                      fontWeight: 500,
                      fontSize: "0.86rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                    }}
                  >
                    View event details <ArrowRight size={13} />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className={styles.lead}>
              We are updating district-specific event listings. Browse all current editions on our
              events page.
            </p>
          )}
        </div>
      </section>

      {media?.gallery?.length > 0 && (
        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Event Gallery
            </span>
            <h2 className={styles.h2}>
              Visual highlights from{" "}
              <span className={styles.titleAccent}>{landing.district}</span> events
            </h2>
            <div className={styles.cardGrid}>
              {media.gallery.map((img) => (
                <article key={img} className={styles.card}>
                  <div style={{ borderRadius: "14px", overflow: "hidden" }}>
                    <Image
                      src={img}
                      alt={`${landing.district} event highlight`}
                      width={800}
                      height={520}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {media?.videos?.length > 0 && (
        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Video Highlights
            </span>
            <h2 className={styles.h2}>
              Watch exhibitions and business events in{" "}
              <span className={styles.titleAccent}>{landing.district}</span>
            </h2>
            <div className={styles.cardGrid}>
              {media.videos.map((videoUrl) => (
                <article key={videoUrl} className={styles.card}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      paddingBottom: "56.25%",
                      borderRadius: "14px",
                      overflow: "hidden",
                    }}
                  >
                    <iframe
                      src={videoUrl}
                      title={`Event video ${landing.district}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.section}>
        <div className={styles.container}>
          <SeoCtaBanner
            title={`Want to exhibit at events in ${landing.district}?`}
            subtitle={`Book your stall or request the latest brochure to participate in verified business events and trade shows in ${landing.district}, ${landing.state}.`}
            primaryLabel="Book Your Stall"
            primaryHref="/exhibitor"
          />
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <button type="button" className={styles.btnPrimary} onClick={openStall}>
              Open Lead Form
            </button>
            <button type="button" className={styles.btnGhost} onClick={openBrochure}>
              Get Brochure
            </button>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            FAQs
          </span>
          <h2 className={styles.h2}>
            Frequently asked questions about{" "}
            <span className={styles.titleAccent}>events in {landing.district}</span>
          </h2>
          <div className={styles.cardGrid}>
            {landing.faq.map((item, idx) => (
              <article key={item.question} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardNumber}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className={styles.cardTitle}>{item.question}</h3>
                <p className={styles.cardBody}>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Explore More
          </span>
          <div className={styles.cardGrid}>
            <Link href="/events" className={styles.card}>
              <h3 className={styles.cardTitle}>All Event Editions</h3>
              <p className={styles.cardBody}>
                Explore all upcoming and past PharmmaEx editions across India.
              </p>
            </Link>
            <Link href="/up-coming" className={styles.card}>
              <h3 className={styles.cardTitle}>Upcoming Events</h3>
              <p className={styles.cardBody}>
                See current upcoming exhibitions and pre-registration details.
              </p>
            </Link>
            <Link href="/events/kolkata" className={styles.card}>
              <h3 className={styles.cardTitle}>Kolkata Event Details</h3>
              <p className={styles.cardBody}>
                Full city event page with venue, dates and exhibitor opportunities.
              </p>
            </Link>
            {sameStateEvents.map((event) => (
              <Link key={event.slug} href={`/events/${event.slug}`} className={styles.card}>
                <h3 className={styles.cardTitle}>{event.city} Event Page</h3>
                <p className={styles.cardBody}>
                  Explore related events from {landing.state}.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {modal && <LeadFormModal type={modal.type} prefill={modal.prefill} onClose={closeModal} />}
    </>
  );
};

export default DistrictLandingPage;
