const express = require("express");
const { getBlogs, createBlog } = require("../../controller/blogs.controller");
const router = express.Router();

// get all blogs
router.get("/", getBlogs);

// create a blog
router.post("/", createBlog);

module.exports = router;
