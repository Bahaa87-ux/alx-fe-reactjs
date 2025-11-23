import axios from "axios";

const BASE_URL = "https://api.github.com/users";
const SEARCH_URL = "https://api.github.com/search/users";
const TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${BASE_URL}/${username}`, {
            headers: TOKEN ? { Authorization: `token ${TOKEN}` } : {},
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
};

export const searchUsers = async (searchParams) => {
    try {
        const { username, location, minRepos } = searchParams;


        let query = [];

        if (username) {
            query.push(username);
        }

        if (location) {
            query.push(`location:${location}`);
        }

        if (minRepos) {
            query.push(`repos:>=${minRepos}`);
        }

        const queryString = query.join("+");

        if (!queryString) {
            return null;
        }

        console.log("Search query:", queryString);

        const response = await axios.get(`https://api.github.com/search/users?q=${queryString}&per_page=30`, {
            headers: TOKEN ? { Authorization: `token ${TOKEN}` } : {},
        });

        console.log("API Response:", response.data);

        if (response.data.items && response.data.items.length > 0) {
            const usersWithDetails = await Promise.all(
                response.data.items.map(async (user) => {
                    try {
                        const detailsResponse = await axios.get(user.url, {
                            headers: TOKEN ? { Authorization: `token ${TOKEN}` } : {},
                        });
                        return detailsResponse.data;
                    } catch (error) {
                        console.error("Error fetching user details:", error);
                        return user;
                    }
                })
            );

            return {
                total_count: response.data.total_count,
                items: usersWithDetails,
            };
        }

        return response.data;
    } catch (error) {
        console.error("Error searching users:", error);
        return null;
    }
};