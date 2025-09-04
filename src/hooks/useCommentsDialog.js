"use client";

import { useState } from "react";

export const useCommentsDialog = () => {
  const [commentsOpen, setCommentsOpen] = useState(false);

  const handleCommentsClick = () => {
    setCommentsOpen(true);
  };

  const handleCommentsClose = () => {
    setCommentsOpen(false);
  };

  return {
    commentsOpen,
    handleCommentsClick,
    handleCommentsClose,
  };
};
