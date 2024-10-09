import axios from "axios";

// Dynamically set the base URL based on the environment
const BASE_URL = import.meta.env.NODE_ENV === "production"
    ? "http://abroadhub.in"  // Production URL
    : "http://localhost:3001";     // Development URL

// COUNTRY FETCH LIST
export const fetchCountry = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/country`);
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
        const response = await axios.get(`${BASE_URL}/universities/${id}`);
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
        const response = await axios.get(`${BASE_URL}/country/${id}`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch the country details from the backend.", error);
        throw error;
    }
};
