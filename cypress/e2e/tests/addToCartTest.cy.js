import AddToCart from '../../pages/addToCart.js';
import testData from '../../fixtures/testData.json';


const addToCartObj = new AddToCart()


describe('Test Automation', () => {
    before(() => {
        cy.login(testData.login.username, testData.login.password)
    })

    it("add to cart flow", () => {
        addToCartObj.searchProduct(testData.product.productName);
        addToCartObj.addToCart();
        addToCartObj.verifySuccessMessage().should('contain', testData.message.successMessage);
    });
});