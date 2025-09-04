import { useCallback, useState } from "react";

export const useFormValidation = (
  initialValues = {},
  validationConfig = {}
) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validateField = useCallback(
    (field, value) => {
      const config = validationConfig[field];
      if (!config) return "";

      const trimmedValue = value?.trim() || "";

      if (!trimmedValue && config.required) {
        return config.requiredMessage || `${field} є обов'язковим`;
      }

      if (
        trimmedValue &&
        config.minLength &&
        trimmedValue.length < config.minLength
      ) {
        return (
          config.minLengthMessage ||
          `${field} повинен містити щонайменше ${config.minLength} символів`
        );
      }

      return "";
    },
    [validationConfig]
  );

  const validateForm = useCallback(() => {
    const newErrors = {};
    Object.keys(validationConfig).forEach((field) => {
      const error = validateField(field, values[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [values, validationConfig, validateField]);

  const handleChange = useCallback(
    (field) => (event) => {
      const value = event.target.value;
      setValues((prev) => ({ ...prev, [field]: value }));

      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
    },
    [errors]
  );

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
  }, [initialValues]);

  return {
    values,
    errors,
    handleChange,
    validateForm,
    resetForm,
    setErrors,
  };
};
