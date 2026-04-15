import Head from "next/head";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import WhatsAppFloat from "@/src/components/phase1/WhatsAppFloat";
import GuidePage from "@/src/components/phase2/GuidePage";
import { GUIDES, getGuide } from "@/src/data/guides";

const SITE_URL = "https://pharmmaex.com";

export async function getStaticPaths() {
  return {
    paths: Object.keys(GUIDES).map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const guide = getGuide(params.slug);
  if (!guide) return { notFound: true };
  return { props: { guide } };
}

export default function GuideLanding({ guide }) {
  const pageTitle = `${guide.title} | PharmmaEx Guides`;
  const pageDescription = guide.excerpt;
  const pageUrl = `${SITE_URL}/guides/${guide.slug}`;
  const pageImage = `${SITE_URL}${guide.coverImage}`;

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: guide.title,
    description: guide.excerpt,
    image: pageImage,
    totalTime: `PT${guide.readMinutes}M`,
    step: guide.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    image: pageImage,
    author: {
      "@type": "Organization",
      name: "PharmmaEx",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "PharmmaEx",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/assests/img/logo.svg` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    keywords: guide.keywords.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
      { "@type": "ListItem", position: 3, name: guide.title, item: pageUrl },
    ],
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={guide.keywords.join(", ")} />
        <meta name="author" content="PharmmaEx" />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={pageImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
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
      <GuidePage guide={guide} />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
