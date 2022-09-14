import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import { HomePage } from "../../../pageObjects/home-page";

const homepage = new HomePage()
let userDetails, userObject;

before(()=>{
    cy.fixture('userdata.json').then((data) => {
        userDetails = data;
    })
})

When('Click on the Sign-In button on the homepage', () => {
    homepage.clickOnSignInBtn();
})

And('Insert the login credentials of {string} user', (user) => {

    switch (user) {
        case "simple":
            userObject = userDetails.simpleuser;
            break;

        case "test":
            userObject = userDetails.testuser;
            break;

        case "automation":
            userObject = userDetails.automationuser;
            break;

        case "invalid":
            userObject = userDetails.invaliduser;
            break;

        default:
            break;
    }
    homepage.setEmail(userObject.email);
    homepage.setPassword(userObject.password);
})

And('Click on the sign-in button on the modal', () => {
    homepage.submitSignIn();    
})

Then('Validate the username on the homepage', () => {
    homepage.validateUserNameOnHomePage(userObject.username);
})

Then('Validate the error of email {string}', (error) => {
    homepage.validateEmailError(error);
})

Then('Validate the error of password {string}', (error) => {
    homepage.validatePasswordError(error);
})
