"use client";

import { UI_TEXTS } from "@/constants";
import { Step, StepLabel, Stepper } from "@mui/material";

const steps = UI_TEXTS.CREATE_POST_STEPS;

export function CreatePostStepper({ activeStep }) {
  return (
    <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
