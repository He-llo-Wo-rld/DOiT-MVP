"use client";

import { ROUTES, THEME_COLORS } from "@/constants";
import { Add as AddIcon, List as ListIcon } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import { useRouter } from "next/navigation";

export function ActionButtons() {
  const router = useRouter();

  return (
    <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
      <Grid item>
        <Button
          variant="contained"
          size="large"
          startIcon={<ListIcon />}
          onClick={() => router.push(ROUTES.POSTS)}
          sx={{
            bgcolor: THEME_COLORS.PRIMARY,
            color: "white",
            "&:hover": {
              bgcolor: THEME_COLORS.PRIMARY_HOVER,
              transform: "translateY(-2px)",
            },
            borderRadius: 2,
            px: 4,
            py: 1.5,
            fontSize: "1.1rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            boxShadow: `0 4px 12px rgba(33, 150, 243, 0.4)`,
            transition: "all 0.3s ease",
          }}
        >
          ПЕРЕГЛЯНУТИ ПОСТИ
        </Button>
      </Grid>

      <Grid item>
        <Button
          variant="outlined"
          size="large"
          startIcon={<AddIcon />}
          onClick={() => router.push(ROUTES.CREATE_POST)}
          sx={{
            borderColor: THEME_COLORS.PRIMARY,
            color: THEME_COLORS.PRIMARY,
            borderWidth: 2,
            "&:hover": {
              borderColor: THEME_COLORS.PRIMARY_HOVER,
              bgcolor: `rgba(33, 150, 243, 0.1)`,
              transform: "translateY(-2px)",
              borderWidth: 2,
            },
            borderRadius: 2,
            px: 4,
            py: 1.5,
            fontSize: "1.1rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
          }}
        >
          ДОДАТИ ПОСТ
        </Button>
      </Grid>
    </Grid>
  );
}
