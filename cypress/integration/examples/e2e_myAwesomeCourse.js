/// <reference types="Cypress" />
import LogInPage from "../pageObjects/LogInPage";
import LandingPage from "../pageObjects/LandingPage";
import HomePage from "../pageObjects/HomePage";
import AwesomeCoursePage from "../pageObjects/AwesomeCoursePage";

describe("User is able to sign up", function () {
  let data;
  before(() => {
    // runs once before all tests in the block
    cy.fixture("example").then((fData) => {
      data = fData;
    });
  });

  const loginPage = new LogInPage();
  const landingPage = new LandingPage();
  const homePage = new HomePage();
  const awesomeCoursePage = new AwesomeCoursePage();

  // launch the landing page
  it("Launch Zeachable page", function () {
    cy.visit(Cypress.env("baseUrl"));
  });

  // Click to the Login Up page
  it("Open the Login page", function () {
    landingPage.getLogInButton().click();
  });

  // Enter login details
  it("Enter Authenticated user details", function () {
    loginPage.getEmail().type(data.email);
    loginPage.getPassword().type(data.password);
  });

  // Log into user page
  it("Authenticated user logs In", function () {
    loginPage.getLogin().click();
  });

  //My Awesome Course Card.
  it("navigate to My Awesome Course Card", function () {
    homePage.getMyAwesomeCourseFree().click();
  });

  it("Verify Awesome course Page functionality", function () {
    awesomeCoursePage.getEnrollForFree().then(function (element) {
      const actualText = element.text();
      expect(actualText.includes("Enroll")).to.be.true;
    });
  });
});
