import ProfileImage from "@/app/components/ProfileImage"
import { faker } from "@faker-js/faker"
import React from "react"

const ProfilePage = () => {
  const src = faker.image.avatar()
  return (
    <div>
      <ProfileImage src={src} />
    </div>
  )
}

export default ProfilePage
