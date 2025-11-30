import { useState } from 'react';
import { fetchUserData, fetchAdvancedSearchResults } from '../services/githubService';

const Search = () => {
    // State for Inputs
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');

    // State for UI handling
    const [userData, setUserData] = useState([]); // Array to handle multiple results
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false); // To toggle "Looks like we cant find the user"

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setUserData([]);

        try {
            let data = [];

            // Logic: If only username is present and no advanced filters, use fetchUserData (Task 1 requirement base)
            // Otherwise use advanced search (Task 2)
            if (username && !location && !minRepos) {
                const singleUser = await fetchUserData(username);
                if (singleUser) {
                    data = [singleUser];
                } else {
                    // Task 1 Requirement: Show specific error message if not found
                    setError(true);
                }
            } else {
                // Advanced Search
                data = await fetchAdvancedSearchResults(username, location, minRepos);
                if (!data || data.length === 0) {
                    setError(true);
                }
            }

            setUserData(data || []);

        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            {/* Search Form - Task 2 UI Enhancement using Tailwind */}
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <input
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <input
                        type="number"
                        placeholder="Min Repos"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Search
                </button>
            </form>

            {/* Conditional Rendering based on States */}

            {loading && <p className="text-center text-lg">Loading...</p>}

            {error && <p className="text-center text-red-500 text-lg">Looks like we cant find the user</p>}

            {/* Results Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {userData.map((user) => (
                    <div key={user.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                        <img
                            src={user.avatar_url}
                            alt={user.login}
                            className="w-24 h-24 rounded-full mb-4"
                        />
                        <h2 className="text-xl font-bold mb-2">{user.login}</h2>

                        {/* عرض المعلومات الإضافية إن وجدت */}
                        {user.location && <p className="text-gray-600">📍 {user.location}</p>}
                        {user.public_repos && <p className="text-gray-600">📚 {user.public_repos} Repos</p>}

                        <a
                            href={user.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 text-blue-500 hover:underline"
                        >
                            View Profile
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;