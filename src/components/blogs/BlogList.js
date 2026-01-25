import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ blogs }) => {
    return (
        <section className="blog-list-section py-5 bg-light">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center">
                        <span className="d-inline-block py-1 px-3 rounded-pill bg-success bg-opacity-10 text-success fw-bold mb-3">
                            Our Latest Updates
                        </span>
                        <h2 className="display-5 fw-bold mb-3">Insights & News</h2>
                        <p className="lead text-muted">
                            Stay updated with the latest trends, innovations, and news from the pharmaceutical industry and PharmmaEx events.
                        </p>
                    </div>
                </div>

                <div className="row">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogList;
