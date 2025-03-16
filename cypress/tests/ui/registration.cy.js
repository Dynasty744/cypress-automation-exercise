describe('new user', () => {
  const USER_NAME = 'john smith';
  const USER_EMAIL = `johnsmith${Date.now()}@email.com`;
  const USER_PASSWORD = Cypress.env('PASSWORD');

  it('registers new user and deletes user', () => {
    // Launch browser and navigate to URL
    cy.visit('/');
    cy.title().should('eq', 'Automation Exercise');

    // Register new user flow
    cy.registerUser(USER_NAME, USER_EMAIL, USER_PASSWORD).then(() => {
      Cypress.log({
          name: 'registerUser',
          displayName: '*** REGISTER NEW USER COMPLETE:',
          message: [`👨🏻 ${name}`]
      });
  });

    // Verify 'ACCOUNT CREATED!' is visible
    cy.contains('Account Created!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();

    // Verify 'Logged in as username' is visible
    cy.contains(/Logged in as/i).should('be.visible');
    cy.contains(USER_NAME).should('be.visible');

    // Delete account
    cy.contains('Delete Account').click();
    cy.contains('Account Deleted!').should('be.visible');
    cy.getDataQa('continue-button').click();
  });
});
