class HomePage {
  getFirstLeactureStart() {
    return cy.get(":nth-child(1) > .item > .btn-primary");
  }

  getAuthor() {
    return cy.get(".author-name");
  }

  getAwesomeTestHeader() {
    return cy.get(".section-title");
  }

  getEnrollForFree() {
    return cy.get("#enroll-button-top");
  }

  getCourseTitle() {
    return cy.get(".course-title");
  }

  getFirstLecture() {
    return cy.get(":nth-child(1) > .item");
  }
}

export default HomePage;
