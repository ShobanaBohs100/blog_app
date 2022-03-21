import { BlogForm } from "../slices/Blog.slice";

export const fetchPost = async () => {
  const blogRes = await fetch("/api/blogs");
  const blogs = await blogRes.json();
  return blogs;
};

export const createBlog = async (data: BlogForm) => {
  const blogRes = await fetch("/api/blogs", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const blogs = await blogRes.json();
  return blogs;
};
