import axios from "axios";

// Dynamically set the base URL based on the environment
// const BASE_URL = import.meta.env.MODE === "production"
//     ?  "http://abroadhub.in"  
//     : "http://localhost:3000"; 

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log("Using BASE_URL:", BASE_URL);

// COUNTRY FETCH LIST
export const fetchCountry = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/country`, {
            headers: {
                "Accept": "application/json",
            },
            withCredentials: true // Ensure credentials are sent with the request
        });
        return response.data;
    } catch (error) {
        console.error("Fail to fetch", error);
        throw new Error('Unable to fetch country data at this time. Please try again later.');
    }
};

// University Fetch List
export const fetchUniversity = async () => { 
    try {
        const response = await axios.get(`${BASE_URL}/api/universities`, {
            headers: {
                "Accept": "application/json",
            },
            withCredentials: true // Ensure credentials are sent with the request
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching university list:`, error);
        throw new Error('Unable to fetch university details. Please try again later.');
    }
};

// FETCH COUNTRY DETAILS BY ID
export const fetchCountryDetailsById = async (id) => {
    if (!id) throw new Error("Country ID is required."); // Ensure id is defined
    try {
        const response = await axios.get(`${BASE_URL}/api/country/${id}`, {
            headers: {
                "Accept": "application/json",
            },
            withCredentials: true // Ensure credentials are sent with the request
        });
        return response.data;
    } catch (error) {
        console.error("Failed to fetch the country details from the backend.", error);
        throw error;
    }
};