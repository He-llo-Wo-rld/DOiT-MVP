"use client";

import {
  Error as ErrorIcon,
  Refresh as RefreshIcon,
} from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Container maxWidth="md" sx={{ mt: 8, textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
            }}
          >
            <ErrorIcon color="error" sx={{ fontSize: 64 }} />
            <Typography variant="h4" component="h1" gutterBottom>
              Щось пішло не так
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Сталася неочікувана помилка. Спробуйте оновити сторінку.
            </Typography>
            <Button
              variant="contained"
              startIcon={<RefreshIcon />}
              onClick={this.handleReload}
              size="large"
            >
              Оновити сторінку
            </Button>
          </Box>
        </Container>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
