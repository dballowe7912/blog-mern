const express = require("express");
const catchAsync = require("../utils/catchAsync");

const {
	getAllblogs,
	getBlogById,
	getBlogsInCategory,
	getBlogsWithTags,
} = require("../controllers/blog.controllers");

const router = express.Router();

router.get("/", catchAsync(getAllblogs));
router.get("/:id", catchAsync(getBlogById));
router.get("/category/:category", catchAsync(getBlogsInCategory));
router.get("/tags/:tag", catchAsync(getBlogsWithTags));

module.exports = router;
