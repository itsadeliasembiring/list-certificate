import React from "react";
// Import Component MUI
import { Button, Container, IconButton, Grid, TextField } from "@mui/material";
// Import Icon
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

export default function TambahSertifikat() {
  return (
    <>
      <Container>
        <Grid container sx={{ mt: 7 }} spacing={2} align={"center"}>
          {/* Upload File Gambar */}
          <Grid item xs={12}>
            <IconButton
              sx={{
                color: "#249EA0",
              }}
              component="label"
            >
              {/* Icon */}
              <AddPhotoAlternateOutlinedIcon sx={{ fontSize: 150 }} />
              <input type="file" hidden />
            </IconButton>
          </Grid>

          {/* Nama Events */}
          <Grid item xs={12}>
            <TextField
              placeholder="Nama Events"
              inputProps={{
                style: {
                  fontSize: 14,
                  height: 15,
                },
              }}
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  border: "solid #249EA0",
                  borderRadius: 2,
                },
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

          {/* Tahun */}
          <Grid item xs={12}>
            <TextField
              placeholder="Tahun"
              inputProps={{
                style: {
                  fontSize: 14,
                  height: 15,
                },
              }}
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  border: "solid #249EA0",
                  borderRadius: 2,
                },
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

          {/* No Pertandingan */}
          <Grid item xs={12}>
            <TextField
              placeholder="No. Pertandingan"
              inputProps={{
                style: {
                  fontSize: 14,
                  height: 15,
                },
              }}
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  border: "solid #249EA0",
                  borderRadius: 2,
                },
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

          {/* Juara */}
          <Grid item xs={12}>
            <TextField
              placeholder="Juara"
              inputProps={{
                style: {
                  fontSize: 14,
                  height: 15,
                },
              }}
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  border: "solid #249EA0",
                  borderRadius: 2,
                },
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

          <Grid item xs={12}>
            <TextField
              placeholder="Deskripsi"
              multiline
              inputProps={{
                style: {
                  fontSize: 14,
                  height: 85,
                },
              }}
              sx={{
                width: "100%",
                mb: 5,
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  border: "solid #249EA0",
                  borderRadius: 2,
                },
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

          {/* Button Submit */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="warning"
              sx={{
                width: "100%",
                height: 45,
                fontSize: 15,
                textTransform: "capitalize",
                mt: -3,
                mb: 1,
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
