"use client";

import { selectDarkMode } from "@/store/slices/themeSlice";
import { Box, Container, Paper } from "@mui/material";
import { useSelector } from "react-redux";

export function HeroSection({ children }) {
  const darkMode = useSelector(selectDarkMode);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 6 }}>
        <Paper
          sx={{
            background: darkMode
              ? "linear-gradient(135deg, #1A202C 0%, #2D3748 35%, #553C9A 75%, #6B46C1 100%)"
              : "linear-gradient(135deg, #cfe8fc 0%, #f8e8f8 100%)",
            color: darkMode ? "#fff" : "#333",
            borderRadius: 4,
            p: 6,
            textAlign: "center",
            minHeight: 350,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: darkMode
              ? "0 8px 32px rgba(0, 0, 0, 0.6)"
              : "0 8px 32px rgba(0, 0, 0, 0.12)",
          }}
        >
          {children}
        </Paper>
      </Box>
    </Container>
  );
}
