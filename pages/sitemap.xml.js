import { CITY_LIST } from "@/src/data/cityEvents";
import { CATEGORY_LIST } from "@/src/data/exhibitorCategories";
import { BLOG_LIST } from "@/src/data/blogPosts";
import { GUIDE_LIST } from "@/src/data/guides";

const SITE_URL = "https://pharmmaex.com";

function generateSiteMap() {
  const today = new Date().toISOString().split("T")[0];

  const staticUrls = [
    { loc: "/", priority: 1.0, changefreq: "weekly" },
    { loc: "/about", priority: 0.7, changefreq: "monthly" },
    { loc: "/up-coming", priority: 0.9, changefreq: "weekly" },
    { loc: "/exhibitor", priority: 0.9, changefreq: "weekly" },
    { loc: "/past-exhibitions", priority: 0.6, changefreq: "monthly" },
    { loc: "/sponsors-association", priority: 0.6, changefreq: "monthly" },
    { loc: "/client-review", priority: 0.6, changefreq: "monthly" },
    { loc: "/review-form", priority: 0.4, changefreq: "yearly" },
    { loc: "/pressRealise", priority: 0.5, changefreq: "monthly" },
    { loc: "/contact-us", priority: 0.7, changefreq: "monthly" },
    { loc: "/privacyPolicy", priority: 0.3, changefreq: "yearly" },
    { loc: "/term-condition", priority: 0.3, changefreq: "yearly" },
    { loc: "/blog", priority: 0.9, changefreq: "weekly" },
    { loc: "/events", priority: 0.9, changefreq: "weekly" },
    { loc: "/exhibitor-categories", priority: 0.9, changefreq: "weekly" },
    { loc: "/guides", priority: 0.8, changefreq: "monthly" },
  ];

  const cityUrls = CITY_LIST.map((c) => ({
    loc: `/events/${c.slug}`,
    priority: c.status === "upcoming" ? 0.9 : 0.6,
    changefreq: c.status === "upcoming" ? "weekly" : "monthly",
  }));

  const categoryUrls = CATEGORY_LIST.map((c) => ({
    loc: `/exhibitor-categories/${c.slug}`,
    priority: 0.85,
    changefreq: "weekly",
  }));

  const blogUrls = BLOG_LIST.map((p) => ({
    loc: `/blog/${p.slug}`,
    priority: 0.7,
    changefreq: "monthly",
    lastmod: p.publishedAt,
  }));

  const guideUrls = GUIDE_LIST.map((g) => ({
    loc: `/guides/${g.slug}`,
    priority: 0.8,
    changefreq: "monthly",
  }));

  const galleryCities = ["coimbatore", "mumbai", "hyderabad", "ahmedabad", "pune", "bangalore"];
  const galleryUrls = galleryCities.map((c) => ({
    loc: `/gallery/${c}`,
    priority: 0.6,
    changefreq: "monthly",
  }));

  const all = [
    ...staticUrls,
    ...cityUrls,
    ...categoryUrls,
    ...blogUrls,
    ...guideUrls,
    ...galleryUrls,
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.loc}</loc>
    <lastmod>${u.lastmod || today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();
  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400");
  res.write(sitemap);
  res.end();
  return { props: {} };
}

export default function SiteMap() {
  return null;
}
