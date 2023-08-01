export class LoginPage {
  LoginPage_username_textbox = "[name = 'username']";
  LoginPage_password_textbox = "[name = 'password']";
  LoginPage_login_btn = "[type='submit']";

  // only call "login" method in other classes, i.e., Register class
  login(username: string, password: string){
    this.enterUsername(username)
    this.enterPassword(password)
    this.clickLogin()
  }

  enterUsername(username: string) {
    cy.get(this.LoginPage_username_textbox).type(username);
  }

  enterPassword(password: string) {
    cy.get(this.LoginPage_password_textbox).type(password);
  }

  clickLogin() {
    cy.get(this.LoginPage_login_btn).click();
  }
}
