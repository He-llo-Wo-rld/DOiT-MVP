"use client";

import { useGetCommentsQuery, useGetPostByIdQuery } from "@/store/api/postsApi";

export const usePostDetails = (id) => {
  const {
    data: post,
    isLoading: isLoadingPost,
    isError: isErrorPost,
    error: errorPost,
  } = useGetPostByIdQuery(id, { skip: !id });

  const {
    data: comments,
    isLoading: isLoadingComments,
    isError: isErrorComments,
    error: errorComments,
  } = useGetCommentsQuery(id, { skip: !id });

  return {
    post,
    comments,
    isLoadingPost,
    isErrorPost,
    errorPost,
    isLoadingComments,
    isErrorComments,
    errorComments,
  };
};
