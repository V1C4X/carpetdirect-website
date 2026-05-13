import { test, expect } from "@playwright/test";

test("desktop nav renders all six links + gold Free Quote CTA", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/");
  for (const label of ["Products", "Services", "Gallery", "About", "Contact"]) {
    await expect(page.getByRole("link", { name: label })).toBeVisible();
  }
  await expect(page.getByRole("link", { name: /free quote/i })).toBeVisible();
});

test("mobile nav opens drawer when hamburger tapped", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: /menu/i });
  await expect(trigger).toBeVisible();
  await trigger.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("link", { name: "Products" })).toBeVisible();
});

test("footer shows phone, email, and Otara address", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("021 486 476")).toBeVisible();
  await expect(page.getByText("carpetdirectsale@gmail.com")).toBeVisible();
  await expect(page.getByText(/Otara/i)).toBeVisible();
});
