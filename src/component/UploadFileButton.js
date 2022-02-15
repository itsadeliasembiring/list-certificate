import React from "react";
import { Button, Typography, Alert } from "@mui/material";
// Import Icon
import AddIcon from "@mui/icons-material/Add";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";

function UploadFile() {
  // State to store uploaded file
  const [file, setFile] = React.useState("");

  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);
  }

  return (
    <>
      <input type="file" onChange={handleUpload} id="buttonfile" hidden />
      <label htmlFor="buttonfile">
        <Button
          variant="outlined"
          color="warning"
          startIcon={<AddIcon />}
          component="span"
          sx={{ mb: 1 }}
        >
          Upload Sertifikat
        </Button>
      </label>

      <Typography>{file.name}</Typography>
      {/* <Alert
        icon={<PhotoOutlinedIcon fontSize="inherit" />}
        severity="success"
        onClose={() => {}}
      >
        {file.name}
      </Alert> */}
    </>
  );
}
export default function UploadFileButton() {
  return <UploadFile />;
}
