const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");

let NODE_ENV = process.env.NODE_ENV;
let PORT = process.env.PORT;

const connectDB = require("./utils/db");
const app = express();
try {
	connectDB();
} catch (err) {
	console.log(err);
}
if (NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());

app.use("/api/blogs", require("./routes/blog.routes"));

app.get("/", (req, res) => {
	res.send("API is running...");
});

app.listen(8080, () => {
	console.log(`Server is listening on port ${PORT} in ${NODE_ENV} mode.`);
});
