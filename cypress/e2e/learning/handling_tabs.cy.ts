// handling chrome multiple tabs
// cypress does'nt support multiple tabs

describe("Handle multiple tabs", () => {
  beforeEach(() => {
    // visit url before each test
    cy.visit("https://the-internet.herokuapp.com/windows");
  });

  it("Method 1", () => {
    cy.get(".example > a").invoke("removeAttr", "target").click();
  });

  it("Method 2", () => {
    cy.get(".example > a").invoke("attr", "target", "_self").click();
  });
});
