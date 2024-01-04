import Link from "next/link"

export default function Home() {
  return (
    <div
      data-cy="homepage-main"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Ana Sayfa</h1>
      <p className="text-lg text-gray-700">
        Hoş geldiniz, bu sade bir ana sayfa örneğidir.
      </p>
      <Link
        href={"/auth/login"}
        data-cy="login-button"
        className="mt-5 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
      >
        Giriş Yap
      </Link>
    </div>
  )
}
