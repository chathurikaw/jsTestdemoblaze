import { test, expect } from "@playwright/test";
import { PageManager } from "../pages/PageManager";

test.beforeEach("Go to Website", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html", { timeout: 5000 });
});

test("Open Signup Page Test", async ({ page }) => {
  const pageManager = new PageManager(page);
  await pageManager.navigateTo().signupPage();
  await page.waitForTimeout(1000);
  await expect(page.getByRole("heading", { name: "Sign up" })).toBeVisible();
});

test("Cancel SignUp Test", async ({ page }) => {
  const pageManager = new PageManager(page);
  await pageManager.navigateTo().signupPage();
  await pageManager.onSignupPage().cancelSignup();
  await page.waitForTimeout(1000);
  await expect(
    page.getByRole("heading", { name: "Sign up" })
  ).not.toBeVisible();
});

test("Existing user signup Test", async ({ page }) => {
  const pageManager = new PageManager(page);
  await page.waitForTimeout(1000);
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("This user already exist.");
    await dialog.accept();
  });

  await pageManager.navigateTo().signupPage();
  await pageManager.onSignupPage().signup("Tester", "Test123");
  await page.waitForTimeout(1000);
});

test.afterAll("Close Browser", async ({ page }) => {
  await page.close();
});
