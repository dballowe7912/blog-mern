const Blog = require("../models/blog.model");

async function getAllblogs() {
	const blogs = await Blog.find({});
	console.log(blogs);
}

module.exports = {
	getAllblogs,
};
