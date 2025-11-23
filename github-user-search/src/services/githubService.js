import axios from "axios";

const BASE_URL = "https://api.github.com/users";
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
