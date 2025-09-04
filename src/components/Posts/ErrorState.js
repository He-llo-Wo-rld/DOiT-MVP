"use client";

import { UI_TEXTS } from "@/constants";
import { Alert } from "@mui/material";

export function ErrorState({ error }) {
  return (
    <Alert severity="error">
      {UI_TEXTS.ERROR_LOADING_POSTS}: {error?.message || UI_TEXTS.UNKNOWN_ERROR}
    </Alert>
  );
}
