const mongoose = require("mongoose");

function connectDB() {
	const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/mern-blog";
	mongoose.connect(dbUrl);
	const db = mongoose.connection;
	db.on("error", console.error.bind(console, "connection error: "));
	db.once("open", () => {
		console.log("Database Connected");
	});
}

module.exports = connectDB;
