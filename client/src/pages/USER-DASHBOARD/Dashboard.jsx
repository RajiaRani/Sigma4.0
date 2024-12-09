import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Dashboard() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get(`${BASE_URL}/api/user-dashboard`, { withCredentials: true })
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    console.error("Unauthorized. Redirecting to login...");
                    window.location.href = "/login"; // Redirect to login page
                } else {
                    console.error("Error fetching user data:", error);
                }
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
