import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const AdminLayout = ({ children, title }) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>{title ? `${title} - Admin Panel` : 'Admin Panel'}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
            </Head>
            <div className="admin-container d-flex">
                {/* Sidebar */}
                <div className="admin-sidebar bg-dark text-white p-3 d-flex flex-column vh-100 position-fixed" style={{ width: '250px', zIndex: 1000 }}>
                    <div className="mb-4 d-flex align-items-center gap-2">
                        <span className="fs-5 fw-bold">PharmmaEx Admin</span>
                    </div>

                    <nav className="nav flex-column gap-2">
                        <Link href="/admin/blogs" className={`nav-link text-white rounded ${router.pathname.startsWith('/admin/blogs') ? 'bg-success' : ''}`}>
                            <i className="bi bi-journal-text me-2"></i> Blogs
                        </Link>
                        {/* Add more admin links here */}
                        <Link href="/" className="nav-link text-white-50 mt-auto">
                            <i className="bi bi-box-arrow-left me-2"></i> Back to Site
                        </Link>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="admin-content flex-grow-1 bg-light" style={{ marginLeft: '250px', minHeight: '100vh' }}>
                    <header className="bg-white shadow-sm p-3 mb-4 d-flex justify-content-between align-items-center">
                        <h4 className="m-0 text-success">{title}</h4>
                        <div className="d-flex align-items-center gap-3">
                            <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
                                <i className="bi bi-person"></i>
                            </div>
                            <span>Admin User</span>
                        </div>
                    </header>

                    <main className="container-fluid p-4">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
};

export default AdminLayout;
