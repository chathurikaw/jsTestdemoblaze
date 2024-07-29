export class SignupPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = "#sign-username";
    this.passwordInput = "#sign-password";
  }

  //Signup to the wesite using username and password
  async signup(username, password) {

    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.getByRole("button", { name: "Sign up" }).click();
  }

  //Cancel the signup prompt
  async cancelSignup() {
    await this.page.getByRole("button").getByText("Close").click();
  }
}
