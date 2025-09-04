"use client";

import { Alert, Snackbar } from "@mui/material";

export function CustomSnackbar({
  open,
  message,
  severity = "success",
  onClose,
  autoHideDuration = 6000,
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        sx={{ width: "100%" }}
        variant="filled"
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
