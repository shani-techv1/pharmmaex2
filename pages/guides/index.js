import Head from "next/head";
import Link from "next/link";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import InnerPageBanner from "@/src/components/bannerHome/InnerPageBanner";
import SeoCtaBanner from "@/src/components/phase2/SeoCtaBanner";
import { ArrowRight, BookOpenIcon } from "@/src/components/phase2/icons";
import styles from "@/src/components/phase2/Phase2.module.css";
import { GUIDE_LIST } from "@/src/data/guides";

const SITE_URL = "https://pharmmaex.com";

export default function GuidesIndex() {
  const pageTitle = "Pharma Franchise & Business Guides | PharmmaEx";
  const pageDescription =
    "Long-form guides for entrepreneurs starting a PCD pharma franchise, distribution business or third-party manufacturing brand in India. Practical, step-by-step and free.";
  const pageUrl = `${SITE_URL}/guides`;

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PharmmaEx Guides",
    itemListElement: GUIDE_LIST.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: g.title,
      url: `${SITE_URL}/guides/${g.slug}`,
    })),
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="pharma franchise guide, PCD pharma guide, pharma distribution guide, third party manufacturing guide, pharma business plan India"
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
      <InnerPageBanner pageName="Guides" bgImage="/assests/img/aboutBanner.svg" />

      <section className={styles.section}>
        <div className={styles.container}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Pharma Franchise Guides
            </span>
            <h1 className={styles.h1}>
              Long-form guides for the{" "}
              <span className={styles.titleAccent}>franchise business</span>
            </h1>
            <p className={styles.lead} style={{ margin: "0 auto" }}>
              Step-by-step guides written for first-time PCD pharma franchise
              entrepreneurs, distributors and brand owners. Built from 5+ years of
              organising pharma expos and reviewing 500+ companies.
            </p>
          </div>

          <div className={styles.cardGrid3}>
            {GUIDE_LIST.map((g, idx) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className={styles.card}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.cardNumber}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.cardIcon}>
                    <BookOpenIcon size={17} />
                  </span>
                </div>
                <h3 className={styles.cardTitle}>{g.title}</h3>
                <p className={styles.cardBody}>{g.excerpt}</p>
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
                  Read guide <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: "3rem" }}>
            <SeoCtaBanner
              title="Apply what you read at PharmmaEx 2026"
              subtitle="Reading is half the work. Meet 300+ pharma brands face-to-face in two days at PharmmaEx 2026."
              primaryLabel="Pre-Register Free"
              primaryHref="https://www.pharmmaexregistration.in/Pharmaex/visitor.aspx"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
