class RegisterPage {
    elements = {
        firstName:"#input-firstname",
        lastName:"#input-lastname",
        email:"#input-email",
        telephone:"#input-telephone",
        password:"#input-password",
        passwordConfirm:"#input-confirm",
        rejectCheckbox:"input[value='0']",
        policyCheckbox:"input[value='1'][name='agree']",
        continueButton:"input[value='Continue']"
    }
    openUrl() {
        cy.visit(Cypress.env('registerUrl'))
    }
    enterFirstname(firstName) {
        cy.get(this.elements.firstName).type(firstName)
    }
    enterLastname(lastName) {
        cy.get(this.elements.lastName).type(lastName)
    }
    enterEmail(email) {
        cy.get(this.elements.email).type(email)
    } 
    enterTelephone(telephone) {
        cy.get(this.elements.telephone).type(telephone)
    } 
    enterPassword(password) {
        cy.get(this.elements.password).type(password)
    } 
    enterPasswordConfirm(passwordConfirm) {
        cy.get(this.elements.passwordConfirm).type(passwordConfirm)
    } 
    clickRejectCheckbox() {
        cy.get(this.elements.rejectCheckbox).click()
    } 
    clickPolicyCheckbox() {
        cy.get(this.elements.policyCheckbox).click()
    } 
    clickContinueButton() {
        cy.get(this.elements.continueButton).click()
    }     
}

export default RegisterPage;