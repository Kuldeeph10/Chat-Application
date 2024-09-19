// Array to hold blog posts
let blogs = [];

// Function to add a new blog
function addBlog() {
    const title = document.getElementById('blog-title').value;
    const description = document.getElementById('blog-description').value;
    const imageUrl = document.getElementById('blog-image').value;

    // Create a new blog object
    const blog = {
        id: Date.now(),
        title: title,
        description: description,
        imageUrl: imageUrl
    };

    // Add blog to the array
    blogs.push(blog);

    // Display the new blog
    displayBlogs();

    // Reset the form
    document.getElementById('blogForm').reset();

    return false;  // Prevent form submission
}

// Function to display all blogs
function displayBlogs() {
    const blogList = document.getElementById('blog-list');
    blogList.innerHTML = '';  // Clear the blog list

    blogs.forEach(blog => {
        const blogPost = document.createElement('div');
        blogPost.classList.add('blog-post');

        blogPost.innerHTML = `
            <h3>${blog.title}</h3>
            <img src="${blog.imageUrl}" alt="Blog Image">
            <p>${blog.description}</p>
            <button onclick="deleteBlog(${blog.id})">Delete Blog</button>
        `;

        blogList.appendChild(blogPost);
    });
}

// Function to delete a blog
function deleteBlog(id) {
    blogs = blogs.filter(blog => blog.id !== id);
    displayBlogs();
}
