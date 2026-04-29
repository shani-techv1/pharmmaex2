import Head from "next/head";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import WhatsAppFloat from "@/src/components/phase1/WhatsAppFloat";
import ExhibitorCategoryPage from "@/src/components/phase2/ExhibitorCategoryPage";
import { EXHIBITOR_CATEGORIES, getCategory } from "@/src/data/exhibitorCategories";

const SITE_URL = "https://pharmmaex.com";

export async function getStaticPaths() {
  return {
    paths: Object.keys(EXHIBITOR_CATEGORIES).map((category) => ({ params: { category } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = getCategory(params.category);
  if (!category) return { notFound: true };
  return { props: { category } };
}

export default function ExhibitorCategoryLanding({ category }) {
  const pageTitle = `${category.headline} | PharmmaEx 2026`;
  const pageDescription = category.intro;
  const pageUrl = `${SITE_URL}/exhibitor-categories/${category.slug}`;
  const pageImage = `${SITE_URL}${category.image}`;

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.name,
    description: category.intro,
    url: pageUrl,
    image: pageImage,
    isPartOf: {
      "@type": "WebSite",
      name: "PharmmaEx",
      url: SITE_URL,
    },
    about: {
      "@type": "Thing",
      name: category.name,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Exhibitor Categories", item: `${SITE_URL}/exhibitor-categories` },
      { "@type": "ListItem", position: 3, name: category.name, item: pageUrl },
    ],
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={category.keywords.join(", ")} />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <ExhibitorCategoryPage category={category} />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
