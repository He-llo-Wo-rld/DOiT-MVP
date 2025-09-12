"use client";

import { createContext, useContext, useState } from "react";

const LayoutContext = createContext(null);

export const LayoutProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [onCommentsClick, setOnCommentsClick] = useState(null);
  const [commentsCount, setCommentsCount] = useState(0);

  return (
    <LayoutContext.Provider
      value={{
        title,
        setTitle,
        showComments,
        setShowComments,
        onCommentsClick,
        setOnCommentsClick,
        commentsCount,
        setCommentsCount,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayoutContext must be used within a LayoutProvider");
  }
  return context;
};
