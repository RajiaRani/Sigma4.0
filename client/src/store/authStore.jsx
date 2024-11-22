import { create } from "zustand";
import axios from "axios";



export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,

  signup: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      if (process.env.NODE_ENV === "development") {
        console.log("Signup data (partial):", { email, name });
      }
  
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/signup`, {
        email,
        password,
        name,
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message); // Debug log
      set({
        error: error.response?.data?.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    }
  }  
}));
