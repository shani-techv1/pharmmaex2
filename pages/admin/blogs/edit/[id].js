import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AdminLayout from '@/src/components/admin/AdminLayout';
import BlogForm from '@/src/components/admin/BlogForm';

export default function EditBlog() {
    const router = useRouter();
    const { id } = router.query;
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        fetch(`/api/blogs/${id}`)
            .then(res => {
                if (!res.ok) throw new Error('Blog not found');
                return res.json();
            })
            .then(data => setBlog(data))
            .catch((err) => {
                console.error(err);
                alert('Blog not found');
                router.push('/admin/blogs');
            })
            .finally(() => setLoading(false));
    }, [id, router]);

    if (loading) return <AdminLayout title="Edit Blog"><div className="p-5 text-center">Loading...</div></AdminLayout>;
    if (!blog) return null;

    return (
        <AdminLayout title={`Edit Blog: ${blog.title}`}>
            <BlogForm initialData={blog} isEdit={true} />
        </AdminLayout>
    );
}
