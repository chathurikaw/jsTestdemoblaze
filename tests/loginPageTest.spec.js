import { test, expect } from "@playwright/test";
import { PageManager } from "../pages/PageManager";

test.beforeEach("Go to Website", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html", { timeout: 5000 });
});

test("Open Log in Page Test", async ({ page }) => {
  const pageManager = new PageManager(page);

  await pageManager.navigateTo().loginPage();
  await page.waitForTimeout(1000);
  await expect(page.getByRole("heading", { name: "Log in" })).toBeVisible();
});

test("Cancel Login Test", async ({ page }) => {
  const pageManager = new PageManager(page);

  await pageManager.navigateTo().loginPage();
  await pageManager.onLoginPage().cancelLogin();
  await page.waitForTimeout(1000);
});

test("Incorrect Password Test", async ({ page }) => {
  const pageManager = new PageManager(page);

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Wrong password.");
    await dialog.accept();
  });

  await pageManager.navigateTo().loginPage();
  await pageManager.onLoginPage().login("Test", "Test123");
  await page.waitForTimeout(5000);
  await pageManager.onLoginPage().cancelLogin();
});

test.afterAll("Close Browser", async ({ page }) => {
  await page.close();
});
