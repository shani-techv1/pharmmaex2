import AdminLayout from '@/src/components/admin/AdminLayout';
import BlogForm from '@/src/components/admin/BlogForm';

export default function CreateBlog() {
    return (
        <AdminLayout title="Create New Blog">
            <BlogForm />
        </AdminLayout>
    );
}
