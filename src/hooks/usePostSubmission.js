"use client";

import {
  DEFAULT_USER_ID,
  ROUTES,
  SNACKBAR_MESSAGES,
  TIMEOUTS,
} from "@/constants";
import { useCreatePostMutation } from "@/store/api/postsApi";
import { delay } from "@/utils";
import { useRouter } from "next/navigation";

export const usePostSubmission = (showSnackbar, resetForm, resetStepper) => {
  const router = useRouter();
  const [createPost, { isLoading }] = useCreatePostMutation();

  const handleSubmit = async (formData) => {
    try {
      const postData = {
        title: formData.title.trim(),
        body: formData.body.trim(),
        userId: DEFAULT_USER_ID,
      };

      await createPost(postData).unwrap();
      resetStepper();
      showSnackbar(SNACKBAR_MESSAGES.POST_CREATED, "success");

      resetForm();

      await delay(TIMEOUTS.SUCCESS_DELAY);
      router.push(ROUTES.POSTS);
    } catch (error) {
      showSnackbar(SNACKBAR_MESSAGES.CREATE_ERROR, "error");
      console.error("Failed to create post:", error);
    }
  };

  return { handleSubmit, isLoading };
};
