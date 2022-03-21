import React, { useCallback, useEffect, useState } from "react";

import Logo from "./images/Logo.svg";
import "./App.css";
import { BlogList, BlogCreateForm } from "./components/Blog";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  selectBlogs,
  fetchBlogs,
  selectBlogFormData,
  updateBlogForm,
  postBlogAsync,
} from "./app/slices/Blog.slice";

function App() {
  const blogs = useAppSelector(selectBlogs);
  const blogFormData = useAppSelector(selectBlogFormData);
  const dispatch = useAppDispatch();

  const fetchAllBlogs = useCallback(() => dispatch(fetchBlogs()), [dispatch]);

  const onSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    if (!blogFormData.content || !blogFormData.title) return;
    e.preventDefault();
    dispatch(postBlogAsync());
  };

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    let { name, value } = e.currentTarget;

    dispatch(updateBlogForm({ ...blogFormData, [name]: value }));
  };

  useEffect(() => {
    fetchAllBlogs();
  }, [fetchAllBlogs]);

  return (
    <div className="App">
      <header className="AppHeader">
        <img src={Logo} alt="thera blog logo text" />
      </header>
      <main>
        <BlogCreateForm
          data={blogFormData}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
        />
        <BlogList blogs={blogs} />
      </main>
    </div>
  );
}

export default App;
