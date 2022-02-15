import React, { useState, useRef } from "react";
// Import Component MUI
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
// Import Icon
import AddIcon from "@mui/icons-material/Add";
// Import Component
import Navbar from "../Component/Navbar";
// Import Theme
import Colors from "../Theme/Color";
import UploadFileButton from "../Component/UploadFileButton";

export default function AddSertificate() {
  // Costum TextField
  const TextFields = styled(TextField)({
    width: "100%",
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "1.5px solid",
      borderColor: Colors.lightGray,
      borderRadius: 7,
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "solid",
      borderColor: Colors.lightGray,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: Colors.lightGray,
    },
  });

  return (
    <>
      <Container>
        <Navbar>Tambah Sertifikat</Navbar>
        <Grid container sx={{ mt: 7 }} spacing={2} align={"center"}>
          {/* Nama Events */}
          <Grid item xs={12}>
            <TextFields
              placeholder="Nama Kegiatan"
              inputProps={{
                style: {
                  fontSize: 14,
                  height: 15,
                },
              }}
            />
          </Grid>

          {/* Tahun */}
          <Grid item xs={12}>
            <TextFields
              placeholder="Tahun"
              inputProps={{
                style: {
                  fontSize: 14,
                  height: 15,
                },
              }}
            />
          </Grid>

          {/* No Pertandingan */}
          <Grid item xs={12}>
            <TextFields
              placeholder="No. Pertandingan"
              inputProps={{
                style: {
                  fontSize: 14,
                  height: 15,
                },
              }}
            />
          </Grid>

          {/* Juara */}
          <Grid item xs={12}>
            <TextFields
              placeholder="Juara"
              inputProps={{
                style: {
                  fontSize: 14,
                  height: 15,
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextFields
              placeholder="Deskripsi"
              multiline
              inputProps={{
                style: {
                  fontSize: 14,
                  height: 85,
                },
              }}
            />
          </Grid>

          {/* Input File */}
          <Grid item align={"left"}>
            <UploadFileButton />
          </Grid>

          <Grid item xs={12}>
            {/* Button  */}
            <Button
              variant="contained"
              color="warning"
              sx={{
                width: "100%",
                height: 45,
                fontSize: 15,
                textTransform: "capitalize",
                mt: 1,
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
