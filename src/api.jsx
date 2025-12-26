import axios from "axios";

// ✅ Base API config (backend URL)
const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Interceptor to attach token if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Token ${token}`; // Django uses "Token", not "Bearer"
  }
  return config;
});

// ==================== AUTH APIS ====================

// 🔹 Register new user
export const registerUser = async (userData) => {
  try {
    const response = await API.post("accounts/register/", userData);
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error.response?.data || error.message);
    throw error;
  }
};

// 🔹 Login existing user
export const loginUser = async (credentials) => {
  try {
    const response = await API.post("accounts/login/", credentials);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};

// 🔹 Get current user (if needed later)
export const getUserProfile = async () => {
  try {
    const response = await API.get("accounts/profile/");
    return response.data;
  } catch (error) {
    console.error("Fetch user failed:", error.response?.data || error.message);
    throw error;
  }
};

export default API;
