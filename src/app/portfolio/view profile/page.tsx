export default function Profile() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex justify-center items-center">

      <div className="bg-gray-900 p-10 rounded-2xl shadow-lg w-[500px]">

        <div className="flex flex-col items-center">

          <img
            src="https://i.pravatar.cc/200"
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-blue-500"
          />

          <h1 className="text-4xl font-bold mt-6">
            Kamalpreet Singh
          </h1>

          <p className="text-gray-400 mt-2">
            Computer Science Engineer
          </p>

        </div>

        <div className="mt-8 space-y-4 text-lg">

          <p>
            📧 Email:
            <br />
            kamalpreetsingh2216@gmail.com
          </p>

          <p>
            📍 Location:
            <br />
            Ludhiana, Punjab
          </p>

          <p>
            🎓 College:
            <br />
            Guru Nanak Dev Engineering College
          </p>

          <p>
            💻 Skills:
            <br />
            React, Next.js, Python, MongoDB, Tailwind CSS
          </p>

          <p>
            🚀 Interests:
            <br />
            AI, Full Stack Development, Cyber Security
          </p>

        </div>

      </div>

    </main>
  );
}