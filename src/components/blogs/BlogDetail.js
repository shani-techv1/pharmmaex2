import React from 'react';
import Link from 'next/link';

const BlogDetail = ({ blog }) => {
    return (
        <section className="blog-detail-section py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {/* Breadcrumb / Back Link */}
                        <div className="mb-4">
                            <Link href="/blogs" className="text-secondary text-decoration-none d-flex align-items-center fw-medium">
                                <i className="bi bi-arrow-left me-2"></i> Back to Blogs
                            </Link>
                        </div>

                        {/* Header Info */}
                        <div className="text-center mb-5">
                            <span className="d-inline-block py-1 px-3 rounded-pill bg-success bg-opacity-10 text-success fw-bold mb-3" style={{ fontSize: '0.9rem' }}>
                                {blog.category}
                            </span>
                            <h1 className="display-4 fw-bold mb-3 text-dark">{blog.title}</h1>
                            <div className="d-flex justify-content-center align-items-center text-muted" style={{ fontSize: '1rem' }}>
                                <span className="me-3"><i className="bi bi-person me-1"></i> {blog.author}</span>
                                <span className="me-3">|</span>
                                <span><i className="bi bi-calendar3 me-1"></i> {blog.date}</span>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="mb-5 position-relative overflow-hidden shadow-lg" style={{ borderRadius: '1.5rem', maxHeight: '500px' }}>
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-100 h-100"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>

                        {/* Content */}
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div
                                    className="blog-content"
                                    style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#333' }}
                                    dangerouslySetInnerHTML={{ __html: blog.content }}
                                />

                                <div className="mt-5 pt-4 border-top">
                                    <h5 className="fw-bold mb-3">Share this article:</h5>
                                    <div className="d-flex gap-3 social-share-btns">
                                        {/* Placeholder for social share buttons */}
                                        <button className="btn btn-outline-secondary rounded-circle" style={{ width: 40, height: 40, padding: 0 }}><i className="bi bi-facebook"></i></button>
                                        <button className="btn btn-outline-secondary rounded-circle" style={{ width: 40, height: 40, padding: 0 }}><i className="bi bi-twitter-x"></i></button>
                                        <button className="btn btn-outline-secondary rounded-circle" style={{ width: 40, height: 40, padding: 0 }}><i className="bi bi-linkedin"></i></button>
                                        <button className="btn btn-outline-secondary rounded-circle" style={{ width: 40, height: 40, padding: 0 }}><i className="bi bi-whatsapp"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <style jsx global>{`
        .blog-content h3 {
           font-weight: 700;
           margin-top: 2rem;
           margin-bottom: 1rem;
           color: #111;
        }
        .blog-content p {
           margin-bottom: 1.5rem;
        }
        .blog-content strong {
           font-weight: 600;
        }
      `}</style>
        </section>
    );
};

export default BlogDetail;
