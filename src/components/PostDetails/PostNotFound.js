"use client";

import { Layout } from "@/components/Layout/Layout";
import { UI_TEXTS } from "@/constants";
import { Alert, Container } from "@mui/material";

export function PostNotFound() {
  return (
    <Layout showComments={false} title={UI_TEXTS.POST_NOT_FOUND_TITLE}>
      <Container maxWidth="md">
        <Alert severity="warning" sx={{ mt: 2 }}>
          {UI_TEXTS.POST_NOT_FOUND_TITLE}
        </Alert>
      </Container>
    </Layout>
  );
}
