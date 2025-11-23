import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search({ setUser }) {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError("");
    const data = await fetchUserData(username);
    setLoading(false);

    if (data) {
      setUser(data);
      setUserData(data);
    } else {
      setUser(null);
      setUserData(null);
      setError("Looks like we cant find the user");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          className="border px-3 py-2 rounded"
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {userData && (
        <div className="mt-6 p-4 bg-white rounded shadow text-center">
          <img
            className="w-24 h-24 rounded-full mx-auto"
            src={userData.avatar_url}
            alt={userData.login}
          />
          <h2 className="text-xl font-bold mt-2">{userData.login}</h2>
          <a
            className="text-blue-600 underline mt-2 block"
            href={userData.html_url}
            target="_blank"
          >
            Visit Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;