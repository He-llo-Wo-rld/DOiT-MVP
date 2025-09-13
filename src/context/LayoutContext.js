"use client";

import { createContext, useContext, useRef, useState } from "react";

const LayoutContext = createContext(null);

export const LayoutProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [commentsCount, setCommentsCount] = useState(0);
  const onCommentsClickRef = useRef(null);

  const setOnCommentsClick = (fn) => {
    onCommentsClickRef.current = fn;
  };

  const handleCommentsClick = () => {
    if (onCommentsClickRef.current) {
      onCommentsClickRef.current();
    }
  };

  return (
    <LayoutContext.Provider
      value={{
        title,
        setTitle,
        showComments,
        setShowComments,
        onCommentsClick: handleCommentsClick,
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
