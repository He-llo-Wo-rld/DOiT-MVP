"use client";

import { useMemo, useState } from "react";
import { useDebounce } from "./useDebounce";

export const usePostsSearch = (posts, debounceDelay) => {
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearch = useDebounce(searchInput, debounceDelay);

  const filteredPosts = useMemo(() => {
    if (!posts.length) return [];
    if (!debouncedSearch.trim()) return posts;

    const searchTerm = debouncedSearch.toLowerCase().trim();
    return posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm)
    );
  }, [posts, debouncedSearch]);

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  return {
    searchInput,
    debouncedSearch,
    filteredPosts,
    handleSearchChange,
  };
};
