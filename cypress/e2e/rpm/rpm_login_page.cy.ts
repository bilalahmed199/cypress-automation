export class RpmLoginPage {
  username_txt = "input[name='mobile']";
  password_txt = "input[name='password']";
  login_btn_contains = "Login";
  
  // only call "login" method in other classes, i.e., Register class
  login(username: string, password: string) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }

  enterUsername(username: string) {
    cy.get(this.username_txt).type(username);
  }

  enterPassword(password: string) {
    cy.get(this.password_txt).type(password);
  }

  clickLogin() {
    cy.contains(this.login_btn_contains).click() ; {force: true};
  }
}
