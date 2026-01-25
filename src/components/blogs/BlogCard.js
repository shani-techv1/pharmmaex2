import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BlogCard = ({ blog }) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm blog-card">
                <div className="position-relative" style={{ height: '240px', overflow: 'hidden', borderRadius: '1.2rem 1.2rem 0 0' }}>
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="card-img-top w-100 h-100"
                        style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                    />
                    <div className="category-badge position-absolute top-0 end-0 m-3 px-3 py-1 bg-white rounded-pill shadow-sm" style={{ fontSize: '0.8rem', fontWeight: '600', color: '#00833D' }}>
                        {blog.category}
                    </div>
                </div>
                <div className="card-body d-flex flex-column p-4">
                    <div className="mb-2 text-muted" style={{ fontSize: '0.9rem' }}>
                        <span className="me-2"><i className="bi bi-calendar3 me-1"></i> {blog.date}</span>
                        {/* Optional: Add reading time or author */}
                    </div>
                    <h5 className="card-title fw-bold mb-3" style={{ color: '#111', lineHeight: '1.4' }}>
                        <Link href={`/blogs/${blog.slug}`} className="text-decoration-none text-dark hover-primary-color">
                            {blog.title}
                        </Link>
                    </h5>
                    <p className="card-text text-secondary mb-4" style={{ fontSize: '0.95rem', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {blog.excerpt}
                    </p>
                    <div className="mt-auto">
                        <Link href={`/blogs/${blog.slug}`} className="btn btn-outline-success rounded-pill px-4 fw-medium">
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
            <style jsx>{`
        .blog-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 1.2rem;
        }
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        .blog-card:hover .card-img-top {
          transform: scale(1.05);
        }
        .hover-primary-color:hover {
          color: #00833D !important;
        }
      `}</style>
        </div>
    );
};

export default BlogCard;
