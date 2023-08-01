describe('Test Suite Name', () => {
  it('Test Case 1', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Test Case 2 - verify valid title of webpage', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq', 'OrangeHRM')
  })

  it('Test Case 3 - verify invalid title of webpage', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq', 'OrangeHRMm')   // wrong title
  })
})