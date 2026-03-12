import { test, expect } from "@playwright/test";

test.describe("ChatBot", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("opens on button click", async ({ page }) => {
    const chatButton = page.getByRole("button", { name: /open chat/i });
    await chatButton.click();

    await expect(page.getByPlaceholder(/ask about programs/i)).toBeVisible({ timeout: 3000 });
  });

  test("sends message and receives bot response for programs", async ({ page }) => {
    // Open chatbot
    await page.getByRole("button", { name: /open chat/i }).click();

    const input = page.getByPlaceholder(/ask about programs/i);
    await expect(input).toBeVisible({ timeout: 3000 });

    await input.fill("What programs do you offer?");
    await input.press("Enter");

    // Bot responds with program info (typing delay ~800ms)
    await expect(page.getByText(/acca|program|certification/i)).toBeVisible({ timeout: 5000 });
  });

  test("quick reply buttons are visible when open", async ({ page }) => {
    await page.getByRole("button", { name: /open chat/i }).click();

    await expect(page.getByRole("button", { name: /what programs do you offer/i })).toBeVisible({ timeout: 3000 });
  });
});
