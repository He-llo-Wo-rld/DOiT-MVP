"use client";

import { selectDarkMode } from "@/store/slices/themeSlice";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

export function WelcomeMessage() {
  const darkMode = useSelector(selectDarkMode);

  return (
    <>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          mb: 2,
          textShadow: darkMode
            ? "0 2px 8px rgba(0,0,0,0.5)"
            : "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        Ласкаво просимо до DOiT MVP
      </Typography>

      <Typography
        variant="h5"
        component="h2"
        sx={{
          mb: 4,
          opacity: 0.95,
          fontSize: { xs: "1.2rem", md: "1.5rem" },
          maxWidth: "800px",
          textShadow: darkMode
            ? "0 1px 4px rgba(0,0,0,0.3)"
            : "0 1px 4px rgba(0,0,0,0.1)",
        }}
      >
        Ми працюємо над MVP освітньої платформи. Приєднуйтесь до команди!
      </Typography>
    </>
  );
}
