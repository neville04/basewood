import { test, expect } from "@playwright/test";

test.describe("Enroll page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/enroll");
  });

  test("renders enrollment form with all fields", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /start your/i })).toBeVisible();
    await expect(page.getByLabel(/full name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/phone number/i)).toBeVisible();
    await expect(page.getByLabel(/program/i)).toBeVisible();
    await expect(page.getByLabel(/additional message/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /submit enrollment/i })).toBeVisible();
  });

  test("program dropdown has options", async ({ page }) => {
    const select = page.getByLabel(/program/i);
    await expect(select).toBeVisible();
    await select.click();
    await expect(page.getByRole("option", { name: /acca/i })).toBeVisible();
    await expect(page.getByRole("option", { name: /cim/i })).toBeVisible();
    await expect(page.getByRole("option", { name: /other/i })).toBeVisible();
  });

  test("required fields show validation on empty submit", async ({ page }) => {
    const submitBtn = page.getByRole("button", { name: /submit enrollment/i });
    await submitBtn.click();
    // HTML5 validation - form should not submit, check for required attribute
    const nameInput = page.getByLabel(/full name/i);
    await expect(nameInput).toHaveAttribute("required", "");
  });

  test("form can be filled and submit button is enabled", async ({ page }) => {
    await page.getByLabel(/full name/i).fill("Test User");
    await page.getByLabel(/email/i).fill("test@example.com");
    await page.getByLabel(/phone number/i).fill("+256700000000");
    await page.getByLabel(/program/i).selectOption({ label: /acca/i });

    const submitBtn = page.getByRole("button", { name: /submit enrollment/i });
    await expect(submitBtn).toBeEnabled();
  });

  test("submit shows loading state", async ({ page }) => {
    // Mock FormSubmit to avoid real submission
    await page.route("**/formsubmit.co/**", async (route) => {
      await new Promise((r) => setTimeout(r, 500));
      await route.fulfill({ status: 200, body: "{}" });
    });

    await page.getByLabel(/full name/i).fill("Test User");
    await page.getByLabel(/email/i).fill("test@example.com");
    await page.getByLabel(/phone number/i).fill("+256700000000");
    await page.getByLabel(/program/i).selectOption({ label: /acca/i });

    const submitBtn = page.getByRole("button", { name: /submit enrollment/i });
    await submitBtn.click();

    // Button shows loading state
    await expect(page.getByRole("button", { name: /sending/i })).toBeVisible();
  });

  test("success state after successful submission", async ({ page }) => {
    await page.route("**/formsubmit.co/**", async (route) => {
      await route.fulfill({ status: 200, body: "{}" });
    });

    await page.getByLabel(/full name/i).fill("Test User");
    await page.getByLabel(/email/i).fill("test@example.com");
    await page.getByLabel(/phone number/i).fill("+256700000000");
    await page.getByLabel(/program/i).selectOption({ label: /acca/i });

    await page.getByRole("button", { name: /submit enrollment/i }).click();

    await expect(page.getByText(/request received/i)).toBeVisible({ timeout: 5000 });
    await expect(page.getByRole("button", { name: /submit another/i })).toBeVisible();
  });

  test("Submit Another resets to form", async ({ page }) => {
    await page.route("**/formsubmit.co/**", async (route) => {
      await route.fulfill({ status: 200, body: "{}" });
    });

    await page.getByLabel(/full name/i).fill("Test User");
    await page.getByLabel(/email/i).fill("test@example.com");
    await page.getByLabel(/phone number/i).fill("+256700000000");
    await page.getByLabel(/program/i).selectOption({ label: /acca/i });
    await page.getByRole("button", { name: /submit enrollment/i }).click();

    await expect(page.getByText(/request received/i)).toBeVisible({ timeout: 5000 });
    await page.getByRole("button", { name: /submit another/i }).click();

    await expect(page.getByLabel(/full name/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /submit enrollment/i })).toBeVisible();
  });
});
