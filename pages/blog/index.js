import Head from "next/head";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import InnerPageBanner from "@/src/components/bannerHome/InnerPageBanner";
import BlogCard from "@/src/components/phase2/BlogCard";
import SeoCtaBanner from "@/src/components/phase2/SeoCtaBanner";
import styles from "@/src/components/phase2/Phase2.module.css";
import { BLOG_LIST } from "@/src/data/blogPosts";

const SITE_URL = "https://pharmmaex.com";

export default function BlogIndex() {
  const pageTitle = "Pharma Expo Blog — PCD Franchise, Manufacturing & Industry Insights | PharmmaEx";
  const pageDescription =
    "Practical guides and industry insights on pharma franchise, PCD pharma, third-party manufacturing, ayurvedic brands and pharma trade shows in India. Updated by the PharmmaEx editorial team.";
  const pageUrl = `${SITE_URL}/blog`;
  const pageImage = `${SITE_URL}/assests/img/aboutBanner.svg`;

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "PharmmaEx Blog",
    url: pageUrl,
    description: pageDescription,
    blogPost: BLOG_LIST.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      datePublished: p.publishedAt,
      url: `${SITE_URL}/blog/${p.slug}`,
      image: `${SITE_URL}${p.coverImage}`,
      author: {
        "@type": "Organization",
        name: p.author || "PharmmaEx",
      },
      publisher: {
        "@type": "Organization",
        name: "PharmmaEx",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/assests/img/logo.svg`,
        },
      },
    })),
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="pharma franchise blog, PCD pharma blog, pharma expo India, third party manufacturing blog, pharma industry trends 2026, ayurvedic franchise blog"
        />
        <meta name="author" content="PharmmaEx" />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={pageImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <InnerPageBanner pageName="Blog" bgImage="/assests/img/aboutBanner.svg" />

      <section className={styles.section}>
        <div className={styles.container}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Insights & Guides
            </span>
            <h1 className={styles.h1}>
              The pharma franchise &amp;{" "}
              <span className={styles.titleAccent}>expo blog</span>
            </h1>
            <p className={styles.lead} style={{ margin: "0 auto" }}>
              Practical articles for PCD pharma franchise buyers, third-party
              manufacturing partners, distributors and exhibitors — written by the
              PharmmaEx editorial team after 5+ years and 30+ pharma expo editions
              across India.
            </p>
          </div>

          <div className={styles.blogGrid}>
            {BLOG_LIST.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div style={{ marginTop: "3rem" }}>
            <SeoCtaBanner
              title="From reading to doing — meet 300+ pharma brands in person"
              subtitle="The fastest way to apply everything you read here is to compare brands face-to-face at PharmmaEx 2026."
              primaryLabel="Book a Stall"
              primaryHref="/exhibitor"
              secondaryLabel="Pre-Register Free"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
