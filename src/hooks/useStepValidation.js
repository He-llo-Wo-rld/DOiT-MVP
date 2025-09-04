"use client";

import { VALIDATION_RULES } from "@/utils/validation";

export const useStepValidation = (formData) => {
  const validateStep = (step) => {
    const field = step === 0 ? "title" : "body";
    const value = formData[field];
    const config = VALIDATION_RULES[field];

    const trimmedValue = value?.trim() || "";

    if (!trimmedValue && config.required) {
      return false;
    }

    if (
      trimmedValue &&
      config.minLength &&
      trimmedValue.length < config.minLength
    ) {
      return false;
    }

    return true;
  };

  return { validateStep };
};
