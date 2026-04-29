import Head from "next/head";
import Link from "next/link";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import WhatsAppFloat from "@/src/components/phase1/WhatsAppFloat";
import styles from "@/src/components/phase2/Phase2.module.css";
import { DISTRICT_LANDING_DATA } from "@/src/data/districtLandingData";

const SITE_URL = "https://pharmmaex.com";

function groupByState(items) {
  return items.reduce((acc, item) => {
    if (!acc[item.state]) acc[item.state] = [];
    acc[item.state].push(item);
    return acc;
  }, {});
}

export default function DistrictsIndexPage() {
  const grouped = groupByState(DISTRICT_LANDING_DATA);
  const states = Object.keys(grouped).sort((a, b) => a.localeCompare(b));
  const pageTitle = "District Wise Pharma Exhibitions & Medical Trade Shows in India | Pharmmaex";
  const pageDescription =
    " Browse district-wise pharma exhibitions, medical expos, healthcare trade shows, and business events across India. Find upcoming events in your district and connect with local industry opportunities through Pharmmaex.";
  const pageUrl = `${SITE_URL}/districts`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Districts", item: pageUrl },
    ],
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
  Find Upcoming Pharma Events by District in India
          </span>
          <h1 className={styles.h1}>Upcoming  Pharma  Events  available in your district </h1>
          
          <p className={styles.lead}>
  Explore district-wise pharma exhibitions, medical expos, healthcare trade shows, and business networking events across India. Discover upcoming pharma events in your district and connect with exhibitors, suppliers, and healthcare industry opportunities through Pharmmaex.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          {states.map((state) => {
            const districts = [...grouped[state]].sort((a, b) =>
              a.district.localeCompare(b.district)
            );
            return (
              <div key={state} style={{ marginBottom: "2rem" }}>
                <h2 className={styles.h2} style={{ marginBottom: "0.8rem" }}>
                 Pharma Events in {state}
                </h2>
                <div className={styles.cardGrid}>
                  {districts.map((item) => (
                    <Link
                      key={`${item.stateSlug}-${item.slug}`}
                      href={`/${item.stateSlug}/${item.slug}`}
                      className={styles.card}
                    >
                      <h3 className={styles.cardTitle}>{item.district}</h3>
                      <p className={styles.cardBody}>
                        {item.state}
                        <br />
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
