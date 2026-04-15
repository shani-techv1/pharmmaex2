import Head from "next/head";
import Link from "next/link";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import InnerPageBanner from "@/src/components/bannerHome/InnerPageBanner";
import SeoCtaBanner from "@/src/components/phase2/SeoCtaBanner";
import { ArrowRight, PinIcon, CameraIcon } from "@/src/components/phase2/icons";
import styles from "@/src/components/phase2/Phase2.module.css";
import { CITY_LIST, UPCOMING_CITIES, PAST_CITIES } from "@/src/data/cityEvents";

const SITE_URL = "https://pharmmaex.com";

export default function EventsIndex() {
  const pageTitle = "PharmmaEx Events 2026 — Pharma Expo Cities Across India";
  const pageDescription =
    "PharmmaEx 2026 travels across India — Kolkata, Hyderabad, Ahmedabad, Coimbatore and more. Find dates, venues, exhibitor profiles and visitor registration for every city.";
  const pageUrl = `${SITE_URL}/events`;

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PharmmaEx 2026 Editions",
    itemListElement: CITY_LIST.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `PharmmaEx ${c.city}`,
      url: `${SITE_URL}/events/${c.slug}`,
    })),
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="pharma expo India 2026, pharma exhibition cities, PharmmaEx editions, PCD pharma expo, pharma trade show India"
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <InnerPageBanner pageName="Events" bgImage="/assests/img/sponserbanner.png" />

      <section className={styles.section}>
        <div className={styles.container}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Editions Across India
            </span>
            <h1 className={styles.h1}>
              PharmmaEx 2026 —{" "}
              <span className={styles.titleAccent}>
                coming to a city near you
              </span>
            </h1>
            <p className={styles.lead} style={{ margin: "0 auto" }}>
              India&apos;s leading pharma franchise &amp; business expo travels to{" "}
              {CITY_LIST.length} cities across India. Compare dates, venues and
              exhibitor profiles. Free visitor entry with pre-registration.
            </p>
          </div>

          {UPCOMING_CITIES.length > 0 && (
            <>
              <h2
                className={styles.h2}
                style={{ marginTop: "3.5rem", textAlign: "center" }}
              >
                Upcoming <span className={styles.titleAccent}>editions</span>
              </h2>
              <div className={styles.cardGrid}>
                {UPCOMING_CITIES.map((c, idx) => (
                  <Link
                    key={c.slug}
                    href={`/events/${c.slug}`}
                    className={styles.card}
                  >
                    <div className={styles.cardHeader}>
                      <span className={styles.cardNumber}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className={styles.cardIcon}>
                        <PinIcon size={17} />
                      </span>
                    </div>
                    <h3 className={styles.cardTitle}>
                      {c.city}, {c.state}
                    </h3>
                    <p className={styles.cardBody}>
                      <strong>{c.date}</strong>
                      <br />
                      {c.venue}
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
                      View edition <ArrowRight size={13} />
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

          {PAST_CITIES.length > 0 && (
            <>
              <h2
                className={styles.h2}
                style={{ marginTop: "3.5rem", textAlign: "center" }}
              >
                Past <span className={styles.titleAccent}>editions</span>
              </h2>
              <div className={styles.cardGrid}>
                {PAST_CITIES.map((c, idx) => (
                  <Link
                    key={c.slug}
                    href={`/events/${c.slug}`}
                    className={styles.card}
                  >
                    <div className={styles.cardHeader}>
                      <span className={styles.cardNumber}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className={styles.cardIcon}>
                        <CameraIcon size={17} />
                      </span>
                    </div>
                    <h3 className={styles.cardTitle}>
                      {c.city}, {c.state}
                    </h3>
                    <p className={styles.cardBody}>
                      <strong>{c.date}</strong>
                      <br />
                      {c.venue}
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
                      View recap <ArrowRight size={13} />
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

          <div style={{ marginTop: "3rem" }}>
            <SeoCtaBanner
              title="Exhibit at multiple PharmmaEx editions in 2026"
              subtitle="Lock multi-city packages and reach 50,000+ verified buyers across Kolkata, Hyderabad, Ahmedabad and Coimbatore."
              primaryLabel="Book Multi-City Stall"
              primaryHref="/exhibitor"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
