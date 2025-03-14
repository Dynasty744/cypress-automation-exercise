describe('api test', () => {
    it('homepage should return 200', () => {
        cy.api('https://www.automationexercise.com/').its('status').should('eq', 200)
    })
})