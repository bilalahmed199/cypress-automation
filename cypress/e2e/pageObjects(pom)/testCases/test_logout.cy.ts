import { LoginPage } from "../pages/login_page.cy";
import { Logout } from "../pages/logout_user.cy";
import { opensource_URL } from "cypress/support/constants";

const lp = new LoginPage();
const logout = new Logout();

it("testing Logout Page", () => {
  cy.visit(opensource_URL + "web/index.php/admin/viewSystemUsers");
  lp.login("Admin", "admin123");

  logout.clickLogoutMenu();
  logout.clickLogout();

  cy.title().should("eq", "OrangeHRM");
});
