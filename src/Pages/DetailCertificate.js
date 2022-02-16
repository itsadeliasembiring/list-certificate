import React from "react";
// Import Component MUI
import { Box, Button, Container, Grid } from "@mui/material";
// Import Component
import Navbar from "../Component/Navbar";
// Import Card Data
import lotsOfData from "../Component/CardData";
// Import Router & Packages
import { useParams } from "react-router-dom";
import { saveAs } from "file-saver";
// Import Theme
import Colors from "../Theme/Color";

const DetailCertificate = () => {
  // BgColor
  document.body.style.backgroundColor = Colors.lightGray;

  // Route params
  const { id } = useParams();
  console.log("id", id);

  const DataDetail = lotsOfData.filter((item) => item.id == id)[0];
  console.log("id", DataDetail);

  // Save Certificate
  const saveFile = () => {
    saveAs(DataDetail.img, "certificate");
  };

  return (
    <>
      <Navbar>Detail Sertifikat</Navbar>

      {/* Image Certificate */}
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
              onClick={saveFile}
              sx={{
                width: "100%",
                height: 40,
                fontSize: 15,
                textTransform: "capitalize",
                mb: 2,
              }}
            >
              Download
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DetailCertificate;
