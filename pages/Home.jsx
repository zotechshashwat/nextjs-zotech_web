import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import React from "react";
import Services from "../Components/Services";

const Home1 = () => {
  return (
    <>
      <Box component="div" className="homebackground">
        <Box component="div" className="contentbox">
          <Typography variant="h1" className="contentheading1">
            We Provide
          </Typography>
          <Typography variant="h1" className="contentheading2">
            Creative Business.
          </Typography>
          <Typography variant="body1" className="headingtext">
            "We Mak Sure Best Business Solution For Our Client"
          </Typography>
          <Button
            href="/ContactUs"
            variant="outlined"
            size="large"
            className="homebutton"
          >
            Contact Now
          </Button>
        </Box>
      </Box>
      <Services />
    </>
  );
};

export default Home1;
