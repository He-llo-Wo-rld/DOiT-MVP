"use client";

import { Layout } from "@/components/Layout/Layout";
import {
  CommentsDialog,
  ErrorState,
  LoadingState,
  PostCard,
  PostNotFound,
} from "@/components/PostDetails";
import { CustomSnackbar } from "@/components/UI/CustomSnackbar";
import { UI_TEXTS } from "@/constants";
import {
  useCommentsDialog,
  usePostDeletion,
  usePostDetails,
  useSnackbar,
} from "@/hooks";
import { Container } from "@mui/material";
import { useParams } from "next/navigation";

export default function PostDetailsPage() {
  const params = useParams();
  const { id } = params;

  const { snackbarProps, showSnackbar } = useSnackbar();

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
    <Layout
      showComments={true}
      onCommentsClick={handleCommentsClick}
      commentsCount={comments?.length || 0}
      title={UI_TEXTS.POST_DETAILS_TITLE(post.id)}
    >
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
    </Layout>
  );
}
