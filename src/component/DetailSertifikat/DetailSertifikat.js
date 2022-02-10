import React from "react";
// Import Component MUI
import { Box, Button, Grid, Container } from "@mui/material";
// Import Component
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";

const DetailSertifikat = () => {
  const { id } = useParams();

  document.body.style.backgroundColor = "#D3D3D3";
  console.log("id", id);

  return (
    <div>
      <Navbar>Detail Sertifikat</Navbar>
      {/* Sertifikat */}
      <Box
        sx={{ mt: 25, mb: 15, justifyContent: "center", alignItems: "center" }}
      >
        <img src={id} width={"100%"} heigth={100} />
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
    </div>
  );
};
export default DetailSertifikat;
