import Link from "next/link"

export default function Home() {
  return (
    <main className="text-center mx-3 w-80">
      <h1 className="text-2xl font-bold text-gray-900 my-3">Protect your domains with a password</h1>
      <p className="my-2">Go to admin page to handle your passwords</p>
      <Link href="/admin"><button className="bg-blue-700 p-1 mb-2 rounded px-2 text-white font-medium hover:bg-blue-500">Admin</button></Link>
    </main>
  )
}
