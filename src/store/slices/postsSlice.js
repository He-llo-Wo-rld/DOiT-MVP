import { POST_CONFIG } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    searchQuery: "",
    currentPage: 1,
    postsPerPage: POST_CONFIG.POSTS_PER_PAGE,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setSearchQuery, setCurrentPage } = postsSlice.actions;

export const selectSearchQuery = (state) => state.posts.searchQuery;
export const selectCurrentPage = (state) => state.posts.currentPage;
export const selectPostsPerPage = (state) => state.posts.postsPerPage;

export default postsSlice.reducer;
