import React from "react"
import ProfileImage from "../components/ProfileImage"
import { instance } from "../core/services/axios"
import { UserResponse } from "./types/User"

const DashboardPage = async () => {
  const { data } = await instance.get<UserResponse>("/")
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome ! You just logged in.</p>
      <ProfileImage src={data.results[0].picture.large} />
    </div>
  )
}

export default DashboardPage
