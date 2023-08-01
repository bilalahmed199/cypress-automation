export class AddPractice {
  add_btn_contains = "add";
  practice_name_txt = "[data-cy='practice-name-input']";
  email_txt = "[data-cy='email-input']";
  telephone_txt = "[data-cy='telephone-input']";
  fax_txt = "[data-cy='fax-input']";
  address_txt = "[data-cy='address-input']";
  city_txt = "[data-cy='city-input']";
  postal_code_txt = "[data-cy='postal-code-input']";
  state_txt = "[data-cy='state-input']";
  save_close_btn = "[data-cy='save-close-button']";

  clickAdd() {
    cy.contains(this.add_btn_contains).click();
  }

  enterPracticeName(practice_name: string) {
    cy.get(this.practice_name_txt).type(practice_name);
  }

  enterEmail(email: string) {
    cy.get(this.email_txt).type(email);
  }

  enterTelephone(telephone: string) {
    cy.get(this.telephone_txt).type(telephone);
  }

  enterFax(fax: string) {
    cy.get(this.fax_txt).type(fax);
  }

  enterAddress(address: string) {
    cy.get(this.address_txt).type(address);
  }

  enterCity(city: string) {
    cy.get(this.city_txt).type(city);
  }

  enterPostalCode(postal_code: string) {
    cy.get(this.postal_code_txt).type(postal_code);
  }

  enterState(state: string) {
    cy.get(this.state_txt).type(state);
  }

  clickSaveClose() {
    cy.get(this.save_close_btn).click();
  }

  generateRandomPhoneNumber() {
    const randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000; // Generates a 10-digit random number
    const randomPhoneNumber = `92${randomNumber}`;
    cy.wrap(randomPhoneNumber); // Wrap the generated phone number to make it Chainable
  }
}
