import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "@/components/ui/Button";

describe("Button", () => {
  it("renders gold variant with charcoal text", () => {
    render(<Button variant="gold">Book free quote</Button>);
    const btn = screen.getByRole("button", { name: /book free quote/i });
    expect(btn.className).toMatch(/bg-gold/);
    expect(btn.className).toMatch(/text-charcoal/);
  });

  it("renders ghost variant with charcoal border", () => {
    render(<Button variant="ghost">Browse</Button>);
    const btn = screen.getByRole("button", { name: /browse/i });
    expect(btn.className).toMatch(/border-charcoal/);
  });

  it("renders link variant in installation green", () => {
    render(<Button variant="link">Read more</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toMatch(/text-green/);
  });

  it("passes through arbitrary type and onClick", () => {
    let clicked = false;
    render(<Button type="submit" onClick={() => { clicked = true; }}>X</Button>);
    const btn = screen.getByRole("button");
    expect(btn.getAttribute("type")).toBe("submit");
    btn.click();
    expect(clicked).toBe(true);
  });
});
