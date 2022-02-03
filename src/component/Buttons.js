import React from "react";
// Import Component MUI
import { Button, Grid } from "@mui/material";

export default function Buttons() {
  return (
    <>
      {/* Button */}
      <Grid justifyContent="right">
        <Grid item align="right">
          <Button
            variant="contained"
            color="warning"
            sx={{
              mt: 5,
              mb: 3,
              mr: {
                lg: 7,
              },
              width: "50",
              height: "50",
              fontSize: 20,
            }}
          >
            +
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
