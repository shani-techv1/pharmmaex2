import Head from "next/head";
import Image from "next/image";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import InnerPageBanner from "@/src/components/bannerHome/InnerPageBanner";
import React from "react";
import Link from "next/link";
import "../styles/blog.css";

export default function Blog() {
  const pageTitle = "PharmmaEx Industry Insights & Pharma Updates";
  const pageDescription =
    "Explore PharmmaEx blogs featuring the latest pharmaceutical trends, industry insights, event highlights, and expert perspectives from global pharma professionals.";
  const pageUrl = "https://pharmmaex.com/blog";
  const pageImage = "https://pharmmaex.com/assets/img/pharma-blog-banner.jpg";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="PharmmaEx blog, pharma industry updates, pharmaceutical trends, global pharma events, healthcare insights"
        />
        <meta name="author" content="PharmmaEx" />
        <meta name="publisher" content="PharmmaEx" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <link rel="canonical" href={pageUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <InnerPageBanner pageName="Blog" bgImage="/assets/img/exbg.svg" />

      <section className="blog_Wrappper">
        <div id="primary" className="container my-5 mx-auto">
          <div className="row">
            {/* Left Section */}
            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 row-one">

              {/* First Row */}
              <div className="row row-one-inner">
                {/* Big Blog */}
                <div className="col-md-8 col-sm-12 col-xs-12 row-one-inner-1">
                  <a href="#">
                    <article className="blog_wrap">
                      <div className="post-thumbnail-wrap">
                        <img
                          width="1024"
                          height="535"
                          src="/assests/img/image2.webp"
                          className="img-fluid"
                          alt="Pharma networking"
                        />
                      </div>
                      <div className="blog-caption-wrap">
                        <div className="entry-date">
                          <span>8 Mins read</span>
                          <span>|</span>
                          <span>Oct 30, 2025</span>
                        </div>
                        <header className="entry-header">
                          <h2 className="entry-title">
                            How PharmmaEx Is Transforming Global Pharmaceutical Networking
                          </h2>
                        </header>
                      </div>
                    </article>
                  </a>
                </div>

                {/* Right Small Blogs */}
                <div className="col-md-4 col-sm-12 col-xs-12 row-one-inner-2">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <a href="#">
                        <article className="blog_wrap">
                          <div className="post-thumbnail-wrap">
                            <img
                              width="300"
                              height="157"
                              src="/assests/img/image2.webp"
                              className="img-fluid"
                              alt="Exhibition Insights"
                            />
                          </div>
                          <div className="blog-caption-wrap">
                            <div className="entry-date">
                              <span>5 Mins read</span>
                              <span>|</span>
                              <span>Oct 12, 2025</span>
                            </div>
                            <header className="entry-header">
                              <h2 className="entry-title">
                                Inside PharmmaEx 2025: The Future of Global Pharma Exhibitions
                              </h2>
                            </header>
                          </div>
                        </article>
                      </a>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <a href="#">
                        <article className="blog_wrap">
                          <div className="post-thumbnail-wrap">
                            <img
                              width="300"
                              height="157"
                              src="/assests/img/image2.webp"
                              className="img-fluid"
                              alt="Partnership Success"
                            />
                          </div>
                          <div className="blog-caption-wrap">
                            <div className="entry-date">
                              <span>6 Mins read</span>
                              <span>|</span>
                              <span>Sep 25, 2025</span>
                            </div>
                            <header className="entry-header">
                              <h2 className="entry-title">
                                Building Stronger Partnerships: PharmmaEx B2B Success Stories
                              </h2>
                            </header>
                          </div>
                        </article>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="row row-one-inner">
                <div className="col-md-8 col-sm-12 col-xs-12 row-one-inner-3">
                  <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                      <a href="#">
                        <article className="blog_wrap">
                          <div className="post-thumbnail-wrap">
                            <img
                              width="300"
                              height="157"
                              src="/assests/img/image2.webp"
                              className="img-fluid"
                              alt="Pharma Trends"
                            />
                          </div>
                          <div className="blog-caption-wrap">
                            <div className="entry-date">
                              <span>7 Mins read</span>
                              <span>|</span>
                              <span>Sep 10, 2025</span>
                            </div>
                            <header className="entry-header">
                              <h2 className="entry-title">
                                Top 5 Pharmaceutical Trends Shaping 2025
                              </h2>
                            </header>
                          </div>
                        </article>
                      </a>
                    </div>

                    <div className="col-md-6 col-sm-12 col-xs-12">
                      <a href="#">
                        <article className="blog_wrap">
                          <div className="post-thumbnail-wrap">
                            <img
                              width="300"
                              height="157"
                              src="/assests/img/image2.webp"
                              className="img-fluid"
                              alt="Innovation"
                            />
                          </div>
                          <div className="blog-caption-wrap">
                            <div className="entry-date">
                              <span>6 Mins read</span>
                              <span>|</span>
                              <span>Aug 28, 2025</span>
                            </div>
                            <header className="entry-header">
                              <h2 className="entry-title">
                                Innovations Driving the Global Pharma Supply Chain
                              </h2>
                            </header>
                          </div>
                        </article>
                      </a>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <a href="#">
                        <article className="blog_wrap">
                          <div className="post-thumbnail-wrap">
                            <img
                              width="626"
                              height="626"
                            src="/assests/img/image2.webp"
                              className="img-fluid"
                              alt="Research Collaboration"
                            />
                          </div>
                          <div className="blog-caption-wrap">
                            <div className="entry-date">
                              <span>5 Mins read</span>
                              <span>|</span>
                              <span>Aug 15, 2025</span>
                            </div>
                            <header className="entry-header">
                              <h2 className="entry-title">
                                How Collaborative Research is Revolutionizing Healthcare
                              </h2>
                            </header>
                          </div>
                        </article>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-12 col-xs-12 row-one-inner-4">
                  <a href="#">
                    <article className="blog_wrap">
                      <div className="post-thumbnail-wrap">
                        <img
                          width="300"
                          height="157"
                          src="/assests/img/image2.webp"
                          className="img-fluid"
                          alt="Pharma Sustainability"
                        />
                      </div>
                      <div className="blog-caption-wrap">
                        <div className="entry-date">
                          <span>8 Mins read</span>
                          <span>|</span>
                          <span>Jul 30, 2025</span>
                        </div>
                        <header className="entry-header">
                          <h2 className="entry-title">
                            Sustainable Manufacturing in Pharma: PharmmaEx’s Green Initiative
                          </h2>
                        </header>
                      </div>
                    </article>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
              <div className="widget-area secondary">
                <div className="sidebar-main-wrapper">
                  <aside id="categories-2" className="widget widget_categories">
                    <h2 className="widget-title">Categories</h2>
                    <nav aria-label="Categories">
                      <ul>
                        <li><a href="#">Pharmaceutical Trends</a> (48)</li>
                        <li><a href="#">Exhibitions & Events</a> (35)</li>
                        <li><a href="#">Global Partnerships</a> (22)</li>
                        <li><a href="#">Healthcare Innovation</a> (41)</li>
                        <li><a href="#">Sustainability</a> (18)</li>
                        <li><a href="#">Pharma News</a> (67)</li>
                      </ul>
                    </nav>
                  </aside>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
