import axios from "axios";

// Dynamically set the base URL based on the environment
const BASE_URL = process.env.NODE_ENV === "production"
    ? "http://abroadhub.in"  // Production URL
    : "http://localhost:8000";     // Development URL

// COUNTRY FETCH LIST
export const fetchCountry = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/country`);
        return response.data;
    } catch (error) {
        console.error("Fail to fetch", error);
        throw error;
    }
};

//University Fetch List
export const fetchUniversity = async() => {
    try{
        const response = await axios.get(`${BASE_URL}/universities`);
        return response.data;
    } catch(error){
        console.error("Fail to fetch university data", error);
        throw error;
    }
};




// FETCH COUNTRY DETAILS BY ID
export const fetchCountryDetailsById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/country/${id}`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch the country details from the backend.", error);
        throw error;
    }
};


