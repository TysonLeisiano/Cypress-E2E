import HomePage from '../../pages/homePage.js';
const homePageObj = new HomePage()
import testData from '../../fixtures/testData.json';

describe('Test Automation', () => {
    before(() => {
        cy.login(testData.login.username, testData.login.password)
    })

    it("add to cart flow", () => {
        homePageObj.SearchProduct(testData.product.productName);
        homePageObj.addToCart();
        homePageObj.verifySuccessMessage().should('contain', testData.message.successMessage).and('contain, testData.product.productName);');
    });
});