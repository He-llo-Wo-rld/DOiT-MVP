"use client";

import { SNACKBAR_MESSAGES, UI_TEXTS } from "@/constants";
import { getUserInitials } from "@/utils";
import {
  Alert,
  Avatar,
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export function CommentsDialog({
  open,
  onClose,
  comments,
  isLoading,
  isError,
  error,
}) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{UI_TEXTS.COMMENTS_TITLE}</DialogTitle>
      <DialogContent dividers>
        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
            <CircularProgress />
          </Box>
        ) : isError ? (
          <Alert severity="error">
            {SNACKBAR_MESSAGES.LOAD_COMMENTS_ERROR}:{" "}
            {error?.data?.message || UI_TEXTS.UNKNOWN_ERROR}
          </Alert>
        ) : (
          <List>
            {comments?.map((comment, index) => (
              <React.Fragment key={comment.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar>
                      {getUserInitials(comment.name || comment.email)}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={comment.name}
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {comment.email}
                        </Typography>
                        {" — "}
                        {comment.body}
                      </>
                    }
                  />
                </ListItem>
                {index < comments.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        )}
      </DialogContent>
    </Dialog>
  );
}
