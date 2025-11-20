// app/page.tsx
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen text-center px-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Platform</h1>

      <p className="text-gray-600 max-w-md mb-6">
        A clean and simple starting point. Login or create an account to get started.
      </p>

      <div className="flex gap-4">
        <Link
          href="/auth/login"
          className="bg-black text-white py-2 px-6 rounded border border-black"
        >
          Login
        </Link>

        <Link
          href="/auth/register"
          className="py-2 px-6 rounded border border-black"
        >
          Register
        </Link>
      </div>
    </main>
  );
}
