"use client";

import { UI_TEXTS } from "@/constants";
import { useState } from "react";

export const useStepperNavigation = (validateForm, validateStep) => {
  const [activeStep, setActiveStep] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);

  const handleNext = () => {
    if (activeStep < 2 && !validateStep(activeStep)) {
      validateForm();
      return;
    }

    if (activeStep === UI_TEXTS.CREATE_POST_STEPS.length - 1) {
      setPreviewOpen(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const resetStepper = () => {
    setActiveStep(0);
    setPreviewOpen(false);
  };

  return {
    activeStep,
    previewOpen,
    setPreviewOpen,
    handleNext,
    handleBack,
    resetStepper,
  };
};
