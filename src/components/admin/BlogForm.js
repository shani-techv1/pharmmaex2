import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDropzone } from 'react-dropzone';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

const FileDropzone = ({ onDrop, uploading }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': [] },
        multiple: false
    });

    return (
        <div
            {...getRootProps()}
            className={`border rounded-3 p-5 text-center cursor-pointer transition-all ${isDragActive ? 'bg-light border-primary' : 'bg-white border-dashed'}`}
            style={{ borderStyle: 'dashed', borderWidth: 2, borderColor: isDragActive ? '#0d6efd' : '#dee2e6' }}
        >
            <input {...getInputProps()} />
            {uploading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <>
                    <i className="bi bi-cloud-arrow-up display-4 text-secondary mb-3 d-block"></i>
                    {isDragActive ? (
                        <p className="mb-0 fw-medium text-primary">Drop the image here ...</p>
                    ) : (
                        <div>
                            <p className="mb-1 fw-medium">Drag & drop featured image here, or click to select</p>
                            <small className="text-muted">Supports: JPG, PNG, WEBP</small>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

const BlogForm = ({ initialData = {}, isEdit = false }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleImageDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            setSelectedFile(file);
            // Create a temporary preview URL
            setFormData(prev => ({ ...prev, image: URL.createObjectURL(file) }));
        }
    };

    const processInitialData = (data) => {
        let dateVal = new Date().toISOString().split('T')[0];
        if (data && data.date) {
            const parsed = new Date(data.date);
            if (!isNaN(parsed.getTime())) {
                // Adjust for timezone offset to ensure dates are not shifted
                const offsetDate = new Date(parsed.getTime() - (parsed.getTimezoneOffset() * 60000));
                dateVal = offsetDate.toISOString().split('T')[0];
            }
        }
        return {
            title: '',
            slug: '',
            author: '',
            description: '',
            content: '',
            image: '',
            category: '',
            ...data,
            date: dateVal
        };
    };

    const [formData, setFormData] = useState(processInitialData(initialData));

    // Update formData if initialData changes (e.g. on page load)
    useEffect(() => {
        if (initialData && Object.keys(initialData).length > 0) {
            setFormData(processInitialData(initialData));
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleContentChange = (content) => {
        setFormData(prev => ({ ...prev, content: content }));
    };

    const generateSlug = () => {
        const slug = formData.title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
        setFormData(prev => ({ ...prev, slug }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const url = isEdit ? `https://2c9260c0ceae.ngrok-free.app/blog/${initialData.id}` : 'https://2c9260c0ceae.ngrok-free.app/create-blog';
            const method = isEdit ? 'PUT' : 'POST';

            // Format date for display consistency (Long Month Day, Year)
            const dateObj = new Date(formData.date);
            const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

            // Create FormData object
            const data = new FormData();
            data.append('title', formData.title);
            data.append('slug', formData.slug);
            data.append('category', formData.category);
            data.append('author', formData.author);
            data.append('date', formattedDate);
            data.append('description', formData.description);
            data.append('content', formData.content);

            // If new file is selected, append it
            if (selectedFile) {
                data.append('image', selectedFile);
            } else if (formData.image) {
                // If editing and no new file, might need to send existing URL or skip 'image' field 
                // depending on backend. Assuming backend keeps old image if 'image' field not sent or blank.
                // Or if backend expects URL string if no file update:
                data.append('image', formData.image);
            }

            const res = await fetch(url, {
                method,
                body: data,
            });
            console.log(res, 'res');
            if (res?.success) {
                router.push('/admin/blogs');
            } else {
                alert("Failed to save blog")
            }
        } catch (error) {
            console.error(error);
            alert('Error saving blog: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card shadow-sm border-0">
            <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Title</label>
                            <input
                                type="text"
                                name="title"
                                className="form-control"
                                value={formData.title}
                                onChange={handleChange}
                                onBlur={generateSlug}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label fw-bold">Slug</label>
                            <div className="input-group">
                                <span className="input-group-text bg-light text-muted">/blogs/</span>
                                <input
                                    type="text"
                                    name="slug"
                                    className="form-control"
                                    value={formData.slug}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <label className="form-label fw-bold">Category</label>
                            <input
                                type="text"
                                name="category"
                                className="form-control"
                                value={formData.category}
                                onChange={handleChange}
                                list="categoryOptions"
                            />
                            <datalist id="categoryOptions">
                                <option value="Industry Trends" />
                                <option value="Events" />
                                <option value="Technology" />
                                <option value="Business" />
                            </datalist>
                        </div>

                        <div className="col-md-4">
                            <label className="form-label fw-bold">Author</label>
                            <input
                                type="text"
                                name="author"
                                className="form-control"
                                value={formData.author}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-4">
                            <label className="form-label fw-bold">Date</label>
                            <input
                                type="date"
                                name="date"
                                className="form-control"
                                value={formData.date}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-12">
                            <label className="form-label fw-bold">Featured Image</label>
                            <div className="mb-3">
                                <FileDropzone onDrop={handleImageDrop} uploading={uploading} />
                            </div>

                            {/* Hidden input to store URL if needed for traditional form submission logic compatibility */}
                            <input type="hidden" name="image" value={formData.image} />

                            {formData.image && (
                                <div className="mt-2 position-relative d-inline-block">
                                    <div className="border rounded p-1">
                                        <img src={formData.image} alt="Preview" style={{ height: 150, borderRadius: 8, display: 'block', objectFit: 'cover' }} />
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-danger position-absolute top-0 start-100 translate-middle rounded-circle p-0 d-flex justify-content-center align-items-center"
                                        style={{ width: 24, height: 24 }}
                                        onClick={() => setFormData(prev => ({ ...prev, image: '' }))}
                                    >
                                        <i className="bi bi-x"></i>
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="col-12">
                            <label className="form-label fw-bold">Description</label>
                            <textarea
                                name="description"
                                className="form-control"
                                rows="3"
                                value={formData.description}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="col-12">
                            <label className="form-label fw-bold">Content</label>
                            <div style={{ height: '350px', marginBottom: '60px' }}>
                                <ReactQuill
                                    theme="snow"
                                    value={formData.content}
                                    onChange={handleContentChange}
                                    style={{ height: '100%' }}
                                    modules={{
                                        toolbar: [
                                            [{ 'header': [1, 2, 3, false] }],
                                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                            ['link', 'image'],
                                            ['clean']
                                        ],
                                    }}
                                />
                            </div>
                        </div>

                        <div className="col-12 d-flex gap-2 justify-content-end mt-4">
                            <button type="button" className="btn btn-light border" onClick={() => router.push('/admin/blogs')}>Cancel</button>
                            <button type="submit" className="btn btn-success px-4" disabled={loading}>
                                {loading ? 'Saving...' : (isEdit ? 'Update Blog' : 'Create Blog')}
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogForm;
