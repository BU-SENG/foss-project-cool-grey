export default function RegisterPage() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="p-6 border rounded shadow max-w-sm w-full">
        <h1 className="text-xl font-semibold mb-4">Create an account</h1>

        <form className="flex flex-col gap-4 max-w-sm w-full">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            className="border rounded px-3 py-2"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border rounded px-3 py-2"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="border rounded px-3 py-2"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            className="border rounded px-3 py-2"
          />

          <button type="submit" className="bg-black text-white py-2 rounded">
            Register
          </button>
        </form>
      </div>
    </main>
  );
}
