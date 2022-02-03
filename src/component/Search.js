import React from "react";
// Import Component MUI
import {
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  // InputBase,
} from "@mui/material";

// Import Icon
import SearchIcon from "@mui/icons-material/Search";
import "boxicons";

export default function Search() {
  return (
    <>
      {/* Search & Icon Button Setting */}
      <Grid container direction="row">
        {/* Search */}
        <Grid item xs={11}>
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
            }}
          />
        </Grid>
        {/* Icon Button */}
        <Grid item xs={1} color="#0000008A">
          <IconButton>
            <box-icon name="slider-alt" size="md" />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}
