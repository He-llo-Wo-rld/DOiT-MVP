"use client";

import { UI_TEXTS } from "@/constants";
import { Box, Typography } from "@mui/material";

export function EmptyState({ hasSearchQuery }) {
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h6" color="text.secondary">
        {hasSearchQuery
          ? UI_TEXTS.POSTS_NOT_FOUND_FOR_QUERY
          : UI_TEXTS.POSTS_NOT_FOUND}
      </Typography>
    </Box>
  );
}
