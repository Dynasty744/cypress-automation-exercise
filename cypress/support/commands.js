// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('registerUser', (name, email, password) => {
    cy.contains('Signup / Login').click();
    cy.contains('New User Signup!').should('be.visible');
    // Fill user details
    cy.get('[data-qa="signup-name"]').type(name);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
    cy.contains('Enter Account Information').should('be.visible');
    cy.get('[data-qa="password"]').type(password);
    cy.get('[data-qa="days"]').select('1');
    cy.get('[data-qa="months"]').select('January');
    cy.get('[data-qa="years"]').select('2021');
    cy.get('[name="newsletter"]').click();
    cy.contains('Receive special offers from our partners!').click();

    // Fill address details
    cy.get('[data-qa="first_name"]').type('john');
    cy.get('[data-qa="last_name"]').type('smith');
    cy.get('[data-qa="company"]').type('test company');
    cy.get('[data-qa="address"]').type('123 private ave');
    cy.get('[data-qa="address2"]').type('321 private ave');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').type('BUNGA STATE');
    cy.get('[data-qa="city"]').type('HELLO CITY');
    cy.get('[data-qa="zipcode"]').type('1234');
    cy.get('[data-qa="mobile_number"]').type('123-123-1234');
    cy.get('[data-qa="create-account"]').click();
})