describe('products page', () => {
  it('should add products to cart', () => {
    // visit home page
    cy.visit('/');
    cy.title().should('eq', 'Automation Exercise');
    // add first product
    cy.contains(/Products/i).click();
    cy.get('a[data-product-id="1"].add-to-cart').first().click();
    cy.contains(/Continue Shopping/i).click();
    // add second product
    cy.get('a[data-product-id="2"].add-to-cart').first().click();
    cy.contains(/View Cart/i).click();
    // verify both products
    cy.get('#cart_info_table tbody tr').should('have.length', 2);
    cy.get('#product-1').within(() => {
      cy.get('.cart_description').should('contain', 'Blue Top');
      cy.get('.cart_price').should('contain', 'Rs. 500');
      cy.get('.cart_quantity').should('contain', '1');
      cy.get('.cart_total_price').should('contain', 'Rs. 500');
    });
    cy.get('#product-2').within(() => {
      cy.get('.cart_description').should('contain', 'Men Tshirt');
      cy.get('.cart_price').should('contain', 'Rs. 400');
      cy.get('.cart_quantity').should('contain', '1');
      cy.get('.cart_total_price').should('contain', 'Rs. 400');
    });
  });
});
