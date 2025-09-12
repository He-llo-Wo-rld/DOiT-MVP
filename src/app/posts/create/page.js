"use client";

import {
  CreatePostStepper,
  FormNavigation,
  PreviewDialog,
} from "@/components/CreatePost";
import { FormStep } from "@/components/Post/FormStep";
import { CustomSnackbar } from "@/components/UI/CustomSnackbar";
import { UI_TEXTS } from "@/constants";
import { useLayoutContext } from "@/context/LayoutContext";
import {
  useFormValidation,
  usePostSubmission,
  useSnackbar,
  useStepValidation,
  useStepperNavigation,
} from "@/hooks";
import { VALIDATION_RULES } from "@/utils/validation";
import { Card, CardContent, Container } from "@mui/material";
import { useEffect } from "react";

export default function CreatePostPage() {
  const { snackbarProps, showSnackbar } = useSnackbar();
  const { setTitle } = useLayoutContext();

  const {
    values: formData,
    errors,
    handleChange,
    validateForm,
    resetForm,
  } = useFormValidation({ title: "", body: "" }, VALIDATION_RULES);

  const { validateStep } = useStepValidation(formData);

  const {
    activeStep,
    previewOpen,
    setPreviewOpen,
    handleNext,
    handleBack,
    resetStepper,
  } = useStepperNavigation(validateForm, validateStep);

  const { handleSubmit, isLoading } = usePostSubmission(
    showSnackbar,
    resetForm,
    resetStepper
  );

  useEffect(() => {
    setTitle(UI_TEXTS.CREATE_POST_TITLE);
  }, [setTitle]);

  return (
    <Container maxWidth="md">
      <CreatePostStepper activeStep={activeStep} />

      <Card>
        <CardContent>
          <FormStep
            step={activeStep}
            formData={formData}
            errors={errors}
            onChange={handleChange}
          />

          <FormNavigation
            activeStep={activeStep}
            stepsLength={UI_TEXTS.CREATE_POST_STEPS.length}
            onBack={handleBack}
            onNext={handleNext}
            isLoading={isLoading}
          />
        </CardContent>
      </Card>

      <PreviewDialog
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        formData={formData}
        onSubmit={() => handleSubmit(formData)}
        isLoading={isLoading}
      />

      <CustomSnackbar {...snackbarProps} />
    </Container>
  );
}
