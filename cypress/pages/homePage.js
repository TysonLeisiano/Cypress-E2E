class HomePage {
    elements = {
        searchBox: "input[placeholder='Search']",
        searchButton: "button[class='btn btn-default btn-lg']",
        product: "img[title='MacBook']",
        addToCartButton: "div[class='row'] div:nth-child(2) div:nth-child(1) div:nth-child(2) div:nth-child(2) button:nth-child(1)",
        successMessage: ".alert-success"
       
    }
    SearchProduct(productName) {    
        cy.get(this.elements.searchBox).type(productName)
        cy.get(this.elements.searchButton).click()
    }
    addToCart() {
        cy.contains(this.elements.addToCartButton).first().click()
    }
    verifySuccessMessage() {
        return cy.get(this.elements.successMessage)
    }
}

export default HomePage