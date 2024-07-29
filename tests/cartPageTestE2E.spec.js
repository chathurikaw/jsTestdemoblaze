import { test, expect } from "@playwright/test";
import { PageManager } from "../pages/PageManager";

test.beforeEach("Go to Website and Login", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html", { timeout: 5000 });
  const pageManager = new PageManager(page);
  await pageManager.navigateTo().loginPage();
  await pageManager.onLoginPage().login("npcpw", "Test123");
});

test("Add to Cart, delete from cart and checkout", async ({ page }) => {
  const pageManager = new PageManager(page);
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Product added");
    await dialog.accept();
  });

  //Add items to cart
  await pageManager.onHomePage().viewItem("Samsung galaxy s6");
  await expect(page.locator(".name")).toContainText(`Samsung galaxy s6`, 5000);
  await pageManager.onProductPage().addToCart();
  await page.waitForTimeout(5000);
  await pageManager.navigateTo().homePage();
  await pageManager.onHomePage().viewItem("Nexus 6");
  await expect(page.locator(".name")).toContainText(`Nexus 6`, 10000);
  await pageManager.onProductPage().addToCart();
  await pageManager.navigateTo().cartPage();

  // Verify cart total and delete one product
  await expect(page.locator("#totalp")).toContainText(`1010`);
  await pageManager.onCartPage().deleteFromCart("Nexus 6");
  await expect(page.locator("#totalp")).toContainText(`360`);

  //checkout order
  await pageManager.onCartPage().checkout();
  await pageManager
    .onPlaceOrderPage()
    .Purchase("John", "USA", "Alabama", "1234", "June", "2024");
  await expect(
    page.getByRole("heading", { name: "Thank you for your purchase!" })
  ).toBeVisible();
});

test.afterAll("Close Browser", async ({ page }) => {
  await page.close();
});
