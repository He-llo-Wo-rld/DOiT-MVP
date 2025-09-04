"use client";

import { Layout } from "@/components/Layout/Layout";
import { UI_TEXTS } from "@/constants";
import { Alert, Container } from "@mui/material";

export function ErrorState({ error }) {
  return (
    <Layout showComments={false} title={UI_TEXTS.ERROR_TITLE}>
      <Container maxWidth="md">
        <Alert severity="error" sx={{ mt: 2 }}>
          {UI_TEXTS.ERROR_LOADING_POSTS}:{" "}
          {error?.data?.message || UI_TEXTS.UNKNOWN_ERROR}
        </Alert>
      </Container>
    </Layout>
  );
}
