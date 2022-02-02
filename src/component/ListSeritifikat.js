import React from "react";
// Import Component MUI
import {
  Box,
  Container,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
  IconButton,
  InputBase,
} from "@mui/material";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";

// Import Icon
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import SearchIcon from "@mui/icons-material/Search";
import "boxicons";

// Import Image
import images from "../images/noimage.jpg";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "#0000008A solid",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

// Icon Costum
const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: "#0000008A",
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// Input Base Costum
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // Color Search
  color: "#000",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2.5)})`,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function ListSeritifikat() {
  return (
    <div>
      <Container>
        <Box>
          {/* Button & Title Sertifikat */}
          <Grid>
            <Grid item xs={12}>
              <IconButton sx={{ color: "#000" }}>
                {/* Button */}
                <ChevronLeftRoundedIcon sx={{ fontSize: 50 }} />
                {/* Title */}
                <Typography sx={{ fontSize: 25, fontWeight: "bold" }}>
                  Sertifikat
                </Typography>
              </IconButton>
            </Grid>
          </Grid>

          {/* Search & Icon Button Setting */}
          <Grid container direction="row">
            {/* Search */}
            <Grid item xs={11} mr={-2}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Grid>
            {/* Icon Button */}
            <Grid item xs={1} color="#0000008A">
              <IconButton>
                <box-icon name="slider-alt" size="md" />
              </IconButton>
            </Grid>
          </Grid>

          {/* Card */}
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            {/* Card 1 */}
            <Grid item>
              <Card
                sx={{
                  maxWidth: 495,
                  ml: 1,
                  mt: 2,
                  height: 390,
                  border: "#0000008A solid",
                }}
              >
                <CardActionArea>
                  {/* Image */}
                  <CardMedia
                    component="img"
                    height="300"
                    image={images}
                    alt="green iguana"
                  />
                  <CardContent>
                    {/* Title */}
                    <Typography
                      gutterBottom
                      component="div"
                      fontWeight={"bold"}
                      mt={-1.5}
                      mb={0}
                    >
                      KEJUARAAN WAKODAI MONAS CUP 2016
                    </Typography>
                    {/* Description */}
                    <Typography variant="body1" color="text.secondary" mb={1}>
                      Juara 2 - Kumite Perorangan Putri -48 Kg
                    </Typography>
                    {/* Date */}
                    <Typography variant="body2" color="text.secondary">
                      26 Juli 2016
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            {/* Card 2 */}
            <Grid item>
              <Card
                sx={{
                  maxWidth: 495,
                  ml: 1,
                  mt: 2,
                  height: 390,
                  border: "#0000008A solid",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={images}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      component="div"
                      fontWeight={"bold"}
                      mt={-1.5}
                      mb={0}
                    >
                      KEJUARAAN WAKODAI MONAS CUP 2016
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={1}>
                      Juara 2 - Kumite Perorangan Putri -48 Kg
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      26 Juli 2016
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>

          {/* Button */}
          <Grid>
            <Grid item align="right">
              <Button
                variant="contained"
                color="warning"
                sx={{
                  mt: 5,
                  mr: 3,
                  mb: 3,
                  width: "50",
                  height: "50",
                  fontSize: 20,
                }}
              >
                +
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
