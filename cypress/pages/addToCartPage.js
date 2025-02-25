class AddToCart {
    elements = {
        searchBox: "input[placeholder='Search']",
        searchButton: "button[class='btn btn-default btn-lg']",
        product: "img[title='MacBook']",
        addToCartButton: "div[id='content'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(2) button:nth-child(1)",
        successMessage: ".alert-success",
    }
    searchProduct(productName) {    
        cy.get(this.elements.searchBox).type(productName)
        cy.get(this.elements.searchButton).click()
    }
    addToCart() {
        cy.get(this.elements.addToCartButton).click()
    }
    verifySuccessMessage() {
        return cy.get(this.elements.successMessage)
    }
    
}

export default AddToCart