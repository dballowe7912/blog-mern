const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");

const {
	getAllblogs,
	getBlogById,
	getBlogsInCategory,
	getBlogsWithTags,
} = require("../controllers/blog.controllers");

router.get("/", catchAsync(getAllblogs));
router.get("/:id", catchAsync(getBlogById));
router.get("/category/:category", catchAsync(getBlogsInCategory));
router.get("/tags/:tag", catchAsync(getBlogsWithTags));

module.exports = router;
