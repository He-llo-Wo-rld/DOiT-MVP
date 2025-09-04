"use client";

import { Typography } from "@mui/material";

export function PreviewContent({ formData }) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        {formData.title}
      </Typography>
      <Typography variant="body1">{formData.body}</Typography>
    </>
  );
}
