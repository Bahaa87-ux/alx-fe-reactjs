import axios from "axios";

const BASE_URL = "https://api.github.com/users";
const SEARCH_URL = "https://api.github.com/search/users";
const TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY;

// البحث العادي بالـ username
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

// البحث المتقدم
export const searchUsers = async (searchParams) => {
  try {
    const { username, location, minRepos } = searchParams;
    
    // بناء الـ query
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
    
    const response = await axios.get(`${SEARCH_URL}?q=${queryString}`, {
      headers: TOKEN ? { Authorization: `token ${TOKEN}` } : {},
    });
    
    return response.data;
  } catch (error) {
    console.error("Error searching users:", error);
    return null;
  }
};