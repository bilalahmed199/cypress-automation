// ***********************************************************
// we can add custom commands or overwrite existing commands in this file 
// ***********************************************************

// to access cypress commands in the scripts, i.e., cy. visit()
/// <reference types = "Cypress" />

// to access XPATH in the scripts
/// <reference types = "cypress-xpath" />

// this will only be used in .ts file
declare namespace Cypress {
    interface Chainable<Subject> {
      web_rpm_Login(): Chainable<Subject>;
      charms_qa_Login(): Chainable<Subject>;
    }
  }

  Cypress.Commands.add('web_rpm_Login', () => {
    cy.visit('https://web-app.chirpm.com/');
    cy.get('input[name="password"]').type('Testing@1');
    cy.get('input[name="mobile"]').type('090078601');
    cy.contains('Login').click({force: true});
    cy.url().should('include', 'https://web-app.chirpm.com/setup/cc/observations');
  });
  
  Cypress.Commands.add("charms_qa_Login", () => {
    cy.visit("https://charms-qa.cognitivehealthintl.com/");
    cy.get("[name='username']").clear().type("bilaladmin@gmail.com");
    cy.get("[name='password']").clear().type("Bilal@2");
  
    cy.xpath("//input[@role='switch' and @type='checkbox']")
      .should("be.visible")
      .trigger("mouseover", { force: true })
      .click({ force: true });
  
    cy.xpath("//span[contains(text(),'Login')]").click();
  
    cy.title().should("eq", "Charms | Financials");
  });