const Blog = require("../models/blog.model");

// GET /blogs
async function getAllblogs(req, res) {
	const blogs = await Blog.find({});
	res.send(blogs);
}

// GET /blogs/:id
async function getBlogById(req, res) {
	const blog = await Blog.findById(req.params.id);
	res.send(blog);
}

// GET /blogs/category/:category
async function getBlogsInCategory(req, res) {
	const category = req.params.category;
	const blog = await Blog.find({ category });
	res.send(blog);
}

// GET /blogs/tags/:tag
async function getBlogsWithTags(req, res) {
	const blogs = await Blog.find({});
	const tagged = blogs.filter(tag === req.params.tag);
	res.send(blogs);
}

module.exports = {
	getAllblogs,
	getBlogById,
	getBlogsInCategory,
	getBlogsWithTags,
};
