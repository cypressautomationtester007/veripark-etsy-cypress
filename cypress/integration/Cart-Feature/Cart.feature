 Feature: Product add/edit/remove test case of etsy application

@cartflow1
Scenario: 1. Verify that user should be able to add, edit, remove the product
    Given Open the etsy application
    When  Search "bag" and navigate to product listing page
    And   Select "1" product on the product listing page
    And   Select the product color on the product detailed page
    Then  Tap on the add to basket button and assert product on the cart page
    When  Click on the edit link for change the product color
    Then  Update the product color and validate it
    When  Remove the product from the cart
    Then  Validate the empty cart
