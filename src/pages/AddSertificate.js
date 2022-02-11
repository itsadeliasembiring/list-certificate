import React, { useState } from "react";
// Import Component MUI
import {
  Button,
  Container,
  IconButton,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
// Import Icon
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
// Import Component
import Navbar from "../component/Navbar";

export default function AddSertificate() {
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);

  // handleImageChange
  const handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Container>
        <Navbar>Tambah Sertifikat</Navbar>

        {/* Upload File Image */}
        <div className="container" style={{ marginTop: 70 }}>
          {/* Delete gImage */}
          <div align={"right"}>
            {imgPreview && (
              <IconButton
                onClick={() => setImgPreview(null)}
                variant="contained"
                color="error"
                sx={{
                  height: 45,
                  fontSize: 15,
                  mb: -7,
                }}
              >
                <CancelOutlinedIcon />
              </IconButton>
            )}
          </div>

          {/* Image Preview */}
          <div
            className="imgPreview"
            style={{
              background: imgPreview
                ? `url("${imgPreview}") no-repeat center/cover`
                : "transparent",
              width: "100%",
              height: "250px",
            }}
            align={"center"}
          >
            {!imgPreview && (
              <>
                <IconButton
                  sx={{
                    color: "#249EA0",
                  }}
                  component="label"
                  htmlFor="fileUpload"
                  className="customFileUpload"
                >
                  {/* Icon */}
                  <AddPhotoAlternateOutlinedIcon
                    sx={{
                      height: "80%",
                      width: "80%",
                    }}
                  />
                  <input
                    type="file"
                    hidden
                    id="fileUpload"
                    onChange={handleImageChange}
                  />
                </IconButton>
              </>
            )}

            {/* Error */}
            {error && (
              <Typography className="errorMsg" sx={{ color: "red", mt: -2 }}>
                File not supported!
              </Typography>
            )}
          </div>
        </div>

        <Grid container sx={{ mt: 1 }} spacing={2} align={"center"}>
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
                  border: "solid #D3D3D3",
                  borderRadius: 2,
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#D3D3D3",
                  },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#D3D3D3",
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
                  border: "solid #D3D3D3",
                  borderRadius: 2,
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#D3D3D3",
                  },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#D3D3D3",
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
                  border: "solid #D3D3D3",
                  borderRadius: 2,
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#D3D3D3",
                  },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#D3D3D3",
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
                  border: "solid #D3D3D3",
                  borderRadius: 2,
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#D3D3D3",
                  },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#D3D3D3",
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
                  border: "solid #D3D3D3",
                  borderRadius: 2,
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#D3D3D3",
                  },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#D3D3D3",
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
