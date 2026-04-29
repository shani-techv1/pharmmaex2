import Head from "next/head";
import Link from "next/link";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import WhatsAppFloat from "@/src/components/phase1/WhatsAppFloat";
import styles from "@/src/components/phase2/Phase2.module.css";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found | PharmmaEx</title>
        <meta
          name="description"
          content="The page you are looking for could not be found. Explore PharmmaEx events, districts, and exhibitor resources."
        />
        <meta name="robots" content="noindex,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <section className={styles.hero}>
        <div className={styles.container} style={{ textAlign: "center" }}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Error 404
          </span>
          <h1 className={styles.h1}>Page Not Found</h1>
          <p className={styles.lead} style={{ margin: "0 auto", maxWidth: 760 }}>
            The page you are trying to access does not exist or may have been moved. Use the links
            below to continue exploring upcoming exhibitions, events, and district pages.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.cardGrid}>
            <Link href="/" className={styles.card}>
              <h2 className={styles.cardTitle}>Go to Homepage</h2>
              <p className={styles.cardBody}>Return to the main PharmmaEx landing page.</p>
            </Link>

            <Link href="/events" className={styles.card}>
              <h2 className={styles.cardTitle}>Browse Events</h2>
              <p className={styles.cardBody}>View all upcoming and past event editions.</p>
            </Link>

            <Link href="/districts" className={styles.card}>
              <h2 className={styles.cardTitle}>Explore District Pages</h2>
              <p className={styles.cardBody}>Find district-specific event landing pages by state.</p>
            </Link>

            <Link href="/contact-us" className={styles.card}>
              <h2 className={styles.cardTitle}>Contact Support</h2>
              <p className={styles.cardBody}>Reach out if you need help finding a page.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
