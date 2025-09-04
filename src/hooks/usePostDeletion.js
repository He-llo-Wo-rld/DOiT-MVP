"use client";

import { ROUTES, SNACKBAR_MESSAGES, TIMEOUTS } from "@/constants";
import { useDeletePostMutation } from "@/store/api/postsApi";
import { useRouter } from "next/navigation";

export const usePostDeletion = (id, showSnackbar) => {
  const router = useRouter();
  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation();

  const handleDeletePost = async () => {
    try {
      await deletePost(id).unwrap();
      showSnackbar(SNACKBAR_MESSAGES.POST_DELETED, "success");
      setTimeout(() => {
        router.push(ROUTES.POSTS);
      }, TIMEOUTS.REDIRECT_DELAY);
    } catch (error) {
      showSnackbar(SNACKBAR_MESSAGES.DELETE_ERROR, "error");
      console.error("Failed to delete post:", error);
    }
  };

  return { handleDeletePost, isDeleting };
};
