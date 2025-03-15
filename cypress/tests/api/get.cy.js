describe('GET', () => {
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

    it('should get all brands and verify response', () => {
        cy.api('GET', '/api/brandsList').then(response => {
            const requiredProps = ['id', 'brand']
            const responseBody = JSON.parse(response.body)
            expect(response.status).to.eq(200)
            responseBody.brands.forEach(brand => {
                expect(brand).to.have.keys(requiredProps)
            });
        })
    })
});
