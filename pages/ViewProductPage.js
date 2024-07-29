export class ViewProductPage {
  constructor(page) {
    this.page = page;
  }

  async addToCart() {
    await this.page
      .getByRole("link", { name: "Add to cart", timeout: 10000 })
      .click();
  }
}
