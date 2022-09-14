/// <reference types="cypress" />

export class ProductListingPage{

    clickOnProduct(number){
        cy.get(`ul.tab-reorder-container li:nth-child(${number}) a`).invoke('removeAttr', 'target');
        cy.get(`ul.tab-reorder-container li:nth-child(${number}) a`).then(function ($element) {
            $element[0].setAttribute('target', '_self')
        })
        cy.get(`ul.tab-reorder-container li:nth-child(${number}) a`).should('be.visible').click();

    }
}