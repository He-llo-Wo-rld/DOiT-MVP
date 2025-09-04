"use client";

import { store } from "@/store";
import { selectDarkMode } from "@/store/slices/themeSlice";
import { getTheme } from "@/theme/theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Provider, useSelector } from "react-redux";
import { ErrorBoundary } from "./ErrorBoundary/ErrorBoundary";

function ThemeWrapper({ children }) {
  const darkMode = useSelector(selectDarkMode);
  const theme = getTheme(darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>{children}</ErrorBoundary>
    </ThemeProvider>
  );
}

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <ThemeWrapper>{children}</ThemeWrapper>
    </Provider>
  );
}
