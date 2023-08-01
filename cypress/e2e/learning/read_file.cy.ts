// to read data from json file in Fixtures folder

it("Read file using Fixture", () => {
  cy.fixture("example.json").then((data) => {
    cy.log(data.name);
    cy.log(data.email);
  });
});

it("Read file using readFile()", () => {
  cy.readFile("./cypress/fixtures/example.json").then((data) => {
    cy.log(data.name);
    cy.log(data.email);
    cy.log(data.body);
  });
});
