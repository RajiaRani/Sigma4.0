import axios from "axios";

// Dynamically set the base URL based on the environment
const BASE_URL = import.meta.env.MODE === "production"
    ? import.meta.env.VITE_API_BASE_URL || "http://abroadhub.in"  // Ensure VITE_API_BASE_URL is set in the .env.production
    : `http://localhost:${import.meta.env.VITE_API_PORT || 3001}`;  // Development URL with fallback to 3001


// COUNTRY FETCH LIST
export const fetchCountry = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/country`, {
            headers: {
                "Accept": "application/json",
            }
        });
       
        return response.data;
    } catch (error) {
        console.error("Fail to fetch", error);
        throw new Error('Unable to fetch country data at this time. Please try again later.');
    }
};


//University Fetch List
export const fetchUniversity = async (id) => { 
    if (!id) throw new Error("University ID is required."); // Ensure id is defined
    try {
        const response = await axios.get(`${BASE_URL}/api/universities/${id}`, {
            headers: {
                "Accept": "application/json",
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching country details for ID ${id}:`, error.message);
        throw new Error('Unable to fetch country details. Please try again later.');
    }
};



// FETCH COUNTRY DETAILS BY ID
export const fetchCountryDetailsById = async (id) => {
    if (!id) throw new Error("University ID is required."); 
    try {
        const response = await axios.get(`${BASE_URL}/api/country/${id}`, {
            headers: {
                "Accept": "application/json",
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to fetch the country details from the backend.", error);
        throw error;
    }
};
