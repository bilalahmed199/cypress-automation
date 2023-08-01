import { AddPractice } from "./add_practice_page.cy";
import { RpmLoginPage } from "./rpm_login_page.cy";
import { WEB_RPM_URL } from "cypress/support/constants";

const ap = new AddPractice();
const lp = new RpmLoginPage();

describe("TS1:Add Practice", () => {
  beforeEach(() => {
    // visit url before each test
    cy.visit(WEB_RPM_URL + "setup/user/facility");

    //login using Fixture file
    cy.fixture("rpm_users").then((data) => {
      lp.login(data.admin_mobile, data.admin_pass);
    });
  });

  it("TC1: Add Practice", () => {
    // Get and log the current URL
    cy.url().then((url) => {
      cy.log(url);
    });
    // cy.xpath("//div[@fxlayout='row']//div[1]//button[1]").click()
    cy.xpath("//div[@fxlayout='row']//div[1]//button[1]").first().click();
    cy.xpath("(//span[contains(text(),'Users')])[2]").click();
    cy.xpath("(//span[contains(text(),'Practice')])[2]").click();

    ap.clickAdd();
    ap.enterPracticeName("Bilal Test 3");
    ap.enterEmail("test@email.comm");
    ap.enterTelephone("923012133123");
    ap.enterFax("912313121");
    ap.enterAddress("NSTP Islamabad");
    ap.enterCity("Islamabad");
    ap.enterPostalCode("123123");
    ap.enterState("Punjab");
    ap.clickSaveClose();
  });
});
