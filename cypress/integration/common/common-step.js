import { Given } from "cypress-cucumber-preprocessor/steps";
import { HomePage } from "../../pageObjects/home-page";

const homepage = new HomePage

Given('Open the etsy application', () => {
    cy.OpenURL();
})

When('Search {string} and navigate to product listing page', (product) => {
    homepage.searchProduct(product);
})



