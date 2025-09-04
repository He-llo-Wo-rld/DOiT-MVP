"use client";

import { ROUTES, UI_TEXTS } from "@/constants";
import {
  ArrowBack as ArrowBackIcon,
  Save as SaveIcon,
} from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export function FormNavigation({
  activeStep,
  stepsLength,
  onBack,
  onNext,
  isLoading,
}) {
  const router = useRouter();

  const handleBack = () => {
    if (activeStep === 0) {
      router.push(ROUTES.POSTS);
    } else {
      onBack();
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={handleBack}
      >
        {UI_TEXTS.BACK_BUTTON}
      </Button>
      <Button
        variant="contained"
        endIcon={activeStep === stepsLength - 1 && <SaveIcon />}
        onClick={onNext}
        disabled={isLoading}
      >
        {activeStep === stepsLength - 1
          ? UI_TEXTS.SAVE_BUTTON
          : UI_TEXTS.NEXT_BUTTON}
      </Button>
    </Box>
  );
}
