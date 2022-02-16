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
import Navbar from "../Component/Navbar";
import CardCertificate from "../Component/CardCertificate";
// Import Card Data
import lotsOfData from "../Component/CardData";
// Import React router
import { Link } from "react-router-dom";
// Import Theme
import Colors from "../Theme/Color";

const ListCertificate = () => {
  // BgColor
  document.body.style.backgroundColor = Colors.white;

  return (
    <>
      <Container>
        <Navbar>Sertifikat</Navbar>

        <Box sx={{ mt: 9 }}>
          {/* Search */}
          <Grid container direction="row">
            <Grid item xs={10.7}>
              <TextField
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <SearchIcon
                          sx={{ fontSize: 30, color: Colors.lightGray }}
                        />
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
                    border: 1.5,
                    borderColor: Colors.lightGray,
                    borderRadius: 7,
                  },
                  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: Colors.lightGray,
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: Colors.lightGray,
                    },
                }}
              />
            </Grid>
            {/* Button Setting */}
            <Grid item xs={1.3}>
              <IconButton>
                <TuneIcon sx={{ fontSize: 35, color: Colors.orange }} />
              </IconButton>
            </Grid>
          </Grid>

          {/* Card Certificate */}
          {lotsOfData.map((data) => (
            <Link
              to={`/detail-certificate/${data.id}`}
              style={{ textDecoration: "none" }}
            >
              <CardCertificate
                img={data.img}
                title={data.title}
                description={data.description}
                date={data.date}
              />
            </Link>
          ))}

          {/* Button Add Certificate*/}
          <Grid container justifyContent="right">
            <Grid item align="right">
              <Link to="/add-certificate" style={{ textDecoration: "none" }}>
                <Button
                  onClick
                  variant="contained"
                  color="warning"
                  sx={{
                    mt: 5,
                    mb: 3,
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
export default ListCertificate;
