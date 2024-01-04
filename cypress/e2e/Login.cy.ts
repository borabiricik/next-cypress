describe("Login e2e test", () => {
  it("should visitable", () => {
    cy.visit("/auth/login")
  })

  it("should login", () => {
    cy.visit("/auth/login")
    cy.dataCy("email-input").type("bora@biricik.dev")
    cy.dataCy("password-input").type("123456")
    cy.dataCy("login-button").click()
    cy.get("p").should("contain", "You just logged in")
  })

  it("shouldn't login with wrong credentials", () => {
    cy.visit("/auth/login")
    cy.dataCy("email-input").type("random@gmail.com")
    cy.dataCy("password-input").type("123asdasd123")
    cy.dataCy("login-button").click()
    cy.url().should("include", "/auth/login")
  })
})
