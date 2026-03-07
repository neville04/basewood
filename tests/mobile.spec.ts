import { test, expect } from "@playwright/test";

test.describe("Mobile viewport", () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test("mobile menu toggles on hamburger click", async ({ page }) => {
    await page.goto("/");

    // Hamburger button
    const menuButton = page.getByRole("button", { name: /toggle menu/i });
    await expect(menuButton).toBeVisible();

    // Menu should be hidden initially (desktop links hidden on mobile)
    await menuButton.click();

    // Mobile menu links should appear
    await expect(page.getByRole("link", { name: /home/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /about/i })).toBeVisible();
  });

  test("mobile menu closes when navigating", async ({ page }) => {
    await page.goto("/");
    const menuButton = page.getByRole("button", { name: /toggle menu/i });
    await menuButton.click();

    await page.getByRole("link", { name: /about/i }).first().click();
    await expect(page).toHaveURL("/about");
  });

  test("enroll form is usable on mobile", async ({ page }) => {
    await page.goto("/enroll");
    await expect(page.getByLabel(/full name/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /submit enrollment/i })).toBeVisible();
  });
});
