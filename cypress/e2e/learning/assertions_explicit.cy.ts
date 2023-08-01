// Explicit Assertions
describe("Test Suite 1: Explicit Assertions", () => {
  // beforeEach () will run before each test case
  beforeEach(() => {
    cy.charms_qa_Login();
  });

  it("Test Case 1: Assert Logged-in User", () => {
    cy.xpath("(//img[@src='/assets/images/avatar.jpg'])[1]").should(
      "be.visible"
    );

    /* Line 21 will do below:
    Find a specific element and retrieve its value
    Pass the retrieve value to 'x' variable
    Use 'then()' method to validate and pass the value to 'actual_name' variable
    Compare 'actual_name' with 'expected_name' variable
    */
    let expected_name = "Bilal Admin";
    cy.xpath("//span[normalize-space()='Bilal Admin']").then((x) => {
      let actual_name = x.text();

      expect(actual_name).to.equal(expected_name);
    });
  });
});

describe("Test Suite 2: Explicit Assertions", () => {
  // beforeEach () will run before each test case
  beforeEach(() => {
    cy.charms_qa_Login();
  });

  it("Test Case 2, Add Product", () => {
    cy.wait(3000);
    cy.xpath("(//mat-icon[@role='img'][normalize-space()='menu'])[1]").click(); // Left Menu drawer

    cy.xpath("(//span[contains(text(),'Inventory')])[2]") //expand Inventory meny
      .should("be.visible")
      .trigger("mouseover", { force: true }) // hover over the toggle button with force option
      .click({ force: true }); // click the toggle button with force option

    cy.xpath("(//span[contains(text(),'Products')])[2]").click(); // click Products menu
    cy.xpath("//mat-icon[normalize-space()='add']").click(); // click Add Product

    // assert
    cy.xpath("//h2[normalize-space()='Create Product']").should(
      "contain",
      "Create Product"
    );
  });
});
