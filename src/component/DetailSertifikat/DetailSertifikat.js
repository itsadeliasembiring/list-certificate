import React from "react";
// Import Component MUI
import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  Container,
} from "@mui/material";
// Import Icon
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import sertifikat from "../../assets/images/sertifikat.png";

export default function DetailSertifikat() {
  return (
    <>
      {/* Sertifikat */}
      <Box
        sx={{ mt: 25, mb: 15, justifyContent: "center", alignItems: "center" }}
      >
        <img src={sertifikat} width={"100%"} heigth={100} />
      </Box>

      {/* Button Download*/}
      <Container>
        <Grid container align={"center"}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="warning"
              sx={{
                width: "100%",
                height: 45,
                fontSize: 15,
                textTransform: "capitalize",
              }}
            >
              Download
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
