class HomePage {
  getHeader() {
    return cy.get(".school-title");
  }

  getMyAwesomeCourseCard() {
    return cy.contains("My Awesome Course");
  }

  getMyAwesomeCourseFree() {
    return cy.get(
      ":nth-child(1) > .course-listing > .row > a > .col-lg-12 > .course-listing-title"
    );
  }
}

export default HomePage;
