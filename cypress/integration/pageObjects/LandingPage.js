class LandingPage {
  getSignUpButton() {
    return cy.get("#header-sign-up-btn");
  }

  getLogInButton() {
    return cy.contains("Login");
  }

  getEnrollNow() {
    return cy.contains("Enroll Now");
  }
}

export default LandingPage;
