"use client";

import { UI_TEXTS } from "@/constants";
import { Search as SearchIcon } from "@mui/icons-material";
import { Box, InputAdornment, TextField } from "@mui/material";

export function SearchBar({ value, onChange, placeholder }) {
  return (
    <Box sx={{ mb: 4 }}>
      <TextField
        fullWidth
        placeholder={placeholder || UI_TEXTS.SEARCH_PLACEHOLDER}
        variant="outlined"
        value={value}
        onChange={onChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />
    </Box>
  );
}
