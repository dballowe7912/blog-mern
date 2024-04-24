const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./utils/db");
const blogRouter = require("./routes/blog.routes");
const cors = require("cors");

const app = express();
try {
	connectDB();
} catch (err) {
	console.log(err);
}

app.use(cors());

app.use("/api/blogs", blogRouter);

app.get("/", (req, res) => {
	res.send("API is running...");
});

app.listen(8080, () => {
	console.log(`Server is listening on port 8080`);
});
