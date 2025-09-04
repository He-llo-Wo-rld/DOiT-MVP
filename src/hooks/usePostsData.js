"use client";

import { useGetPostsQuery } from "@/store/api/postsApi";

export const usePostsData = () => {
  const { data: posts, isLoading, isError, error } = useGetPostsQuery();

  return {
    posts: posts || [],
    isLoading,
    isError,
    error,
  };
};
