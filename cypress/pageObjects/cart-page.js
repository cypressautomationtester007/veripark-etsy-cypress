/// <reference types="cypress" />

export class CartPage{

    validateCartPage(){
        cy.url().should('include', '/cart') 
        cy.get('p a[data-title]').should('be.visible');

    }

    clickOnEditProduct(){
        cy.get('div.item-numbers-full-width a[title="Edit Variation for Listing"]').should('be.visible').click();
    }

    editAndValidateProductColor() {
        cy.get('#wt-cart-select-').select('Mink/Camel').should('be.visible');
        cy.get('div.item-numbers-full-width ul li').should('be.visible').and('contain.text', 'Mink/Camel')
    }

    clickOnRemoveBtn(){
        cy.wait(5000)
        cy.get('a[aria-label="Remove listing"] span').should('be.visible').click();
    }

    validateEmptyCart(){
        cy.get('h1').contains('Your basket is empty.').should('be.visible');
    }
}