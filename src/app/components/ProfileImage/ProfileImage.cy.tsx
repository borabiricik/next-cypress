import { User } from "@/app/dashboard/types/User"
import { faker } from "@faker-js/faker"
import ProfileImage from "."

describe("<ProfileImage />", async () => {
  const mockUser: User = {
    id: faker.string.uuid(),
    email: faker.internet.email(),
    name: {
      first: faker.person.firstName(),
      last: faker.person.lastName(),
      title: faker.person.prefix(),
    },
    picture: {
      large: faker.image.avatar(),
      medium: faker.image.avatar(),
      thumbnail: faker.image.avatar(),
    },
  }
  console.log({ mockUser })
  it("should render", async () => {
    cy.mount(<ProfileImage src={mockUser.picture.large} />)
  })

  it("should render correct image", () => {
    cy.mount(<ProfileImage src={mockUser.picture.large} />)
    cy.dataCy("profile-image").should(
      "have.attr",
      "src",
      mockUser.picture.large
    )
  })
})
