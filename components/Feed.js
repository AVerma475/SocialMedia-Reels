import { Avatar } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import UploadVideo from "./UploadVideo";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";

const Feed = () => {
  return (
    <div className="feed-container">
      <Navbar />
      <UploadVideo />
      <div className="videos-container">
        <div className="post-container">
          <video />
          <div className="videos-info">
            <div className="avatar-container">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/2.jpg"
                sx={{ m: "0.5rem" }}
              />{" "}
              <p>Name</p>
            </div>
            <div className="post-like">
              <FavoriteBorderSharpIcon fontSize="large" />
              10
            </div>
          </div>
        </div>
        <div className="post-container">
          <video />
        </div>
        <div className="post-container">
          <video />
        </div>
      </div>
    </div>
  );
};

export default Feed;
