import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { PageHeader } from "@/components/ui/PageHeader";

describe("PageHeader", () => {
  it("renders eyebrow, h1, and intro paragraph", () => {
    render(<PageHeader eyebrow="Services" title="What we do." intro="Auckland-wide flooring." />);
    expect(screen.getByText("Services")).toBeTruthy();
    expect(screen.getByRole("heading", { level: 1, name: "What we do." })).toBeTruthy();
    expect(screen.getByText("Auckland-wide flooring.")).toBeTruthy();
  });

  it("omits intro when not provided", () => {
    render(<PageHeader eyebrow="About" title="Our story." />);
    expect(screen.queryByText(/Auckland-wide/)).toBeNull();
  });
});
