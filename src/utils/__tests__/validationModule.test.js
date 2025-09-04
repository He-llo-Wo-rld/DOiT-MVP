import { isFormValid, validateForm } from "../validation";

describe("validation module", () => {
  it("basic test", () => {
    expect(2 + 2).toBe(4);
  });

  it("validateForm returns no errors for valid data", () => {
    const validPost = {
      title: "Valid Title Test",
      body: "This is a valid body content that is long enough to pass validation",
    };

    const errors = validateForm(validPost);
    expect(Object.keys(errors)).toHaveLength(0);
  });

  it("validateForm returns error for empty title", () => {
    const post = {
      title: "",
      body: "Valid body content here",
    };

    const errors = validateForm(post);
    expect(errors.title).toBe("Заголовок є обов'язковим");
    expect(errors.body).toBeUndefined();
  });

  it("validateForm returns error for empty body", () => {
    const post = {
      title: "Valid Title",
      body: "",
    };

    const errors = validateForm(post);
    expect(errors.title).toBeUndefined();
    expect(errors.body).toBe("Текст поста є обов'язковим");
  });

  it("isFormValid returns true for empty errors", () => {
    expect(isFormValid({})).toBe(true);
  });

  it("isFormValid returns false for errors", () => {
    expect(isFormValid({ title: "Error" })).toBe(false);
  });
});
