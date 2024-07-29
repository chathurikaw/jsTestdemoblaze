export class PlaceOrder {
  constructor(page) {
    this.page = page;
    this.nameInput = "#name";
    this.countryInput = "#country";
    this.cityInput = "#city";
    this.creditcardInput = "#card";
    this.monthInput = "#month";
    this.yearInput = "#year";
  }

  //Fill the form and purchase order
  async Purchase(name, country, city, creditCard, month, year) {
    await this.page.locator(this.nameInput).fill(name);
    await this.page.locator(this.countryInput).fill(country);
    await this.page.locator(this.cityInput).fill(city);
    await this.page.locator(this.creditcardInput).fill(creditCard);
    await this.page.locator(this.monthInput).fill(month);
    await this.page.locator(this.yearInput).fill(year);
    await this.page.getByRole("button", { name: "Purchase" }).click();
  }

  //Cancel the signup prompt
  async cancelPurchase() {
    await this.page.getByRole("button").getByText("Close").click();
  }
}
