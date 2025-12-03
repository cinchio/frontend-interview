import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Welcome to the Country Lookup App
      </Typography>
      <Typography variant="body1" gutterBottom>
        Click the button below to view information about countries.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/countries")}
        sx={{ mt: 2 }}
      >
        Go to Countries
      </Button>
    </Box>
  );
}

export default Home;
