export class Logout {
  logout_menu_btn_xpath = "//p[contains(text(),'Vivek Shetty')]";
  logout_btn_xpath = "//a[normalize-space()='Logout']";

  clickLogoutMenu() {
    cy.xpath(this.logout_menu_btn_xpath).click();
  }

  clickLogout() {
    cy.xpath(this.logout_btn_xpath).click();
  }
}
