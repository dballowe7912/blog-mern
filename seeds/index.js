const mongoose = require("mongoose");
const blogs = require("./blogs");
const users = require("./users");
const Blog = require("../server/models/blog.model");
const User = require("../server/models/user.model");

const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/mern-blog";
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
	console.log("Database connected");
});

const seedDB = async () => {
	await Blog.deleteMany({});
	await User.deleteMany({});
	for (let i = 0; i < blogs.length; i++) {
		const b = new Blog({
			title: blogs[i].title,
			body: blogs[i].body,
			author: blogs[i].author,
			date: blogs[i].date,
			image: blogs[i].image,
			imageArr: blogs[i].imageArr,
			category: blogs[i].category,
			tags: blogs[i].tags,
		});
		await b.save();
	}
	for (let i = 0; i < users.length; i++) {
		const u = new User({
			username: users[i].username,
			email: users[i].email,
			password: users[i].password,
			isAdmin: users[i].isAdmin,
		});
		await u.save();
	}
};

seedDB().then(() => {
	mongoose.connection.close();
});
