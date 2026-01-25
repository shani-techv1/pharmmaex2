import Head from "next/head";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import InnerPageBanner from "@/src/components/bannerHome/InnerPageBanner";
import styles from "@/styles/PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  const pageTitle = "Privacy Policy - PharmmaEx";
  const pageDescription =
    "Read the PharmmaEx Privacy Policy to understand how we collect, use, and safeguard your personal information when you interact with our website and exhibitions.";
  const pageUrl = "https://pharmmaex.com/privacy-policy";
  const pageImage = "https://pharmmaex.com/assets/img/privacy-banner.jpg"; // Replace with actual image path

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="PharmmaEx privacy policy, data protection, personal information, pharma exhibition privacy"
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
              "@type": "WebPage",
              name: pageTitle,
              description: pageDescription,
              url: pageUrl,
              image: pageImage,
              publisher: {
                "@type": "Organization",
                name: "PharmmaEx",
                url: "https://pharmmaex.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://pharmmaex.com/assets/img/logo.png", // Replace with your actual logo
                },
              },
            }),
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <InnerPageBanner
        pageName="Terms & Conditions"
        bgImage="/assests/img/privacy.png"
      />
      <div className={styles.container}>
        <div className="innerContainer mx-auto">
          <h1 className={styles.pageTitle}>Privacy Policy</h1>

          <section className={styles.section}>
            <p>Last Updated: 05/07/2025</p>
            <p>
              At PharmmaEx, accessible from www.pharmmaex.com, your privacy is
              of utmost importance to us. This Privacy Policy outlines how we
              collect, use, disclose, and safeguard your personal information
              when you visit our website or participate in our exhibitions.
            </p>
            <p>
              By using our website and services, you consent to the practices
              described in this policy.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Who We Are</h2>
            <p>
              PharmmaEx is India’s leading pharmaceutical exhibition, bringing
              together exhibitors from across the country to showcase
              innovations, products, and services in the pharmaceutical,
              nutraceutical, ayurvedic, and healthcare industries.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Information We Collect</h2>
            <p>We may collect the following types of personal data:</p>
            <ul>
              <li>
                Contact Information: Name, email address, phone number, company
                name, designation, city/state.
              </li>
              <li>
                Registration Details: Information submitted during online
                registration for the event (exhibitor or visitor).
              </li>
              <li>
                Communication Data: Queries, feedback, and communication through
                emails or contact forms.
              </li>
            </ul>
            <p>
              Usage Data: IP address, browser type, referring URLs, and pages
              visited on our site.
            </p>
          </section>

          <section className={styles.section}>
            <h2> How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul>
              <li>
                Register you for the exhibition (as an exhibitor or visitor)
              </li>
              <li>
                Share event updates, exhibitor highlights, and promotional
                materials
              </li>
              <li>Respond to your queries or support requests</li>
              <li>
                Send newsletters, notifications, and event-related announcements
              </li>
              <li>
                Improve website content, user experience, and marketing efforts{" "}
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Sharing Your Information</h2>
            <p>
              We do not sell or rent your personal data. However, we may share
              information with:
            </p>
            <ul>
              <li>
                Event Partners & Sponsors (for relevant communication or
                co-promotions)
              </li>
              <li>
                Service Providers (such as registration platforms, analytics
                tools, or marketing partners)
              </li>
              <li>
                Legal Authorities if required under law or to protect legal
                rights.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2> Cookies & Tracking Technologies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to:
            </p>
            <ul>
              <li>Enhance browsing experience</li>
              <li>Monitor website traffic and visitor behavior</li>
              <li>Provide targeted advertisements (if applicable)</li>
            </ul>
            <p>
              You may choose to disable cookies through your browser settings,
              though it may limit certain features.
            </p>
          </section>

          <section className={styles.section}>
            <h2> Data Security</h2>
            <p>
              We implement appropriate security measures to protect your
              personal information. While we strive to safeguard your data, no
              method of electronic transmission is 100% secure. We encourage you
              to use secure networks and updated software while interacting with
              our platform.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your information</li>
              <li>Withdraw consent for marketing communications</li>
              <li>Opt out of cookies and tracking</li>
            </ul>
            <p>
              ou can exercise these rights by contacting us at: 📧
              info@pharmmaex.com
            </p>
          </section>

          <section className={styles.section}>
            <h2>External Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of those sites.
              Please review their policies independently.
            </p>
          </section>

          <section className={styles.section}>
            <h2> Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Changes will be
              posted on this page with a revised effective date. Please review
              this policy regularly to stay informed.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how your
              data is handled, please contact us:
              <br />
              📧 info@pharmmaex.com
              <br />
              📞 +91-9258002828 / +91-7017336797
              <br />
              🌐 Website:{" "}
              <a
                href="https://pharmmaex.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                www.pharmmaex.com{" "}
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
