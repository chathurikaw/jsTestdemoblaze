import { log } from "console";

export class CartPage {
  constructor(page) {
    this.page = page;
  }

  async deleteFromCart(product) {
    const targetRow = `tr:has-text("${product}")`;
    await this.page.waitForSelector(targetRow, { timeout: 5000 });
    const deleteLink = await this.page.$(`${targetRow} a:has-text("Delete")`);

    if (deleteLink) {
      // Click the delete link
      await deleteLink.click();
    } else {
      console.error(`Delete link for product "${product}" not found`);
    }
  }

  async checkout() {
    await this.page
      .getByRole("button", { name: "Place Order" }, { timeout: 5000 })
      .click();
  }
}
