class LoginPage {
    visit() {
      cy.visit(Cypress.env("base_url"));
    }
    fillUsername(value) {
      const field = cy.get("#username")
      field.clear();
      field.type(value);
      return this;
    }
  
    fillPassword(value) {
      const field = cy.get("#password")
      field.clear();
      field.type(value);
      return this;
    }
    submit() {
      const button = cy.get("#btn-login")
      button.click();
    }
  }
  
  export default LoginPage;