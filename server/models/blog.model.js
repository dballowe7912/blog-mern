const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
		default: "Donald J Ballowe",
	},
	date: {
		type: Date,
		default: Date.now,
	},
	image: {
		type: String,
	},
	category: {
		type: String,
	},
	_user: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
});

// TODO change images into an array
// TODO hook up multer and cloudinary for images
blogSchema.static("findByCategory", function (category) {
	return this.find({ category });
});

module.exports = mongoose.model("Blog", blogSchema);
