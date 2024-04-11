const express = require("express");

const { getAllblogs } = require("../controllers/blog.controllers");

const router = express.Router();

router.get("/blogs", getAllblogs);
