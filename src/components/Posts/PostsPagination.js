"use client";

import { Box, Pagination } from "@mui/material";

export function PostsPagination({ totalPages, currentPage, onChange }) {
  if (totalPages <= 1) return null;

  return (
    <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={onChange}
        color="primary"
      />
    </Box>
  );
}
