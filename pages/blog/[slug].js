import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import SeoBreadcrumb from "@/src/components/phase2/SeoBreadcrumb";
import SeoCtaBanner from "@/src/components/phase2/SeoCtaBanner";
import { ArrowRight, ClockIcon, CalendarIcon, TagIcon, BookOpenIcon } from "@/src/components/phase2/icons";
import styles from "@/src/components/phase2/Phase2.module.css";
import { BLOG_LIST, BLOG_POSTS, getBlogPost } from "@/src/data/blogPosts";

const SITE_URL = "https://pharmmaex.com";

export async function getStaticPaths() {
  return {
    paths: Object.keys(BLOG_POSTS).map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getBlogPost(params.slug);
  if (!post) return { notFound: true };
  const related = BLOG_LIST.filter((p) => p.slug !== post.slug).slice(0, 3);
  return { props: { post, related } };
}

export default function BlogPostPage({ post, related }) {
  const pageUrl = `${SITE_URL}/blog/${post.slug}`;
  const pageImage = `${SITE_URL}${post.coverImage}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: pageImage,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author || "PharmmaEx",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "PharmmaEx",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assests/img/logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    keywords: post.keywords.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
    ],
  };

  return (
    <>
      <Head>
        <title>{`${post.title} | PharmmaEx Blog`}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <meta name="author" content={post.author || "PharmmaEx"} />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={pageImage} />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author || "PharmmaEx"} />
        {post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={pageImage} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <section className={styles.hero}>
        <div className={styles.containerNarrow}>
          <SeoBreadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            {post.category}
          </span>
          <h1 className={styles.h1}>{post.title}</h1>
          <p className={styles.lead}>{post.excerpt}</p>
          <div className={styles.heroMeta}>
            <span><ClockIcon size={15} /> {post.readMinutes} min read</span>
            <span>
              <CalendarIcon size={15} />{" "}
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span><TagIcon size={15} /> {post.author || "PharmmaEx"}</span>
          </div>
        </div>
      </section>

      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.containerNarrow}>
          <div
            className={styles.heroImage}
            style={{ marginBottom: "2.4rem", aspectRatio: "16/9" }}
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              width={1200}
              height={675}
              priority
            />
          </div>

          <article className={styles.article}>
            <div className={styles.articleMeta}>
              <span>By {post.author || "PharmmaEx"}</span>
              <span>•</span>
              <span>{post.category}</span>
              <span>•</span>
              <span>
                <ClockIcon size={13} /> {post.readMinutes} min read
              </span>
            </div>
            <div
              className={styles.articleBody}
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
            <div className={styles.tagRow}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tagChip}>
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      {related.length > 0 && (
        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Keep Reading
            </span>
            <h2 className={styles.h2}>
              Related <span className={styles.titleAccent}>articles</span>
            </h2>
            <div className={styles.cardGrid3}>
              {related.map((r, idx) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardNumber}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.cardIcon}>
                      <BookOpenIcon size={17} />
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>{r.title}</h3>
                  <p className={styles.cardBody}>{r.excerpt}</p>
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
                    Read article <ArrowRight size={13} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.section}>
        <div className={styles.container}>
          <SeoCtaBanner
            title="Ready to meet these brands in person?"
            subtitle="Visit PharmmaEx 2026 and compare 300+ pharma franchise & manufacturing brands face-to-face."
            primaryLabel="Book a Stall"
            primaryHref="/exhibitor"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
