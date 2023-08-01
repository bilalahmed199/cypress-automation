import { RpmLoginPage } from "../rpm/rpm_login_page.cy";
import { WEB_RPM_URL } from "cypress/support/constants";

const lp = new RpmLoginPage();

describe("Handling Tables data", () => {
  beforeEach(() => {
    // visit url before each test
    cy.visit(WEB_RPM_URL);

    //login
    lp.login("090078601", "Testing@1");
    cy.visit(WEB_RPM_URL + "setup/user/employees");
  });

  it("check no. of Rows & columns", () => {
    //no. of rows
    cy.xpath("//mat-table//mat-row").should("have.length", "30");

    //no. of columns
    cy.xpath("//mat-table//mat-header-row//mat-header-cell").should(
      "have.length",
      "9"
    );
  });

  it("Verify specific values", () => {
    // Verify specific value in the table cells
    cy.xpath("//mat-table//mat-row")
      .contains("Jack US Nurse")
      .should("be.visible");

    // Verify multiple values in the table cells
    cy.xpath(
      "//mat-table//mat-row[contains(., 'Jack US Nurse') and contains(., '923021222226')]"
    ).should("be.visible");
  });
});
