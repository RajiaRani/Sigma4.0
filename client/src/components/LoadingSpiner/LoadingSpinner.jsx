import { Box, CircularProgress } from "@mui/material";

const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom right, #1a202c, #065f46, #059669)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <CircularProgress
        size={64}
        sx={{
          color: "#10B981",
        }}
      />
    </Box>
  );
};

export default LoadingSpinner;
