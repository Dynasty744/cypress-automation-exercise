const { validateResponse } = require('../../utils/schemaValidator');

describe('GET', () => {
  const USER_NAME = 'john smith';
  const USER_EMAIL = Cypress.env('EMAIL');

  it('should get all products and verify response', () => {
    cy.api('GET', '/api/productsList').then(response => {
      const responseBody = JSON.parse(response.body);
      const requiredProps = ['id', 'name', 'price', 'brand', 'category'];
      expect(response.status).to.eq(200);
      expect(responseBody).to.have.property('products')
        .that.is.an('array')
        .with.length.greaterThan(1);
      responseBody.products.forEach(product => {
        expect(product).to.have.keys(requiredProps);
      });
    });
  });

  it('should get all brands and verify response', () => {
    cy.api('GET', '/api/brandsList').then(response => {
      const requiredProps = ['id', 'brand'];
      const responseBody = JSON.parse(response.body);
      expect(response.status).to.eq(200);
      expect(responseBody).to.have.property('brands')
        .that.is.an('array')
        .with.length.greaterThan(1);
      responseBody.brands.forEach(brand => {
        expect(brand).to.have.keys(requiredProps);
      });
    });
  });

  it('should fetch user details via email', () => {
    const requiredProps = [
      'address1',
      'address2',
      'birth_day',
      'birth_month',
      'birth_year',
      'city',
      'company',
      'country',
      'email',
      'first_name',
      'id',
      'last_name',
      'name',
      'state',
      'title',
      'zipcode'
    ];
    const queryParams = {
      email: USER_EMAIL
    };
    cy.api({
      method: 'GET',
      url: '/api/getUserDetailByEmail',
      qs: queryParams
    })
      .then(response => {
        const responseBody = JSON.parse(response.body);
        validateResponse(responseBody);
        expect(response.status).to.eq(200);
        expect(responseBody.user).to.have.keys(requiredProps);
        expect(responseBody.user.name).to.eq(USER_NAME);
      });
  });
});
