import React from "react";
// Import Component MUI
import { Box, Button, Grid, Container } from "@mui/material";
// Import Component
import Navbar from "../component/Navbar";
import { useParams } from "react-router-dom";
// Import Card Data
import lotsOfData from "../component/CardData";

const DetailSertificate = () => {
  // Route params
  const { id } = useParams();
  console.log("id", id);

  document.body.style.backgroundColor = "#D3D3D3";

  const DataDetail = lotsOfData.filter((item) => item.id == id)[0];
  console.log("id", DataDetail);

  return (
    <div>
      <Navbar>Detail Sertifikat</Navbar>

      {/* Image Sertifikat */}
      <Box
        sx={{ mt: 25, mb: 15, justifyContent: "center", alignItems: "center" }}
      >
        <img src={DataDetail.img} width={"100%"} heigth={100} />
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

export default DetailSertificate;
