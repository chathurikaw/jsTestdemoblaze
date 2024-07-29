export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = "#loginusername";
    this.passwordInput = "#loginpassword";
  }

  //Log into the wesite using username and password
  async login(username, password) {
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.getByRole("button", { name: "Log in" }).click();
  }

  //Cancel the login prompt
  async cancelLogin() {
    await this.page.getByLabel("Log in").getByText("Close").click();
  }
}
