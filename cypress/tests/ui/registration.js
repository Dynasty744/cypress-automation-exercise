describe('new user', () => {
  const USER_NAME = 'john smith';
  const USER_EMAIL = `johnsmith${Date.now()}@email.com`;
  const USER_PASSWORD = '1234!@#$';

  it('registers new user and deletes user', () => {
    // Step 1: Launch browser and navigate to URL
    cy.visit('https://www.automationexercise.com/');
    cy.title().should('eq', 'Automation Exercise');

    // Step 2: Register new user flow
    cy.registerUser(USER_NAME, USER_EMAIL, USER_PASSWORD).then(() => {
      Cypress.log({
          name: 'registerUser',
          displayName: '*** REGISTER NEW USER COMPLETE:',
          message: [`👨🏻 ${name}`]
      });
  });

    // Step 3: Verify 'ACCOUNT CREATED!' is visible
    cy.contains('Account Created!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();

    // Step 4: Verify 'Logged in as username' is visible
    cy.contains(/Logged in as/i).should('be.visible');
    cy.contains(USER_NAME).should('be.visible');

    // Step 5: Delete account
    cy.contains('Delete Account').click();
    cy.contains('Account Deleted!').should('be.visible');
    cy.getDataQa('continue-button').click();
  });
});
