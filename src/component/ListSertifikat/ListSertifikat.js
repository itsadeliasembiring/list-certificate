import React from "react";
// Import Component MUI
import {
  Button,
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
// Import Icon
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
// Import Component
import CardSertifikat from "./CardSertifikat";
import Navbar from "../Navbar/Navbar";
// Import React router
import { Link } from "react-router-dom";

export default function ListSertifikat() {
  document.body.style.backgroundColor = "#fff";

  return (
    <>
      <Container>
        <Navbar>Sertifikat</Navbar>
        <Box sx={{ mt: 9 }}>
          <Grid container direction="row">
            {/* Search */}
            <Grid item xs={10.7}>
              <TextField
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <SearchIcon sx={{ fontSize: 30, color: "#249EA0" }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                  style: {
                    fontSize: 18,
                    height: 50,
                  },
                }}
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    border: "solid #249EA0",
                    borderRadius: 7,
                  },
                  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#249EA0",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#249EA0",
                    },
                }}
              />
            </Grid>

            {/* Button Setting */}
            <Grid item xs={1.3}>
              <IconButton>
                <TuneIcon sx={{ fontSize: 35, color: "#249EA0" }} />
              </IconButton>
            </Grid>
          </Grid>

          <CardSertifikat />

          {/* Button */}
          <Grid container justifyContent="right">
            <Grid item align="right">
              <Link to="/tambahsertifikat" style={{ textDecoration: "none" }}>
                <Button
                  onClick
                  variant="contained"
                  color="warning"
                  sx={{
                    mt: 5,
                    mb: 3,
                    mr: {
                      lg: 10,
                    },
                    width: 40,
                    height: 40,
                    fontSize: 20,
                    textDecoration: "none",
                  }}
                >
                  +
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
