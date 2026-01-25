"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AdminLayout from '@/src/components/admin/AdminLayout';

export default function AdminBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBlogs = async () => {
        try {
            const res = await fetch('http://2c9260c0ceae.ngrok-free.app/blogs',
                {
                    method: "GET",
                    headers: {
                        "ngrok-skip-browser-warning": "true",
                    },
                }
            );
            const data = await res.json();
            console.log(data, 'data');
            setBlogs(data);
        } catch (error) {
            console.error('Failed to fetch blogs', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this blog?')) return;
        try {
            const res = await fetch(`http://2c9260c0ceae.ngrok-free.app/blogs/${id}`, { method: 'DELETE' });
            if (res.ok) {
                fetchBlogs(); // Refresh list
            } else {
                alert('Failed to delete');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AdminLayout title="Manage Blogs">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <p className="mb-0 text-muted">Total Blogs: {blogs.length}</p>
                <Link href="/admin/blogs/create" className="btn btn-success d-flex align-items-center gap-2">
                    <i className="bi bi-plus-lg"></i> Create New Blog
                </Link>
            </div>

            {loading ? (
                <div className="text-center py-5"><div className="spinner-border text-success"></div></div>
            ) : (
                <div className="card shadow-sm border-0">
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table table-hover align-middle mb-0">
                                <thead className="bg-light">
                                    <tr>
                                        <th className="ps-4 py-3">Title</th>
                                        <th>Category</th>
                                        <th>Date</th>
                                        <th>Author</th>
                                        <th className="text-end pe-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {blogs.length === 0 ? (
                                        <tr>
                                            <td colSpan="5" className="text-center py-5 text-muted">No blogs found. Create one!</td>
                                        </tr>
                                    ) : (
                                        blogs.map(blog => (
                                            <tr key={blog.id}>
                                                <td className="ps-4">
                                                    <div className="fw-bold text-dark">{blog.title}</div>
                                                    <small className="text-muted">/{blog.slug}</small>
                                                </td>
                                                <td><span className="badge bg-light text-dark border">{blog.category}</span></td>
                                                <td className="text-secondary">{blog.date}</td>
                                                <td className="text-secondary">{blog.author}</td>
                                                <td className="text-end pe-4">
                                                    <Link href={`/admin/blogs/edit/${blog.id}`} className="btn btn-sm btn-outline-primary me-2">
                                                        <i className="bi bi-pencil"></i>
                                                    </Link>
                                                    <button onClick={() => handleDelete(blog.id)} className="btn btn-sm btn-outline-danger">
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
