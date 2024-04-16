const express = require("express");
const catchAsync = require("../utils/catchAsync");

const {
	getAllblogs,
	getBlogById,
	getBlogsInCategory,
	getBlogsWithTags,
} = require("../controllers/blog.controllers");

const router = express.Router();

router.get("/blogs", catchAsync(getAllblogs));
router.get("/blogs/:id", catchAsync(getBlogById));
router.get("/blogs/category/:category", catchAsync(getBlogsInCategory));
router.get("/blogs/tags/:tag", catchAsync(getBlogsWithTags));

module.exports = router;
