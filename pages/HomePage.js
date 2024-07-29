export class HomePage {
  constructor(page) {
    this.page = page;
    this.nameOfUser = "#nameofuser";
  }

  async viewItem(productName) {
    await this.page
      .getByRole("link", { name: productName, timeout: 10000 })
      .click();
  }
}
