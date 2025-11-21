// app/auth/login/page.tsx
"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col justify-center items-center min-h-screen px-4">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form
        className="flex flex-col gap-4 w-full max-w-sm"
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/dashboard"); // redirects to dashboard page
        }}
      >
        <input type="email" placeholder="Email" className="border p-2 rounded" />
        <input type="password" placeholder="Password" className="border p-2 rounded" />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </main>
  );
}
