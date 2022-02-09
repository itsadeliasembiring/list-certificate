import React from "react";
// Import Component MUI
import { AppBar, Box, IconButton, Typography } from "@mui/material";
// Import Icon
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <AppBar
        position="fixed"
        elevation="none"
        sx={{
          xs: 12,
          width: "100%",
          height: "55px",
          bgcolor: "#249EA0",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Link to="/">
            <IconButton
              sx={{
                color: "#fff",
                pt: 1.5,
                mr: 1,
                "&:hover, &.Mui-focusVisible": {
                  background: "transparent",
                  borderRadius: 0,
                },
              }}
            >
              <ArrowBackTwoToneIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Link>

          {/* Title */}
          <Typography sx={{ fontSize: 18, pt: 1.7 }}>
            {props.children}
          </Typography>
        </Box>
      </AppBar>
    </>
  );
}
