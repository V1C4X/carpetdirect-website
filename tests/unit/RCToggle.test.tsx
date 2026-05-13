import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { RCToggle } from "@/components/ui/RCToggle";

describe("RCToggle", () => {
  it("renders both options and highlights active", () => {
    render(<RCToggle value="residential" onChange={() => {}} />);
    const res = screen.getByRole("button", { name: /residential/i });
    const com = screen.getByRole("button", { name: /commercial/i });
    expect(res.getAttribute("aria-pressed")).toBe("true");
    expect(com.getAttribute("aria-pressed")).toBe("false");
  });

  it("calls onChange when commercial is clicked", () => {
    const onChange = vi.fn();
    render(<RCToggle value="residential" onChange={onChange} />);
    fireEvent.click(screen.getByRole("button", { name: /commercial/i }));
    expect(onChange).toHaveBeenCalledWith("commercial");
  });
});
