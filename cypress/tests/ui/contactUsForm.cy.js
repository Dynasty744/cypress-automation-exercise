describe('contact us form', () => {
  it('verify the contact us form functionality', () => {
    // Visit home page
    cy.visit('/');
    cy.title().should('eq', 'Automation Exercise');
    // Into contact us page
    cy.contains('Contact us').click();
    cy.contains(/GET IN TOUCH/i).should('be.visible');
    // Enter form details
    cy.getDataQa('name').type('tester123');
    cy.getDataQa('email').type('tester123@example.com');
    cy.getDataQa('subject').type('test subject');
    cy.getDataQa('message').type('test message 123 @#$!');
    // Upload file
    cy.get('[name="upload_file"]').click();
    cy.getDataQa('submit-button').click();
    // Final verification
    cy.contains(/Success! Your details have been submitted successfully./i).should('be.visible');
    cy.contains('Home').click();
    cy.title().should('eq', 'Automation Exercise');
  });
});
