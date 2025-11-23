import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search({ setUser }) {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // يمنع إعادة تحميل الصفحة
    if (!username) return;

    setLoading(true);
    setError("");
    const data = await fetchUserData(username);
    setLoading(false);

    if (data) {
      setUser(data);
    } else {
      setUser(null);
      setError("Looks like we cant find the user");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
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
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}

export default Search;
