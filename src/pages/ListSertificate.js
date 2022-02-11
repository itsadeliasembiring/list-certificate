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
import Navbar from "../component/Navbar";
import CardSertificate from "../component/CardSertificate";
// Import React router
import { Link } from "react-router-dom";
// Import Card Data
import lotsOfData from "../component/CardData";

const ListSertificate = () => {
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
                        <SearchIcon sx={{ fontSize: 30, color: "#D3D3D3" }} />
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
                    border: "solid #D3D3D3",
                    borderRadius: 7,
                  },
                  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#D3D3D3",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#D3D3D3",
                    },
                }}
              />
            </Grid>

            {/* Button Setting */}
            <Grid item xs={1.3}>
              <IconButton>
                <TuneIcon sx={{ fontSize: 35, color: "#D3D3D3" }} />
              </IconButton>
            </Grid>
          </Grid>

          {/* Card Sertificate */}
          {lotsOfData.map((data) => (
            <Link
              to={`/detail-sertificate/${data.id}`}
              style={{ textDecoration: "none" }}
            >
              <CardSertificate
                img={data.img}
                description={data.description}
                date={data.date}
              />
            </Link>
          ))}

          {/* Button Add Certificate*/}
          <Grid container justifyContent="right">
            <Grid item align="right">
              <Link to="/add-sertificate" style={{ textDecoration: "none" }}>
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
};
export default ListSertificate;
