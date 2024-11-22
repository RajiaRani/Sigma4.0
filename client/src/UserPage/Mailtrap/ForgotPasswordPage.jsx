import React, { useState } from "react";
import { TextField, Button, Box, Typography, CircularProgress, Alert } from "@mui/material";
import { ArrowBack, Email } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

const ForgotPasswordPage = () => {
	const [email, setEmail] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);

	const { isLoading, forgotPassword } = useAuthStore();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await forgotPassword(email);
		setIsSubmitted(true);
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
				Forgot Password
			</Typography>

			{!isSubmitted ? (
				<Box component="form" onSubmit={handleSubmit}>
					<Typography variant="body1" sx={{ mb: 3, textAlign: "center", color: "rgba(255, 255, 255, 0.8)" }}>
						Enter your email address, and we'll send you a link to reset your password.
					</Typography>

					<Box sx={{ mb: 4 }}>
						<TextField
							fullWidth
							variant="outlined"
							type="email"
							label="Email Address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							InputProps={{
								startAdornment: <Email sx={{ mr: 1, color: "rgba(255, 255, 255, 0.6)" }} />,
							}}
							required
							sx={{
								backgroundColor: "rgba(255, 255, 255, 0.1)",
								borderRadius: 1,
								input: { color: "white" },
								label: { color: "rgba(255, 255, 255, 0.6)" },
							}}
						/>
					</Box>

					<Button
						fullWidth
						type="submit"
						variant="contained"
						sx={{
							backgroundImage: "linear-gradient(to right, #66bb6a, #43a047)",
							py: 1.5,
							"&:hover": {
								backgroundImage: "linear-gradient(to right, #43a047, #388e3c)",
							},
						}}
						disabled={isLoading}
					>
						{isLoading ? <CircularProgress size={24} color="inherit" /> : "Send Reset Link"}
					</Button>
				</Box>
			) : (
				<Alert
					severity="success"
					sx={{
						mb: 4,
						backgroundColor: "rgba(56, 142, 60, 0.2)",
						color: "white",
					}}
				>
					If an account exists for <strong>{email}</strong>, you will receive a password reset link shortly.
				</Alert>
			)}

			<Box sx={{ textAlign: "center", mt: 2 }}>
				<Link to="/login" style={{ textDecoration: "none", color: "#66bb6a" }}>
					<Button startIcon={<ArrowBack />} sx={{ color: "#66bb6a" }}>
						Back to Login
					</Button>
				</Link>
			</Box>
		</Box>
	);
};

export default ForgotPasswordPage;
