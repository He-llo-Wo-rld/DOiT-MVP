"use client";

import { POST_CONFIG } from "@/constants";
import { selectCurrentPage, setCurrentPage } from "@/store/slices/postsSlice";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

export const usePostsPagination = (filteredPosts, debouncedSearch) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [debouncedSearch, dispatch]);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POST_CONFIG.POSTS_PER_PAGE;
    return filteredPosts.slice(
      startIndex,
      startIndex + POST_CONFIG.POSTS_PER_PAGE
    );
  }, [filteredPosts, currentPage]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredPosts.length / POST_CONFIG.POSTS_PER_PAGE);
  }, [filteredPosts]);

  const handlePageChange = (event, value) => {
    dispatch(setCurrentPage(value));
  };

  return {
    currentPage,
    paginatedPosts,
    totalPages,
    handlePageChange,
  };
};
