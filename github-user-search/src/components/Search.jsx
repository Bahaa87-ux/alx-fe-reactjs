import { useState } from "react";
import { searchUsers, fetchUserData } from "../services/githubService";

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

        if (username && !location && !minRepos) {
            const data = await fetchUserData(username);
            setLoading(false);

            if (data) {
                setUsers([data]);
                setTotalCount(1);
            } else {
                setUsers([]);
                setError("Looks like we cant find the user");
            }
        } else {
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
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <label>Location</label>
                    <input
                        type="text"
                        placeholder="e.g., Egypt"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>

                <div>
                    <label>Min Repositories</label>
                    <input
                        type="number"
                        placeholder="e.g., 10"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                    />
                </div>

                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}

            {error && <p>{error}</p>}

            {users.length > 0 && (
                <div>
                    <p>Found {totalCount} user(s)</p>

                    <div>
                        {users.map((user) => (
                            <div key={user.id}>
                                <img
                                    src={user.avatar_url}
                                    alt={user.login}
                                />
                                <h3>{user.login}</h3>
                                {user.location && <p>{user.location}</p>}
                                {user.public_repos !== undefined && (
                                    <p>{user.public_repos} repositories</p>
                                )}
                                <a href={user.html_url} target="_blank" rel="noreferrer">
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