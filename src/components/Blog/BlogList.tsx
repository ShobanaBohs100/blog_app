import React from "react";
import { Blog } from "./BlogItem";
import { BlogType } from "../../types/blog";
import "./Blog.css";

export const BlogList = ({ blogs }: { blogs: BlogType[] }) => {
  let count = 3;

  let groupedBlogs = blogs.reduce((acc, blog, i) => {
    let index = i % count;
    if (acc[index]) {
      acc[index].push(blog);
    } else {
      acc[index] = [blog];
    }
    return acc;
  }, {} as Record<string, Array<any>>);

  return (
    <section className="blogList">
      {Object.keys(groupedBlogs).map((index) => (
        <div className="column">
          {groupedBlogs[index].map((blog: BlogType, index) => (
            <Blog key={blog._id} {...blog} />
          ))}
        </div>
      ))}
    </section>
  );
};
