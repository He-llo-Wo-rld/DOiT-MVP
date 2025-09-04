import { POST_CONFIG } from "@/constants";

export const truncateText = (
  text,
  maxLength = POST_CONFIG.MAX_PREVIEW_LENGTH
) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

export const getAvatarLetter = (text) => {
  return text?.charAt(0).toUpperCase() || "?";
};

export const validateField = (field, value, config) => {
  const trimmedValue = value?.trim() || "";

  if (!trimmedValue && config.required) {
    return config.requiredMessage || `${field} is required`;
  }

  if (
    trimmedValue &&
    config.minLength &&
    trimmedValue.length < config.minLength
  ) {
    return (
      config.minLengthMessage ||
      `${field} must be at least ${config.minLength} characters`
    );
  }

  return "";
};

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getUserInitials = (title, userId = 1) => {
  return title?.charAt(0).toUpperCase() || "?";
};

export const formatUserName = (userId = 1) => {
  return `User ${userId}`;
};
