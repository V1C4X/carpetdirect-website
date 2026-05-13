import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Input } from "@/components/ui/Input";

describe("Input", () => {
  it("renders label and required indicator", () => {
    render(<Input label="First name" name="firstName" required />);
    expect(screen.getByLabelText(/First name/)).toBeTruthy();
    expect(screen.getByText("*")).toBeTruthy();
  });

  it("renders error message and sets aria-invalid", () => {
    render(<Input label="Phone" name="phone" error="Phone is required" />);
    const field = screen.getByLabelText(/Phone/);
    expect(field.getAttribute("aria-invalid")).toBe("true");
    expect(screen.getByText("Phone is required")).toBeTruthy();
  });
});
