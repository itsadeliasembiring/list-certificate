import React, { useState, useRef } from "react";
// Import Component MUI
import {
  Alert,
  Button,
  Container,
  Grid,
  TextField,
  Snackbar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// Import Component
import Navbar from "../Component/Navbar";
import UploadCertificateButton from "../Component/UploadCertificateButton";
// Import Theme
import Colors from "../Theme/Color";

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

  // Snackbar/Notification After Click Submit Button
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Container>
        <Navbar>Tambah Sertifikat</Navbar>
        <Grid container sx={{ mt: 7 }} spacing={2} align={"center"}>
          {/* Nama Kegiatan */}
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

          {/* Deskripsi */}
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
        </Grid>

        {/* Upload Sertifikat */}
        <UploadCertificateButton />

        <Grid Container>
          <Grid item xs={12}>
            {/* Button  */}
            <Button
              variant="contained"
              color="warning"
              onClick={handleClick}
              sx={{
                width: "100%",
                height: 45,
                fontSize: 15,
                textTransform: "capitalize",
                mt: 3,
                mb: 3,
              }}
            >
              Submit
            </Button>

            {/* Snackbar */}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "60%" }}
              >
                Form telah terkirim!
              </Alert>
            </Snackbar>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
