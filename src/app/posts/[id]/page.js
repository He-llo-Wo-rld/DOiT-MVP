"use client";

import {
  CommentsDialog,
  ErrorState,
  LoadingState,
  PostCard,
  PostNotFound,
} from "@/components/PostDetails";
import { CustomSnackbar } from "@/components/UI/CustomSnackbar";
import { UI_TEXTS } from "@/constants";
import { useLayoutContext } from "@/context/LayoutContext";
import {
  useCommentsDialog,
  usePostDeletion,
  usePostDetails,
  useSnackbar,
} from "@/hooks";
import { Container } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function PostDetailsPage() {
  const params = useParams();
  const { id } = params;

  const { snackbarProps, showSnackbar } = useSnackbar();
  const { setTitle, setShowComments, setOnCommentsClick, setCommentsCount } =
    useLayoutContext();

  const {
    post,
    comments,
    isLoadingPost,
    isErrorPost,
    errorPost,
    isLoadingComments,
    isErrorComments,
    errorComments,
  } = usePostDetails(id);

  const { handleDeletePost, isDeleting } = usePostDeletion(id, showSnackbar);

  const { commentsOpen, handleCommentsClick, handleCommentsClose } =
    useCommentsDialog();

  useEffect(() => {
    if (post) {
      setTitle(UI_TEXTS.POST_DETAILS_TITLE(post.id));
      setShowComments(true);
      setOnCommentsClick(() => handleCommentsClick);
      setCommentsCount(comments?.length || 0);
    }

    return () => {
      setShowComments(false);
      setOnCommentsClick(null);
      setCommentsCount(0);
    };
  }, [
    post,
    comments,
    handleCommentsClick,
    setTitle,
    setShowComments,
    setOnCommentsClick,
    setCommentsCount,
  ]);

  if (isLoadingPost) {
    return <LoadingState />;
  }

  if (isErrorPost) {
    return <ErrorState error={errorPost} />;
  }

  if (!post) {
    return <PostNotFound />;
  }

  return (
    <Container maxWidth="md">
      <PostCard
        post={post}
        onDelete={handleDeletePost}
        isDeleting={isDeleting}
      />

      <CommentsDialog
        open={commentsOpen}
        onClose={handleCommentsClose}
        comments={comments}
        isLoading={isLoadingComments}
        isError={isErrorComments}
        error={errorComments}
      />

      <CustomSnackbar {...snackbarProps} />
    </Container>
  );
}
