import { test, expect } from "@playwright/test";
import { PageManager } from "../pages/PageManager";

test.beforeEach("Go to Website and Login", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html", { timeout: 5000 });
  const pageManager = new PageManager(page);
  await pageManager.navigateTo().loginPage();
  await pageManager.onLoginPage().login("npcpw", "Test123");
});

test("View product", async ({ page }) => {
  const pageManager = new PageManager(page);
  await pageManager.onHomePage().viewItem("Samsung galaxy s6");
  await expect(page.locator(".name")).toContainText(`Samsung galaxy s6`, 10000);
});

test("Add to cart", async ({ page }) => {
  const pageManager = new PageManager(page);
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Product added");
    await dialog.accept();
  }, { timeout: 10000 });
  await pageManager.onHomePage().viewItem("Samsung galaxy s6");
  await expect(page.locator(".name")).toContainText(`Samsung galaxy s6`, 10000);
  await pageManager.onProductPage().addToCart();
});

test.afterAll("Close Browser", async ({ page }) => {
  await page.close();
});
