import { redirect } from "next/navigation"
import React from "react"

const LoginPage = () => {
  const loginAction = async (data: FormData) => {
    "use server"

    console.log("login action")
    const payload = {
      email: data.get("email"),
      password: data.get("password"),
    }
    if (payload.email === "bora@biricik.dev" && payload.password === "123456") {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      redirect("/dashboard")
    }
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
        <h2 className="text-lg text-center font-semibold text-gray-700">
          Login
        </h2>

        <form action={loginAction} className="mt-4">
          <label className="block">
            <span className="text-gray-700">Email</span>
            <input
              data-cy="email-input"
              type="email"
              name="email"
              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              placeholder="john.doe@example.com"
            />
          </label>

          <label className="block mt-3">
            <span className="text-gray-700">Password</span>
            <input
              data-cy="password-input"
              type="password"
              name="password"
              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              placeholder="********"
            />
          </label>

          <div className="flex items-center justify-between mt-4">
            <button
              data-cy="login-button"
              type="submit"
              className="px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            >
              Login
            </button>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
