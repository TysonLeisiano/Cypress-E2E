import RegisterPage from '../../pages/registerPage.js';

const registerObj = new RegisterPage();

describe('Test Automation', () => {
    it("register flow", () => {
        registerObj.openUrl();

        cy.fixture('registerData').then((registerData) => {
            registerObj.enterFirstname(registerData.firstname);
            registerObj.enterLastname(registerData.lastname);
            registerObj.enterEmail(registerData.email);
            registerObj.enterTelephone(registerData.telephone);
            registerObj.enterPassword(registerData.password);
            registerObj.enterPasswordConfirm(registerData.passwordConfirm);
            registerObj.clickRejectCheckbox();
            registerObj.clickPolicyCheckbox();
            registerObj.clickContinueButton();
        });
    });
});
