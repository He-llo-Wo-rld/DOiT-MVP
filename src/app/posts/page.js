"use client";

import {
  AddPostButton,
  EmptyState,
  ErrorState,
  LoadingState,
  PostsGrid,
  PostsPagination,
  SearchBar,
} from "@/components/Posts";
import { CustomSnackbar } from "@/components/UI/CustomSnackbar";
import { ROUTES, SNACKBAR_MESSAGES, TIMEOUTS, UI_TEXTS } from "@/constants";
import { useLayoutContext } from "@/context/LayoutContext";
import {
  usePostsData,
  usePostsPagination,
  usePostsSearch,
  useSnackbar,
} from "@/hooks";
import { Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PostsPage = () => {
  const router = useRouter();
  const { snackbarProps, showSnackbar } = useSnackbar();
  const { setTitle } = useLayoutContext();

  const { posts, isLoading, isError, error } = usePostsData();

  const { searchInput, debouncedSearch, filteredPosts, handleSearchChange } =
    usePostsSearch(posts, TIMEOUTS.DEBOUNCE_DELAY);

  const { currentPage, paginatedPosts, totalPages, handlePageChange } =
    usePostsPagination(filteredPosts, debouncedSearch);

  useEffect(() => {
    setTitle(UI_TEXTS.ALL_POSTS_TITLE);
  }, [setTitle]);

  const handleAddPost = () => {
    router.push(ROUTES.CREATE_POST);
  };

  const handleDeleteSuccess = () => {
    showSnackbar(SNACKBAR_MESSAGES.POST_DELETED, "success");
  };

  const renderContent = () => {
    if (isLoading) {
      return <LoadingState />;
    }

    if (isError) {
      return <ErrorState error={error} />;
    }

    if (paginatedPosts.length === 0) {
      return <EmptyState hasSearchQuery={!!debouncedSearch.trim()} />;
    }

    return (
      <PostsGrid
        posts={paginatedPosts}
        isLoading={false}
        onDeleteSuccess={handleDeleteSuccess}
      />
    );
  };

  return (
    <Container maxWidth="lg">
      <SearchBar value={searchInput} onChange={handleSearchChange} />

      {renderContent()}

      <PostsPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onChange={handlePageChange}
      />

      <AddPostButton onClick={handleAddPost} />

      <CustomSnackbar {...snackbarProps} />
    </Container>
  );
};

export default PostsPage;
