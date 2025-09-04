import { POST_CONFIG, VALIDATION_MESSAGES } from "@/constants";

export const VALIDATION_RULES = {
  title: {
    required: true,
    minLength: POST_CONFIG.MIN_TITLE_LENGTH,
    requiredMessage: VALIDATION_MESSAGES.TITLE_REQUIRED,
    minLengthMessage: VALIDATION_MESSAGES.TITLE_MIN_LENGTH,
  },
  body: {
    required: true,
    minLength: POST_CONFIG.MIN_BODY_LENGTH,
    requiredMessage: VALIDATION_MESSAGES.BODY_REQUIRED,
    minLengthMessage: VALIDATION_MESSAGES.BODY_MIN_LENGTH,
  },
};

export const validateField = (
  field,
  value,
  rules = VALIDATION_RULES[field]
) => {
  if (!rules) return "";

  const trimmedValue = value?.trim() || "";

  if (!trimmedValue && rules.required) {
    return rules.requiredMessage || `${field} є обов'язковим`;
  }

  if (
    trimmedValue &&
    rules.minLength &&
    trimmedValue.length < rules.minLength
  ) {
    return (
      rules.minLengthMessage ||
      `${field} повинен містити щонайменше ${rules.minLength} символів`
    );
  }

  return "";
};

export const validateForm = (values, validationRules = VALIDATION_RULES) => {
  const errors = {};

  Object.keys(validationRules).forEach((field) => {
    const error = validateField(field, values[field], validationRules[field]);
    if (error) errors[field] = error;
  });

  return errors;
};

export const isFormValid = (errors) => {
  return Object.keys(errors).length === 0;
};
