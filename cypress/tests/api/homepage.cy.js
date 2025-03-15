describe('api test', () => {
    it('homepage should return 200', () => {
        cy.api('GET', '/').its('status').should('eq', 200);
    });
});
