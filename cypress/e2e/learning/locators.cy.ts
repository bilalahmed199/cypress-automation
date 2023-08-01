/*
CSS locators:
BY ID: cy.get("#username")  
BY NAME: cy.get("[name = 'username']")  
BY CLASS: cy.get(".username")  
BY TAG NAME + CLASS: cy.get("button.username")      // tagname.class
BY TAG NAME + CLASS + NAME: cy.get("button.username[name = 'username']")// tagname.class[attribute = "test"]  

XPATH locator
Install "cypress-xpath" plugin -> npm install -D cypress-xpath
*/

describe("Test Suite 1", () => {
  // beforeEach() will run before every test case, i.e., Login part
  beforeEach(() => {
    // This code will run once before all the test cases
    cy.visit("https://opensource-demo.orangehrmlive.com/");

    cy.get("[name='username']").clear().type("Admin"); // by NAME tag
    cy.get("[name='password']").clear().type("admin123"); // by NAME tag
    cy.get(
      "button.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button"
    ).click(); // by TYPE + CLASS

    // Wait for successful login
    cy.xpath("//button[@title='Help']").should("exist");
  })

  it("TC1: Verify title of page", () => {
    cy.title().should("eq", "OrangeHRM");
  })

  it("TC2: find an element in Quick Launch Grid", () => {
    // Wait for the grid to be visible
    let quick_launch_grid = cy.get(".oxd-grid-3.orangehrm-quick-launch");
    quick_launch_grid.should("be.visible");

    // when the grid is found, then find inside elements of div
    quick_launch_grid.then(() => {
      quick_launch_grid.find(".oxd-grid-item").should("contain", "Apply Leave");
    })
  })
})
