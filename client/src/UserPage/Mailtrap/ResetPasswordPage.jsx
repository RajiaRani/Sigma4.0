import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, CircularProgress, Alert } from "@mui/material";
import { Lock } from "@mui/icons-material";
import toast from "react-hot-toast";
import { useAuthStore } from "../../store/authStore";

const ResetPasswordPage = () => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const { resetPassword, error, isLoading, message } = useAuthStore();
	const { token } = useParams();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			toast.error("Passwords do not match");
			return;
		}
		try {
			await resetPassword(token, password);
			toast.success("Password reset successfully. Redirecting to login page...");
			setTimeout(() => navigate("/login"), 2000);
		} catch (err) {
			console.error(err);
			toast.error(err.message || "Error resetting password");
		}
	};

	return (
		<Box
			sx={{
				maxWidth: 400,
				margin: "2rem auto",
				padding: "2rem",
				backgroundColor: "rgba(38, 50, 56, 0.8)",
				color: "white",
				borderRadius: 2,
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
				Reset Password
			</Typography>

			{error && (
				<Alert severity="error" sx={{ mb: 2, backgroundColor: "rgba(239, 83, 80, 0.2)", color: "white" }}>
					{error}
				</Alert>
			)}
			{message && (
				<Alert severity="success" sx={{ mb: 2, backgroundColor: "rgba(76, 175, 80, 0.2)", color: "white" }}>
					{message}
				</Alert>
			)}

			<Box component="form" onSubmit={handleSubmit}>
				<TextField
					fullWidth
					type="password"
					label="New Password"
					variant="outlined"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					InputProps={{
						startAdornment: <Lock sx={{ mr: 1, color: "rgba(255, 255, 255, 0.6)" }} />,
					}}
					required
					sx={{
						mb: 3,
						backgroundColor: "rgba(255, 255, 255, 0.1)",
						borderRadius: 1,
						input: { color: "white" },
						label: { color: "rgba(255, 255, 255, 0.6)" },
					}}
				/>

				<TextField
					fullWidth
					type="password"
					label="Confirm New Password"
					variant="outlined"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					InputProps={{
						startAdornment: <Lock sx={{ mr: 1, color: "rgba(255, 255, 255, 0.6)" }} />,
					}}
					required
					sx={{
						mb: 4,
						backgroundColor: "rgba(255, 255, 255, 0.1)",
						borderRadius: 1,
						input: { color: "white" },
						label: { color: "rgba(255, 255, 255, 0.6)" },
					}}
				/>

				<Button
					fullWidth
					type="submit"
					variant="contained"
					disabled={isLoading}
					sx={{
						backgroundImage: "linear-gradient(to right, #66bb6a, #43a047)",
						py: 1.5,
						"&:hover": {
							backgroundImage: "linear-gradient(to right, #43a047, #388e3c)",
						},
					}}
				>
					{isLoading ? <CircularProgress size={24} color="inherit" /> : "Set New Password"}
				</Button>
			</Box>
		</Box>
	);
};

export default ResetPasswordPage;
