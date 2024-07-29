import { test, expect } from "@playwright/test";
import { PageManager } from "../pages/PageManager";

test.beforeEach("Go to Website", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html", { timeout: 5000 });
});

test("New user signup Test", async ({ page }) => {
  const pageManager = new PageManager(page);

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Sign up successful.");
    await dialog.accept();
  });

  await pageManager.navigateTo().signupPage();
  await pageManager.onSignupPage().signup("npcpw", "Test123");
  await page.waitForTimeout(1000);
});

test("Successful login Test", async ({ page }) => {
  const pageManager = new PageManager(page);

  await pageManager.navigateTo().loginPage();
  await pageManager.onLoginPage().login("npcpw", "Test123");
  await page.waitForTimeout(5000);
  await expect(page.locator("#nameofuser")).toContainText(`Welcome npcpw`);
});

test.afterAll("Close Browser", async ({ page }) => {
  await page.close();
});