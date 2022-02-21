import { Button, Input, LinearProgress } from "@mui/material";
import React from "react";
import MovieCreationSharpIcon from "@mui/icons-material/MovieCreationSharp";

const UploadVideo = () => {
  return (
    <div className="upload-video-container">
      <Button
        startIcon={<MovieCreationSharpIcon />}
        component="label"
        variant="outlined"
        style={{ marginTop: "1rem" }}
      >
        <Input type="file" accept="image/*" style={{ display: "none" }} />
        Upload Video
      </Button>

      <LinearProgress
        style={{ width: "165px", marginTop: "0.2rem", marginBottom: "2rem" }}
        variant="determinate"
        value={50}
      />
    </div>
  );
};

export default UploadVideo;
