export class NavigationPage {
  constructor(page) {
    this.page = page;
  }

  //Navigate to loginPage
  async loginPage() {
    await this.page.getByRole("link", { name: "Log in" }, {timeout : 5000} ).click();
  }

  //Navigate to signUpPage
  async signupPage() {
    await this.page.getByRole("link", { name: "Sign up",}, {timeout : 5000}).click();
  }

  //Navigate to homePage
  async homePage() {
    await this.page.getByRole("link", { name: "Home" }, {timeout : 5000}).click();
  }

  //Navigate to homePage
  async cartPage() {
    await this.page.getByRole("link", { name: "Cart", exact: true }, {timeout : 10000}).click();
  }

}
