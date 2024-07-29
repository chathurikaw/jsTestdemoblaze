import { LoginPage } from "./LoginPage";
import { NavigationPage } from "./NavigationPage";
import { SignupPage } from "./SignupPage";
import { HomePage } from "./HomePage";
import { ViewProductPage } from "./ViewProductPage";
import { CartPage } from "./CartPage";
import { PlaceOrder } from "./PlaceOrder";

export class PageManager {
  constructor(page) {
    this.page = page;
    this.navigationPage = new NavigationPage(this.page);
    this.loginPage = new LoginPage(this.page);
    this.signupPage = new SignupPage(this.page);
    this.homePage = new HomePage(this.page);
    this.productPage = new ViewProductPage(this.page);
    this.cartPage = new CartPage(this.page);
    this.placeOrder = new PlaceOrder(this.page);
  }

  //Returns navigationPage Object to help navigating pages
  navigateTo() {
    return this.navigationPage;
  }

  //Returns a loginPage Object
  onLoginPage() {
    return this.loginPage;
  }

  //Returns a signupPage Object
  onSignupPage() {
    return this.signupPage;
  }

  //Returns a homePage Object
  onHomePage() {
    return this.homePage;
  }

  //Returns a productPage Object
  onProductPage() {
    return this.productPage;
  }

  //Returns a cartPage Object
  onCartPage() {
    return this.cartPage;
  }

  //Returns a placeOrderPage Object
  onPlaceOrderPage() {
    return this.placeOrder;
  }
}
