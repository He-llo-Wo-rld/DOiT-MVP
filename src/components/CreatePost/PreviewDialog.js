"use client";

import { UI_TEXTS } from "@/constants";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { PreviewContent } from "./PreviewContent";

export function PreviewDialog({
  open,
  onClose,
  formData,
  onSubmit,
  isLoading,
}) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{UI_TEXTS.PREVIEW_TITLE}</DialogTitle>
      <DialogContent>
        <PreviewContent formData={formData} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{UI_TEXTS.EDIT_BUTTON}</Button>
        <Button
          onClick={onSubmit}
          variant="contained"
          color="primary"
          disabled={isLoading}
        >
          {isLoading ? UI_TEXTS.SAVING_BUTTON : UI_TEXTS.CONFIRM_BUTTON}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
