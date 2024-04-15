const Blog = require("../models/blog.model");

async function getAllblogs(req, res) {
	const blogs = await Blog.find({});
	res.send(blogs);
}

module.exports = {
	getAllblogs,
};
