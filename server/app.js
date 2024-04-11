const express = require("express");
const mongoose = require("mongoose");

const app = express();

const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/mern-blog";
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
	console.log("Database connected");
});

app.get("/", (req, res) => {
	res.send("API is running...");
});

app.listen(8080, () => {
	console.log(`Server is listening on port 8080`);
});
