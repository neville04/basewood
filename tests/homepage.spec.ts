import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads and shows hero section", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("section").filter({ hasText: /immersive|executive|peer/i }).first()).toBeVisible({ timeout: 5000 });
  });

  test("shows programs section", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: /professional certification|our programs/i })).toBeVisible({ timeout: 5000 });
    await expect(page.getByText(/acca/i)).toBeVisible();
    await expect(page.getByText(/cpa/i)).toBeVisible();
    await expect(page.getByText(/cilt/i)).toBeVisible();
  });

  test("View all programs link goes to programs page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /view all programs/i }).first().click();
    await expect(page).toHaveURL("/programs");
  });

  test("hero carousel has slides", async ({ page }) => {
    await page.goto("/");
    // Carousel images or labels
    const slideContent = page.locator('img[alt*="Immersive"], img[alt*="Executive"], img[alt*="Peer"]').first();
    await expect(slideContent).toBeVisible({ timeout: 5000 });
  });
});
