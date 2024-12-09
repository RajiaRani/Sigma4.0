import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Dashboard() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch user data from backend
        axios.get(`${BASE_URL}/api/user-dashboard`, { withCredentials: true })
  
            .then((response) => {
                setUser(response.data);  // Set user data in state
                console.log('User data:', response.data);
            })

            .catch((error) => {
                console.log('Error fetching user data:', error);
                // Handle errors such as not being authenticated
            });
    }, []);

    if (!user) {
        return <div>Loading...</div>;  // Display loading message until data is fetched
    }

    return (
        <div>
            <h1>Welcome, {user.username}</h1>
            <p>Email: {user.email}</p>
            <a href="/logout">Logout</a>
        </div>
    );
}

export default Dashboard;
