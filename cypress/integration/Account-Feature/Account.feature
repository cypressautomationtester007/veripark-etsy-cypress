Feature: Account retaled test cases for the ETSY application

    @accountflow1
    Scenario: 1. Assert that user should be login with the valid credentials
        Given Open the etsy application
        When  Click on the Sign-In button on the homepage
        And   Insert the login credentials of "automation" user
        And   Click on the sign-in button on the modal
        Then  Validate the username on the homepage

    @accountflow2
    Scenario: 2. Assert all the required fields validations while signing-in
        Given Open the etsy application
        When  Click on the Sign-In button on the homepage
        And   Click on the sign-in button on the modal
        Then  Validate the error of email "Email can't be blank."
        And   Validate the error of password "Password can't be blank."

    @accountflow3
    Scenario: 3. User try to sign-in with the invalid email
        Given Open the etsy application
        When  Click on the Sign-In button on the homepage
        And   Insert the login credentials of "invalid" user
        And   Click on the sign-in button on the modal
        Then  Validate the error of email "Email address is invalid."


    @accountflow5
    Scenario Outline: 5. Sign-in multiple users to the etsy site
        Given Open the etsy application
        When  Click on the Sign-In button on the homepage
        And   Insert the login credentials of "<USERTYPE>" user
        And   Click on the sign-in button on the modal
        Then  Validate the username on the homepage
        Examples:
            | USERTYPE   |
            | simple     |
            | test       |
            | automation |
