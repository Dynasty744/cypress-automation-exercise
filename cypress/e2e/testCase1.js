describe('new user', () => {
  const USER_NAME = 'john smith';
  const USER_EMAIL = `johnsmith${Date.now()}@email.com`;
  const USER_PASSWORD = '1234!@#$';

  it('registers new user and deletes user', () => {
    // Step 1: Launch browser and navigate to URL
    cy.visit('https://www.automationexercise.com/');
    cy.title().should('eq', 'Automation Exercise');

    // Step 2: Click on 'Signup / Login' button
    cy.contains('Signup / Login').click();

    // Step 3: Verify 'New User Signup!' is visible
    cy.contains('New User Signup!').should('be.visible');

    // Step 4: Enter name and email address
    cy.get('[data-qa="signup-name"]').type(USER_NAME);
    cy.get('[data-qa="signup-email"]').type(USER_EMAIL);
    cy.get('[data-qa="signup-button"]').click();

    // Step 5: Verify 'ENTER ACCOUNT INFORMATION' is visible
    cy.contains('Enter Account Information').should('be.visible');

    // Step 6: Fill details
    cy.get('[value="Mrs"]').click();
    cy.get('[data-qa="name"]').should('have.value', USER_NAME);
    cy.get('[data-qa="email"]').should('have.value', USER_EMAIL);
    cy.get('[data-qa="password"]').type(USER_PASSWORD);
    cy.get('[data-qa="days"]').select('1');
    cy.get('[data-qa="months"]').select('January');
    cy.get('[data-qa="years"]').select('2021');
    cy.get('[name="newsletter"]').click();
    cy.contains('Receive special offers from our partners!').click();

    // Step 7: Fill address details
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

    // Step 8: Verify 'ACCOUNT CREATED!' is visible
    cy.contains('Account Created!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();

    // Step 9: Verify 'Logged in as username' is visible
    cy.contains(/Logged in as/i).should('be.visible');
    cy.contains(USER_NAME).should('be.visible');

    // Step 10: Delete account
    cy.contains('Delete Account').click();
    cy.contains('Account Deleted!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
  });
});