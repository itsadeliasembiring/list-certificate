import React from "react";
// Import Component MUI
import { AppBar, Box, IconButton, Typography } from "@mui/material";
// Import Icon
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

export default function Appbar() {
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
        <Box sx={{ width: "100%" }}>
          <IconButton
            sx={{
              color: "#fff",
              "&:hover, &.Mui-focusVisible": {
                background: "transparent",
                borderRadius: 0,
              },
            }}
          >
            {/* Icon */}
            <ChevronLeftRoundedIcon sx={{ fontSize: 40 }} />

            {/* Title */}
            <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
              Sertifikat
            </Typography>
          </IconButton>
        </Box>
      </AppBar>
    </>
  );
}
