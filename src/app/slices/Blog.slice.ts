import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BlogType } from "../../types/blog";
import { createBlog, fetchPost } from "../service/blog.service";
import { AppThunk, RootState } from "../store";

export type BlogForm = {
  title: string;
  content: string;
};

export interface BlogState {
  status: "idle" | "loading" | "failed";
  blogs: BlogType[];
  blogForm: BlogForm;
}

const initialState: BlogState = {
  status: "idle",
  blogs: [],
  blogForm: {
    title: "",
    content: "",
  },
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    updateBlogs: (state, action: PayloadAction<BlogType[]>) => {
      state.blogs = [...action.payload];
    },
    updateBlogForm: (state, action: PayloadAction<BlogForm>) => {
      state.blogForm = {
        ...state.blogForm,
        ...action.payload,
      };
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "idle";
        state.blogs = action.payload;
      })
      .addCase(postBlog.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postBlog.fulfilled, (state, action) => {
        state.status = "idle";
        state.blogForm = initialState.blogForm;
      });
  },
});

// async thunk actions
export const fetchBlogs = createAsyncThunk("blog/fetchAllBlogs", async () => {
  const response = await fetchPost();
  // The value we return becomes the `fulfilled` action payload
  return response;
});

export const postBlog = createAsyncThunk(
  "blog/postBlog",
  async (formData: BlogForm) => {
    const response = await createBlog(formData);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const postBlogAsync = (): AppThunk => async (dispatch, getState) => {
  const formData = selectBlogFormData(getState());
  await dispatch(postBlog(formData));
  return await dispatch(fetchBlogs());
};

// selectors
export const selectBlogs = (state: RootState) => state.blog.blogs;
export const selectBlogFormData = (state: RootState) => state.blog.blogForm;
export const selectFetchStatus = (state: RootState) => state.blog.status;

// Action creators are generated for each case reducer function
export const { updateBlogs, updateBlogForm } = blogSlice.actions;

// reducer
export default blogSlice.reducer;
