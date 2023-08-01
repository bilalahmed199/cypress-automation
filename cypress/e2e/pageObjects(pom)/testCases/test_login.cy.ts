import { opensource_URL } from "cypress/support/constants";
import { LoginPage } from "../pages/login_page.cy";

const lp = new LoginPage();

describe("All Login test cases", () => {
  beforeEach(() => {
    // visit url before each test
    cy.visit(opensource_URL);
  });

  // to run only below test case
  it.only("TC1: Login with valid credentials", () => {
    lp.enterUsername("Admin");
    lp.enterPassword("admin123");
    lp.clickLogin();

    cy.title().should("eq", "OrangeHRM");
  });

  // to skip below test case
  it.skip("TC2: Login with invalid credentials", () => {
    // pass invalid credentials
    lp.login("asd", "qe21eq");

    cy.xpath("//p[normalize-space()='Invalid credentials']").should(
      "be.visible"
    );
  });
});
