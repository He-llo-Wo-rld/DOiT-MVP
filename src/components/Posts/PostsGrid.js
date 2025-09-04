"use client";

import { PostCard } from "@/components/Post/PostCard";
import { PostSkeleton } from "@/components/UI/PostSkeleton";
import { POST_CONFIG } from "@/constants";
import { Grid } from "@mui/material";

export function PostsGrid({ posts, isLoading, onDeleteSuccess }) {
  if (isLoading) {
    return (
      <Grid container spacing={4}>
        {Array.from(new Array(POST_CONFIG.SKELETON_COUNT)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PostSkeleton />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid container spacing={4}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <PostCard post={post} onDeleteSuccess={onDeleteSuccess} />
        </Grid>
      ))}
    </Grid>
  );
}
