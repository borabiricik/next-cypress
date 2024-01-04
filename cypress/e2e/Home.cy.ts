describe("Home page test", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("title should be correct", () => {
    cy.visit("/")
    cy.title().should("eq", "Create Next App")
  })

  it("render correct content", () => {
    cy.visit("/")
    cy.dataCy("homepage-main").should("be.visible")
  })

  it("should render login button", () => {
    cy.visit("/")
    cy.dataCy("login-button").should("be.visible")
  })

  it("should redirect to login page", () => {
    cy.visit("/")
    cy.dataCy("login-button").click()
    cy.url().should("include", "/auth/login")
  })

  it("should fail", () => {
    cy.dataCy("fail-button")
  })
})
