const Blog = require("../models/blog.model");

async function getAllblogs(req, res) {
	const blogs = await Blog.find({});
	res.send(blogs);
}

async function getBlogById(req, res) {
	const blog = await Blog.findById(req.params.id);
	res.send(blog);
}

async function getBlogsInCategory(req, res) {
	const category = req.params.category;
	const blog = await Blog.find({ category });
	res.send(blog);
}

module.exports = {
	getAllblogs,
	getBlogById,
	getBlogsInCategory,
};
