import axios from "axios";

const BASE_URL = "https://api.github.com/users";
const SEARCH_URL = "https://api.github.com/search/users";
// const TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY;

// إعداد الهيدر مرة واحدة لتجنب التكرار
const getHeaders = () => (TOKEN ? { Authorization: `token ${TOKEN}` } : {});

export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${BASE_URL}/${username}`, {
            headers: getHeaders(),
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

        if (username) query.push(username);
        if (location) query.push(`location:${location}`);
        if (minRepos) query.push(`repos:>=${minRepos}`);

        const queryString = query.join("+");

        if (!queryString) return null;

        // قمنا بإزالة كود جلب التفاصيل الفرعية لتسريع الأداء وتجنب الحظر
        const response = await axios.get(`${SEARCH_URL}?q=${queryString}&per_page=30`, {
            headers: getHeaders(),
        });

        return response.data;
    } catch (error) {
        console.error("Error searching users:", error);
        return null;
    }
};