import axios from "axios";

// Dynamically set the base URL based on the environment
// const BASE_URL = import.meta.env.MODE === "production"
//     ?  "http://abroadhub.in"  
//     : "http://localhost:3000"; 
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Utility to handle Axios errors
const handleAxiosError = (error) => {
    if (error.response) {
        // Backend returned an error response
        console.error("Backend Error:", error.response.data);
        return error.response.data.message || "An error occurred on the server.";
    } else if (error.request) {
        // No response received from the server
        console.error("No response from server:", error.request);
        return "Unable to reach the server. Please check your internet connection.";
    } else {
        // Other errors during the request setup
        console.error("Request Error:", error.message);
        return "An unexpected error occurred. Please try again.";
    }
};


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
        const message = handleAxiosError(error);
        throw new Error(message);
    }
};

// University Fetch List
export const fetchUniversity = async () => { 
    try {
        const response = await axios.get(`${BASE_URL}/api/universities`, {
            headers: {
                "Accept": "application/json",
            },
            withCredentials: true 
        });
        return response.data;
    } catch (error) {
        const message = handleAxiosError(error);
        throw new Error(message);
    }
};

// FETCH COUNTRY DETAILS BY ID
export const fetchCountryDetailsById = async (id) => {
    if (!id) throw new Error("Country ID is required."); 
    try {
        const response = await axios.get(`${BASE_URL}/api/country/${id}`);
        return response.data;
    } catch (error) {
        const message = handleAxiosError(error);
        throw new Error(message);
    }
};


// FETCH University DETAILS BY ID
export const fetchUniversityDetailsById = async(id) => {
    if(!id) throw new Error(" University Id Required");
    try{
      const response = await axios.get(`${BASE_URL}/api/universities/${id}`);
      return response.data;
    }  catch(error) {
        const message = handleAxiosError(error);
        throw new Error(message);
    }
}


// Fetch universities filtered by country name
export const fetchUniversitiesByFilters = async ({ countryName, universityName }) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/universities/search`, {
            params: { countryName, minFees, maxFees, universityName },
        });
        return response.data;
    } catch (error) {
        const message = handleAxiosError(error);
        throw new Error(message);
    }
};