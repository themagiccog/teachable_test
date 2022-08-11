class LoginPage {
  getEmail() {
    return cy.get("#email");
  }

  getPassword() {
    return cy.get("#password");
  }

  getLogin() {
    return cy.get('[data-testid="login-button"]');
  }
}

export default LoginPage;
