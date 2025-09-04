"use client";

import { Layout } from "@/components/Layout/Layout";
import { UI_TEXTS } from "@/constants";
import { Box, CircularProgress, Container } from "@mui/material";

export function LoadingState() {
  return (
    <Layout showComments={false} title={UI_TEXTS.LOADING_TITLE}>
      <Container maxWidth="md">
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress size={60} />
        </Box>
      </Container>
    </Layout>
  );
}
