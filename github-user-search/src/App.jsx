import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        GitHub User Search
      </h1>

      <Search setUser={setUser} />

      {user && (
        <div className="mt-6 p-4 bg-white rounded shadow text-center">
          <img
            className="w-24 h-24 rounded-full mx-auto"
            src={user.avatar_url} // هنا الـ avatar_url
            alt={user.login}      // alt = login
          />
          <h2 className="text-xl font-bold mt-2">{user.login}</h2> {/* login */}
          <a
            className="text-blue-600 underline mt-2 block"
            href={user.html_url}
            target="_blank"
          >
            Visit Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
