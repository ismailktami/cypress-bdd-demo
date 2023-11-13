import '@testing-library/cypress/add-commands';
import 'cypress-real-events/support';
import 'cypress-file-upload';
import LoginPage from './pages/LoginPage'

Cypress.Commands.add('login', (username, password) => {
    const loginPage = new LoginPage();
    loginPage.visit()
    loginPage.fillUsername(username);
    loginPage.fillPassword(password);
    loginPage.submit();
    cy.contains("h1", "Home");
  });

Cypress.Commands.add('loginByRole', (role) => {
  const logins = Cypress.env("logins")[role]
  cy.login(logins.username,logins.password)
});

