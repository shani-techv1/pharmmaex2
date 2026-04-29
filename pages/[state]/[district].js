import Head from "next/head";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import WhatsAppFloat from "@/src/components/phase1/WhatsAppFloat";
import DistrictLandingPage from "@/src/components/phase2/DistrictLandingPage";
import {
  getDistrictLanding,
  getDistrictPaths,
} from "@/src/data/districtLandingData";

const SITE_URL = "https://pharmmaex.com";

export async function getStaticPaths() {
  return {
    paths: getDistrictPaths(),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const landing = getDistrictLanding(params.state, params.district);
  if (!landing) return { notFound: true };
  return { props: { landing } };
}

export default function DistrictPage({ landing }) {
  const pageUrl = `${SITE_URL}${landing.canonicalPath}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: landing.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: landing.state,
        item: `${SITE_URL}/${landing.stateSlug}/${landing.slug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: landing.district,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{landing.seoTitle}</title>
        <meta name="description" content={landing.metaDescription} />
        <meta
          name="keywords"
          content={`events in ${landing.district}, exhibitions in ${landing.district}, trade shows in ${landing.district}, upcoming events in ${landing.district}, business events in ${landing.district}, expos in ${landing.district}`}
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={landing.seoTitle} />
        <meta property="og:description" content={landing.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={landing.seoTitle} />
        <meta name="twitter:description" content={landing.metaDescription} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <DistrictLandingPage landing={landing} />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
