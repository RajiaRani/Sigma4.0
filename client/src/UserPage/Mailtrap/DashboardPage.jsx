import React from "react";
import { Button, Card, CardContent, Typography, Box, Divider } from "@mui/material";
import { useAuthStore } from "../../store/authStore";
import {formatDate} from "../../utils/date.js";

const DashboardPage = () => {
	const { user, logout } = useAuthStore();

	const handleLogout = () => {
		logout();
	};

	return (
		<Box
			sx={{
				maxWidth: 400,
				margin: "2rem auto",
				padding: "1.5rem",
				backgroundColor: "rgba(0, 0, 0, 0.7)",
				color: "white",
				borderRadius: "8px",
				boxShadow: 3,
			}}
		>
			<Typography
				variant="h4"
				component="h2"
				sx={{
					mb: 4,
					textAlign: "center",
					backgroundImage: "linear-gradient(to right, #66bb6a, #43a047)",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
				}}
			>
				Dashboard
			</Typography>

			<Card sx={{ mb: 3, backgroundColor: "rgba(38, 50, 56, 0.8)", color: "white" }}>
				<CardContent>
					<Typography variant="h6" component="h3" gutterBottom>
						Profile Information
					</Typography>
					<Divider sx={{ mb: 2, backgroundColor: "rgba(255, 255, 255, 0.3)" }} />
					<Typography>Name: {user.name}</Typography>
					<Typography>Email: {user.email}</Typography>
				</CardContent>
			</Card>

			<Card sx={{ mb: 3, backgroundColor: "rgba(38, 50, 56, 0.8)", color: "white" }}>
				<CardContent>
					<Typography variant="h6" component="h3" gutterBottom>
						Account Activity
					</Typography>
					<Divider sx={{ mb: 2, backgroundColor: "rgba(255, 255, 255, 0.3)" }} />
					<Typography>
						<span style={{ fontWeight: 600 }}>Joined: </span>
						{new Date(user.createdAt).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</Typography>
					<Typography>
						<span style={{ fontWeight: 600 }}>Last Login: </span>
						{formatDate(user.lastLogin)}
					</Typography>
				</CardContent>
			</Card>

			<Button
				variant="contained"
				fullWidth
				onClick={handleLogout}
				sx={{
					py: 1.5,
					backgroundImage: "linear-gradient(to right, #66bb6a, #43a047)",
					"&:hover": {
						backgroundImage: "linear-gradient(to right, #43a047, #388e3c)",
					},
				}}
			>
				Logout
			</Button>
		</Box>
	);
};

export default DashboardPage;
