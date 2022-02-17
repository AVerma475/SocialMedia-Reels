import { Button, Input, TextField } from "@mui/material";
import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import { Carousel } from "react-responsive-carousel";

const index = () => {
  return (
    <div className="login-container">
      <div className="carbg">
        <div className="carousel">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            width={241}
            className={{ top: "0px", left: "0px" }}
          >
            <Image src={img1} alt="temp" />
            <Image src={img2} alt="temp" />
            <Image src={img3} alt="temp" />
          </Carousel>
        </div>
      </div>
      <div>
        <div className="login-card">
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
          <div style={{ color: "red" }}>Error</div>

          <Button fullWidth variant="contained" style={{ marginTop: "1rem" }}>
            Login
          </Button>
          <div style={{ color: "blue", marginTop: "0.5rem" }}>
            Forgot Password ?
          </div>
        </div>
        <div className="bottom-card">
          Dont have an account? &nbsp;
          <span style={{ color: "blue" }}>Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default index;
