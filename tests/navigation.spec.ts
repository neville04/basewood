import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("homepage loads and shows hero", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: /basewood/i })).toBeVisible();
  });

  test("navbar links navigate to correct pages", async ({ page }) => {
    await page.goto("/");

    // Home
    await page.getByRole("link", { name: /home/i }).first().click();
    await expect(page).toHaveURL("/");

    // About
    await page.getByRole("link", { name: /about/i }).first().click();
    await expect(page).toHaveURL("/about");

    // Programs
    await page.getByRole("link", { name: /programs/i }).first().click();
    await expect(page).toHaveURL("/programs");

    // Our Team
    await page.getByRole("link", { name: /our team/i }).first().click();
    await expect(page).toHaveURL("/team");

    // Contact
    await page.getByRole("link", { name: /contact/i }).first().click();
    await expect(page).toHaveURL("/contact");
  });

  test("Apply Now and Contact Us links work", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: /apply now/i }).first().click();
    await expect(page).toHaveURL("/enroll");

    await page.goto("/");
    await page.getByRole("link", { name: /contact us/i }).first().click();
    await expect(page).toHaveURL("/contact");
  });

  test("Enroll Now CTA navigates to enroll page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /enroll now/i }).first().click();
    await expect(page).toHaveURL("/enroll");
  });

  test("invalid route shows 404", async ({ page }) => {
    await page.goto("/invalid-route");
    await expect(page.getByText(/page not found|404/i)).toBeVisible();
    await expect(page.getByRole("link", { name: /return to home/i })).toBeVisible();
  });

  test("404 Return to Home link works", async ({ page }) => {
    await page.goto("/invalid-route");
    await page.getByRole("link", { name: /return to home/i }).click();
    await expect(page).toHaveURL("/");
  });
});
