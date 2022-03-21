const Blog = require("../models/blog.model");
const blogs = [{ id: 1, title: "Blog 1", content: "content 1" }];

const getBlogs = (req, res) => {
  Blog.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving messages.",
      });
    });
};

const createBlog = (req, res) => {
  const blogIndex = blogs.length + 1;
  const { title, content } = req.body;

  const blog = new Blog({
    id: blogIndex,
    title: title,
    content: content,
  });

  blog
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Message.",
      });
    });
};

exports.createBlog = createBlog;
exports.getBlogs = getBlogs;
