import Head from "next/head";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import InnerPageBanner from "@/src/components/bannerHome/InnerPageBanner";
import BlogList from "@/src/components/blogs/BlogList";
import { getBlogs } from "@/src/lib/blogUtils";

export default function Blogs({ blogs }) {
    const pageTitle = "Blogs & Insights - PharmmaEx 2026";
    const pageDescription =
        "Latest news, insights, and trends from the pharmaceutical industry and PharmmaEx 2026 events.";
    const pageUrl = "https://pharmmaex.com/blogs";
    const pageImage = "/assests/img/aboutBanner.svg"; // Reusing an existing banner for now

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta
                    name="keywords"
                    content="Pharma blogs, Pharmaceutical insights, PharmmaEx news, Healthcare trends"
                />
                <meta name="author" content="PharmmaEx" />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={pageImage} />
                <link rel="canonical" href={pageUrl} />
            </Head>
            <Header />
            <InnerPageBanner
                pageName="Blogs & Insights"
                bgImage="/assests/img/aboutBanner.svg"
            />
            <BlogList blogs={blogs} />
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    const blogs = getBlogs();
    return {
        props: {
            blogs,
        },
        revalidate: 10,
    };
}
