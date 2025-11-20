// app/dashboard/pages/profile.tsx
"use client";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white text-black flex justify-center items-start p-8">
      <div className="w-full max-w-md border border-gray-300 rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Jane Doe</h1>

        <div className="mb-4">
          <h2 className="text-lg font-semibold">About Me</h2>
          <p className="text-gray-700 mt-1">
            Software developer passionate about building open-source projects and developer tools.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold">Skills</h2>
          <ul className="list-disc list-inside text-gray-700 mt-1">
            <li>JavaScript / TypeScript</li>
            <li>React / Next.js</li>
            <li>Node.js / Express</li>
            <li>Database Design (MongoDB, Firebase, Supabase)</li>
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold">Projects</h2>
          <ul className="list-disc list-inside text-gray-700 mt-1">
            <li>Portify – Automated portfolio generator</li>
            <li>Evon – Developer community platform</li>
            <li>Horg – Interactive storytelling website</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Contact</h2>
          <p className="text-gray-700 mt-1">Email: jane.doe@example.com</p>
        </div>

      </div>
    </div>
  );
}
