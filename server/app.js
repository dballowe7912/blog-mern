const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const blogRouter = require("./routes/blog.routes");

const connectDB = require("./utils/db");
const app = express();
try {
	connectDB();
} catch (err) {
	console.log(err);
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/blogs", require("./routes/blog.routes"));

app.get("/", (req, res) => {
	res.send("API is running...");
});

app.listen(8080, () => {
	console.log(`Server is listening on port 8080`);
});
