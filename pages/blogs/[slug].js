import Head from "next/head";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import InnerPageBanner from "@/src/components/bannerHome/InnerPageBanner";
import BlogDetail from "@/src/components/blogs/BlogDetail";
import { getBlogs, getBlogBySlug } from "@/src/lib/blogUtils";

export default function BlogPost({ blog }) {
    if (!blog) {
        return <div>Loading...</div>; // Or a custom 404
    }

    const pageTitle = `${blog.title} - PharmmaEx 2026`;
    const pageDescription = blog.excerpt;
    const pageUrl = `https://pharmmaex.com/blogs/${blog.slug}`;
    const pageImage = blog.image;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="keywords" content={`PharmmaEx blog, ${blog.category}, ${blog.title}`} />
                <meta name="author" content={blog.author} />

                {/* Open Graph Tags */}
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={pageImage} />

                <link rel="canonical" href={pageUrl} />
            </Head>
            <Header />
            {/* We can use InnerPageBanner with a generic title or the Category */}
            <InnerPageBanner
                pageName="Blogs & Insights"
                bgImage="/assests/img/aboutBanner.svg"
            />
            <BlogDetail blog={blog} />
            <Footer />
        </>
    );
}

export async function getStaticPaths() {
    const blogs = getBlogs();
    const paths = blogs.map((blog) => ({
        params: { slug: blog.slug },
    }));

    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
    const blog = getBlogBySlug(params.slug);

    if (!blog) {
        return { notFound: true };
    }

    return {
        props: {
            blog,
        },
        revalidate: 10,
    };
}
