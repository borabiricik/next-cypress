describe("Profile Page Test", () => {
  it("should navigate to profile page", () => {
    cy.visit("http://localhost:3000/dashboard")
    cy.dataCy("profile-link").click()
  })
  it("should visit the profile page", () => {
    cy.visit("http://localhost:3000/dashboard/profile")
  })
  it("should render profile image", () => {
    cy.visit("http://localhost:3000/dashboard/profile")
    const imageElement = cy.dataCy("profile-image")
    imageElement.should("be.visible")
    imageElement.should((el) => expect(el.width()).to.be.equal(100))
    imageElement.should((el) => expect(el.height()).to.be.equal(100))
  })
})
