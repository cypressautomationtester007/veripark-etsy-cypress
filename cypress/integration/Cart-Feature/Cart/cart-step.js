import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import { CartPage } from "../../../pageObjects/cart-page";
import { ProductDetailPage } from "../../../pageObjects/pdp-page";
import { ProductListingPage } from "../../../pageObjects/plp-page";

const plp = new ProductListingPage();
const pdp = new ProductDetailPage();
const cartpage = new CartPage();

When('Select {string} product on the product listing page', (number) => {
    plp.clickOnProduct(number);
})


And('Select the product color on the product detailed page', () => {
    pdp.selectProductColor();
})

And('Tap on the add to basket button and assert product on the cart page', () => {
    
    cy.wait(5000)
    pdp.clickAddToBasket();
    cy.wait(5000)
    pdp.ifViewBasketAndCheckoutExist();
    cartpage.validateCartPage();

})

When('Click on the edit link for change the product color', () => {
    cartpage.clickOnEditProduct();
})


Then('Update the product color and validate it', () => {
    cartpage.editAndValidateProductColor();
})

When('Remove the product from the cart', () => {
    cartpage.clickOnRemoveBtn();
})


Then('Validate the empty cart', () => {
    cartpage.validateEmptyCart();
})