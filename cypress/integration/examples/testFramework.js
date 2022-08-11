/// <reference types="Cypress" />
import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";
import PurchasePage from "../pageObjects/PurchasePage";

describe("My First Test", function () {
  before(function () {
    // runs once before all tests in the block
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  const homePage = new HomePage();
  const productPage = new ProductPage();
  const purchasePage = new PurchasePage();

  it("launch base URL", function () {
    cy.visit(Cypress.env("baseUrl"));

    homePage.getName().type(this.data.name);

    // select dropdowns
    homePage.getGender().select(this.data.genderFemale);
  });

  it("Validate second name field", function () {
    homePage.getTwoWayData().should("have.value", "Bob");
  });

  it("Validate property min length of two(2)", function () {
    homePage.notSureBox().should("have.attr", "minlength", "2");
  });

  it("Validate Entreperneur is disabled", function () {
    homePage.getRadioButton().should("be.disabled");
  });

  it("Navigate to Shop Page and select Blackberry And Nokia", function () {
    homePage.clickShopButton().click();

    // custom command
    ["Blackberry", "Nokia"].forEach(function (element) {
      cy.selectProduct(element);
    });
  });

  it("Get to checkout", function () {
    productPage.clickCheckout().click();
    productPage.clickCheckout().click();
  });

  it("Enter and Select Coutnry and checkbox", function () {
    purchasePage.enterCountry().type("india");
    purchasePage.selectContry().click();
    purchasePage.selectCheckbox().click();
    purchasePage.clickPurchase().click();
  });

  it("Validate the success msg", function () {
    purchasePage.validateAlert().then(function (element) {
      const actualText = element.text();
      expect(actualText.includes("Success")).to.be.true;
    });
  });
});
