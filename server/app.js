const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./utils/db");

const app = express();
try {
	connectDB();
} catch (err) {
	console.log(err);
}

app.get("/", (req, res) => {
	res.send("API is running...");
});

app.listen(8080, () => {
	console.log(`Server is listening on port 8080`);
});
