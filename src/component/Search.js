import React from "react";
// Import Component MUI
import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
// Import Icon
import SearchIcon from "@mui/icons-material/Search";
import "boxicons";

export default function Search() {
  return (
    <>
      <Grid container direction="row">
        {/* Search */}
        <Grid item xs={10.7}>
          <TextField
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              width: "100%",
              "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#249EA0",
                },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#249EA0",
                },
              // "&.MuiInputBase-root.Mui-focused .MuiInputBase-formControl .MuiInputBase-adornedStart 	.MuiInputBase-input":
              //   {
              //     background: "#000",
              //   },
              "& input::placeholder": {
                fontSize: "17px",
              },
            }}
          />
        </Grid>

        {/* Button Setting */}
        <Grid item xs={1.3}>
          <IconButton>
            <box-icon name="slider-alt" size="md" />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}
