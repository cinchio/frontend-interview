import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

const query = "Canada";

function Countries() {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${query}`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(Array.isArray(data) ? data[0] : {});
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Countries matching "{query}"
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} key={country.alpha3Code}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={country.flags?.svg || country.flag}
                alt={country.name}
              />
              <CardContent>
                <Typography variant="h5">{country.name}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Capital: {country.capital}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default Countries;
