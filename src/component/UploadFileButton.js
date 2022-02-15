import React from "react";
import { Button, Typography, Grid } from "@mui/material";
// Import Icon
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
// Import Theme
import Colors from "../Theme/Color";
function UploadFile() {
  // State to store uploaded file
  const [file, setFile] = React.useState("");

  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);
  }

  const UploadButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(Colors.lightGray),
    backgroundColor: Colors.lightGray,
    border: Colors.lightGray,
    "&:hover": {
      backgroundColor: Colors.lightGray,
      border: Colors.lightGray,
    },
  }));

  return (
    <>
      <Grid
        Container
        sx={{ display: "flex", mt: 2, mb: 0.5, alignItems: "center" }}
      >
        <Grid item sx={{ mr: 2 }}>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={handleUpload}
            id="buttonfile"
            hidden
          />
          <label htmlFor="buttonfile">
            <UploadButton
              variant="outlined"
              startIcon={<AddIcon />}
              component="span"
              fullWidth
            >
              Upload Sertifikat
            </UploadButton>
          </label>
        </Grid>

        <Grid item>
          <Typography fontWeight={"bold"}>{file.name}</Typography>
        </Grid>
      </Grid>

      <Typography fontSize={12} fontStyle={"italic"}>
        *Format: PNG, JPG, JPEG
      </Typography>
    </>
  );
}
export default function UploadFileButton() {
  return <UploadFile />;
}
