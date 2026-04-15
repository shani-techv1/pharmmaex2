import Head from "next/head";
import Link from "next/link";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import InnerPageBanner from "@/src/components/bannerHome/InnerPageBanner";
import SeoCtaBanner from "@/src/components/phase2/SeoCtaBanner";
import { ArrowRight, getCategoryIcon } from "@/src/components/phase2/icons";
import styles from "@/src/components/phase2/Phase2.module.css";
import { CATEGORY_LIST } from "@/src/data/exhibitorCategories";

const SITE_URL = "https://pharmmaex.com";

export default function ExhibitorCategoriesIndex() {
  const pageTitle =
    "Exhibitor Categories at PharmmaEx 2026 — PCD, Manufacturing, Ayurvedic & More";
  const pageDescription =
    "Browse all exhibitor categories at PharmmaEx 2026 — PCD pharma franchise, third-party manufacturing, ayurvedic, nutraceuticals, cosmeceuticals, surgical devices, veterinary and packaging.";
  const pageUrl = `${SITE_URL}/exhibitor-categories`;

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PharmmaEx 2026 Exhibitor Categories",
    itemListElement: CATEGORY_LIST.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      url: `${SITE_URL}/exhibitor-categories/${c.slug}`,
    })),
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="PCD pharma franchise, third party manufacturing, ayurvedic franchise, nutraceutical brands, cosmeceuticals, surgical devices, veterinary pharma, pharma packaging"
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
      <InnerPageBanner
        pageName="Exhibitor Categories"
        bgImage="/assests/img/sponserbanner.png"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              9 Pavilions, One Venue
            </span>
            <h1 className={styles.h1}>
              Every category at{" "}
              <span className={styles.titleAccent}>PharmmaEx 2026</span>
            </h1>
            <p className={styles.lead} style={{ margin: "0 auto" }}>
              From PCD pharma franchise and third-party manufacturing to ayurvedic,
              cosmeceuticals, veterinary and packaging — explore the dedicated
              pavilion that fits your business.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {CATEGORY_LIST.map((c, idx) => {
              const Icon = getCategoryIcon(c.slug);
              return (
                <Link
                  key={c.slug}
                  href={`/exhibitor-categories/${c.slug}`}
                  className={styles.card}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.cardNumber}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.cardIcon}>
                      <Icon size={17} />
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>{c.name}</h3>
                  <p className={styles.cardBody}>
                    {c.intro.slice(0, 140)}…
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
                    Explore pavilion <ArrowRight size={13} />
                  </div>
                </Link>
              );
            })}
          </div>

          <div style={{ marginTop: "3rem" }}>
            <SeoCtaBanner
              title="Book a stall in your category"
              subtitle="Premium and corner stalls fill fast across all 9 pavilions. Reserve your space today."
              primaryLabel="Become an Exhibitor"
              primaryHref="/exhibitor"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
