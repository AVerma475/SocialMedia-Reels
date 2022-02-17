import { Button, Input, TextField } from "@mui/material";
import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";

const index = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <Image src={logo} alt="logo" />
        <TextField
          id="outlined-basic"
          fullWidth
          size="small"
          margin="dense"
          label="Email"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          type="password"
          fullWidth
          size="small"
          margin="dense"
          label="Password"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          fullWidth
          size="small"
          margin="dense"
          label="Full name"
          variant="outlined"
        />
        <Button
          fullWidth
          variant="outlined"
          component="label"
          style={{ marginTop: "1rem" }}
        >
          <Input type="file" accept="image/*" style={{ display: "none" }} />
          Upload
        </Button>

        <Button fullWidth variant="contained" style={{ marginTop: "1rem" }}>
          Sign up
        </Button>
      </div>
      <div className="bottom-card">
        Already have an account? &nbsp;
        <span style={{ color: "blue" }}>Login</span>
      </div>
    </div>
  );
};

export default index;
