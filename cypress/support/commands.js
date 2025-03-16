// Gets the selector based on 'data-qa=` attribute
Cypress.Commands.add('getDataQa', (dataQaSelector) => {
    return cy.get(`[data-qa=${dataQaSelector}]`, { log: false });
});

// Registers a new user with user details
Cypress.Commands.add('registerUser', (name, email, password) => {
    cy.contains('Signup / Login').click();
    cy.contains('New User Signup!').should('be.visible').then(() => {
        Cypress.log({
            name: 'fillUser',
            displayName: '*** FILL USER DETAILS:',
            message: [`🚶🏻‍♂️`]
        });
    });
    // Fill user details
    cy.getDataQa('signup-name').type(name);
    cy.getDataQa('signup-email').type(email);
    cy.getDataQa('signup-button').click();
    cy.contains('Enter Account Information').should('be.visible');
    cy.getDataQa('password').type(password);
    cy.getDataQa('days').select('1');
    cy.getDataQa('months').select('January');
    cy.getDataQa('years').select('2021');
    cy.get('[name="newsletter"]').click();
    cy.contains('Receive special offers from our partners!').click();
    // Fill address details
    cy.getDataQa('first_name').type('john');
    cy.getDataQa('last_name').type('smith').then(() => {
        Cypress.log({
            name: 'fillAddress',
            displayName: '*** FILL ADDRESS DETAILS:',
            message: [`🏠`]
        });
    });
    cy.getDataQa('company').type('test company');
    cy.getDataQa('address').type('123 private ave');
    cy.getDataQa('address2').type('321 private ave');
    cy.getDataQa('country').select('United States');
    cy.getDataQa('state').type('BUNGA STATE');
    cy.getDataQa('city').type('HELLO CITY');
    cy.getDataQa('zipcode').type('1234');
    cy.getDataQa('mobile_number').type('123-123-1234');
    cy.getDataQa('create-account').click(); 
});
