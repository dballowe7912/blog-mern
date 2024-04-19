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
	const tag = req.params.tag;
	console.log(tag);
	const blogs = await Blog.find({});
	let result = [];
	let index = 0;
	while (index < blogs.length) {
		let blog = blogs[index];
		if (blog.tags.includes(tag)) {
			result.push(blog);
		}
		index++;
	}
	res.send(result);
}

module.exports = {
	getAllblogs,
	getBlogById,
	getBlogsInCategory,
	getBlogsWithTags,
};
