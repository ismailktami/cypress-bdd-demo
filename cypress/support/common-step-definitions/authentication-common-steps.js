const { Given } = require("@badeball/cypress-cucumber-preprocessor");

Given(`the user is logged`, () => {
  cy.loginByRole('USER_ADMIN')
});

Given(`the user USER_FULL is logged`, () => {
  cy.loginByRole('USER_FULL')
});

Given(`the user USER_RESTREINT is logged`, () => {
  cy.loginByRole('USER_RESTREINT')
});

Given(`the user USER_ADMIN is logged`, () => {
  cy.loginByRole('USER_ADMIN')
});

