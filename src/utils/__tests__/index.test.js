import {
  delay,
  formatUserName,
  getAvatarLetter,
  getUserInitials,
  truncateText,
  validateField,
} from "@/utils";

describe("Utils Functions", () => {
  describe("truncateText", () => {
    it("should return text as is if shorter than maxLength", () => {
      const text = "Short text";
      expect(truncateText(text, 20)).toBe("Short text");
    });

    it("should truncate text and add ellipsis if longer than maxLength", () => {
      const text = "This is a very long text that should be truncated";
      expect(truncateText(text, 10)).toBe("This is a ...");
    });

    it("should handle null or undefined text", () => {
      expect(truncateText(null)).toBe(null);
      expect(truncateText(undefined)).toBe(undefined);
      expect(truncateText("")).toBe("");
    });

    it("should use default maxLength from config", () => {
      const text = "a".repeat(150);
      const result = truncateText(text);
      expect(result).toBe("a".repeat(100) + "...");
    });
  });

  describe("getAvatarLetter", () => {
    it("should return first letter uppercase", () => {
      expect(getAvatarLetter("hello")).toBe("H");
      expect(getAvatarLetter("world")).toBe("W");
    });

    it("should handle empty or null input", () => {
      expect(getAvatarLetter("")).toBe("?");
      expect(getAvatarLetter(null)).toBe("?");
      expect(getAvatarLetter(undefined)).toBe("?");
    });

    it("should handle already uppercase letter", () => {
      expect(getAvatarLetter("HELLO")).toBe("H");
    });
  });

  describe("validateField", () => {
    it("should return error message for required empty field", () => {
      const result = validateField("Title", "", { required: true });
      expect(result).toBe("Title is required");
    });

    it("should return custom required message", () => {
      const config = {
        required: true,
        requiredMessage: "Custom required message",
      };
      const result = validateField("Title", "", config);
      expect(result).toBe("Custom required message");
    });

    it("should return error for field shorter than minLength", () => {
      const config = { minLength: 5 };
      const result = validateField("Title", "abc", config);
      expect(result).toBe("Title must be at least 5 characters");
    });

    it("should return empty string for valid field", () => {
      const config = { required: true, minLength: 3 };
      const result = validateField("Title", "Valid title", config);
      expect(result).toBe("");
    });

    it("should handle whitespace-only input", () => {
      const config = { required: true };
      const result = validateField("Title", "   ", config);
      expect(result).toBe("Title is required");
    });
  });

  describe("delay", () => {
    it("should delay execution", async () => {
      const start = Date.now();
      await delay(100);
      const end = Date.now();
      expect(end - start).toBeGreaterThanOrEqual(90);
    });
  });

  describe("getUserInitials", () => {
    it("should return first letter of title", () => {
      expect(getUserInitials("Hello World")).toBe("H");
      expect(getUserInitials("amazing post")).toBe("A");
    });

    it("should handle empty title", () => {
      expect(getUserInitials("")).toBe("?");
      expect(getUserInitials(null)).toBe("?");
    });

    it("should work with userId parameter", () => {
      expect(getUserInitials("Test Title", 5)).toBe("T");
    });
  });

  describe("formatUserName", () => {
    it("should format user name with ID", () => {
      expect(formatUserName(1)).toBe("User 1");
      expect(formatUserName(5)).toBe("User 5");
    });

    it("should use default userId if not provided", () => {
      expect(formatUserName()).toBe("User 1");
    });
  });
});
