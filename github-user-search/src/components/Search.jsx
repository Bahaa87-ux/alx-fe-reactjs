import { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search({ setUser }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username && !location && !minRepos) {
      setError("Please enter at least one search criteria");
      return;
    }

    setLoading(true);
    setError("");
    setUsers([]);

    const data = await searchUsers({
      username,
      location,
      minRepos,
    });

    setLoading(false);

    if (data && data.items && data.items.length > 0) {
      setUsers(data.items);
      setTotalCount(data.total_count);
    } else {
      setUsers([]);
      setError("Looks like we cant find the user");
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md mb-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="e.g., Egypt, Cairo"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Min Repositories
            </label>
            <input
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              placeholder="e.g., 10"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {loading && (
        <p className="text-center text-gray-600 text-lg">Loading...</p>
      )}
      
      {error && (
        <p className="text-center text-red-500 text-lg">{error}</p>
      )}

      {users.length > 0 && (
        <div>
          <p className="text-gray-700 mb-4">
            Found {totalCount} user{totalCount !== 1 ? "s" : ""}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <img
                  className="w-20 h-20 rounded-full mx-auto mb-3"
                  src={user.avatar_url}
                  alt={user.login}
                />
                <h3 className="text-lg font-bold text-center mb-2">
                  {user.login}
                </h3>
                <a
                  className="text-blue-600 underline text-center block"
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;