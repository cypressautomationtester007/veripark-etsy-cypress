/// <reference types="cypress" />

export class HomePage{

    clickOnSignInBtn(){
        cy.get('nav[aria-label="Main"] li button').should('be.visible').click();

    }

    clickOnRegisterBtn(){
        cy.get('button.register-header-action').should('be.visible').click();

    }

    searchProduct(product){
        cy.get('input[data-id="search-query"]').should('be.visible').type(`${product}{enter}`);

    }

    setEmail(email){
        cy.get('input[type="email"]').should('be.visible').type(email);

    }

    setPassword(password){
        cy.get('input[type="password"]').should('be.visible').type(password);

    }

    submitSignIn(){
        cy.get('button[name="submit_attempt"]').should('be.visible').click();

    }

    validateUserNameOnHomePage(username){
        cy.get('div[data-appears-component-name="Homepage_Vesta_View_WelcomeMessage"] h1.welcome-message-text:nth-child(1) a').should('contain.text',username);
    }

    validateEmailError(error){
        cy.get('#aria-join_neu_email_field-error').should('contain.text',error);
    }

    validatePasswordError(error){
        cy.get('#aria-join_neu_password_field-error').should('contain.text',error);
    }
}