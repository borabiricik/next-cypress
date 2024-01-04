import Button from "."

describe("<Button />", () => {
  beforeEach(() => {
    cy.mount(<Button onClick={() => alert("Hello")}>Click me !</Button>)
  })
  it("Should render", () => {
    cy.dataCy("button").should("exist")
  })
  it("Should be clickable", () => {
    cy.dataCy("button").click()
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Hello")
    })
  })

  it("Should display correct text", () => {
    cy.dataCy("button").should("have.text", "Click me !")
  })
})
