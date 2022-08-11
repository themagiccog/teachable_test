class SignUpPage {
  getFullName() {
    return cy.get("#user_name");
  }

  getEmail() {
    return cy.get("#user_email");
  }

  getPassword() {
    return cy.get("#password");
  }

  getCheckBox() {
    return cy.get(".m-l-0-xs");
  }

  getSignUpPageSignUpButton() {
    return cy.get('[data-testid="signup-button"]');
  }
}

export default SignUpPage;
