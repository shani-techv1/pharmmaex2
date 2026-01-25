import fs from 'fs';
import path from 'path';

const blogsFilePath = path.join(process.cwd(), 'src', 'data', 'blogs.json');

// Ensure the directory exists
const ensureDirectoryExistence = (filePath) => {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
};

export function getBlogs() {
    if (!fs.existsSync(blogsFilePath)) {
        return [];
    }
    const fileData = fs.readFileSync(blogsFilePath, 'utf8');
    return JSON.parse(fileData);
}

export function getBlogBySlug(slug) {
    const blogs = getBlogs();
    return blogs.find((blog) => blog.slug === slug);
}

export function getBlogById(id) {
    const blogs = getBlogs();
    return blogs.find((blog) => blog.id === parseInt(id));
}

export function createBlog(newBlog) {
    const blogs = getBlogs();
    // Simple ID generation
    const maxId = blogs.length > 0 ? Math.max(...blogs.map(b => b.id)) : 0;
    const blogToAdd = { ...newBlog, id: maxId + 1 };

    ensureDirectoryExistence(blogsFilePath);
    blogs.push(blogToAdd);
    fs.writeFileSync(blogsFilePath, JSON.stringify(blogs, null, 2));
    return blogToAdd;
}

export function updateBlog(id, updatedData) {
    const blogs = getBlogs();
    const index = blogs.findIndex((blog) => blog.id === parseInt(id));

    if (index === -1) return null;

    const currentBlog = blogs[index];
    const updatedBlog = { ...currentBlog, ...updatedData, id: parseInt(id) }; // Ensure ID doesn't change

    blogs[index] = updatedBlog;
    fs.writeFileSync(blogsFilePath, JSON.stringify(blogs, null, 2));
    return updatedBlog;
}

export function deleteBlog(id) {
    const blogs = getBlogs();
    const initialLength = blogs.length;
    const filteredBlogs = blogs.filter((blog) => blog.id !== parseInt(id));

    if (filteredBlogs.length === initialLength) return false;

    fs.writeFileSync(blogsFilePath, JSON.stringify(filteredBlogs, null, 2));
    return true;
}
