/// <reference types="cypress" />

export class ProductDetailPage {

    selectProductColor() {
        cy.get('#variation-selector-0').select('Green/Brown').should('be.visible');

    }

    clickAddToBasket() {
        cy.get('div[data-selector="add-to-cart-button"] button').should('be.visible').click();
    }

    ifViewBasketAndCheckoutExist() {
        cy.get("body").then($body => {
            if ($body.find('a[data-selector="post-atc-overlay-go-to-cart-button"]').length > 0) {   
                //evaluates as true
                cy.get('a[data-selector="post-atc-overlay-go-to-cart-button"]').should('be.visible').click();

            }
        });
        
    }

    assertProductTitleOnCart() {
        let pdpTitle = "";
        cy.get('h1[data-buy-box-listing-title="true"]').should('be.visible').then($element => {
            pdpTitle = $element.text();
        })
        console.log(pdpTitle)
        cy.wait(5000)
        this.clickAddToBasket();
        cy.wait(5000)
        //this.ifViewBasketAndCheckoutExist();
        cy.get("body").then($body => {
            if ($body.find('a[data-selector="post-atc-overlay-go-to-cart-button"]').length > 0) {   
                //evaluates as true
                cy.get('a[data-selector="post-atc-overlay-go-to-cart-button"]').should('be.visible').click();

            }
        });
        cy.get('p a[data-title]').should('contain.text', pdpTitle);
    }
}