const express = require("express");
const catchAsync = require("../utils/catchAsync");

const { getAllblogs } = require("../controllers/blog.controllers");

const router = express.Router();

router.get("/blogs", catchAsync(getAllblogs));

module.exports = router;
