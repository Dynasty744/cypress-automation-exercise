describe('get', () => {
    it('should get all products and verify response', () => {
        cy.api('GET', '/api/productsList').then(response => {
            const responseBody = JSON.parse(response.body)
            const requiredProps = ['id', 'name', 'price', 'brand', 'category']
            expect(response.status).to.eq(200)
            expect(responseBody).to.have.property('products').and.length.to.be.greaterThan(1)
            responseBody.products.forEach(product => {
                expect(product).to.have.keys(requiredProps)
            });
        })
    });
});
