// Implicit Assertions

describe("Test Suite 1: Implicit Assertions", () => {
  // beforeEach () will run before each test case
  beforeEach(() => {
    cy.visit("https://charms-qa.cognitivehealthintl.com/");
  });

  it("Test Case 1: Assert URL", () => {
    // cy.url() contains current URL
    cy.url()
      .should("eq", "https://charms-qa.cognitivehealthintl.com/Authorize/") // exact match
      .and("include", "Authorize/") // 'include'
      .and("contain", "charms-qa") // contain
      .and("not.contain", "AKU"); // not contain
  });

  it("Test Case 2: Assert title", () => {
    cy.title()
      .should("eq", "CHI | Login")
      .and("contain", "CHI")
      .and("not.contain", "Logout");
  });

  it("Test Case 3: Assert specific element found or not", () => {
    cy.xpath("//img[@alt='image']").should("be.visible");

    cy.get("[name='username']").should("not.have.value");
  });
});


