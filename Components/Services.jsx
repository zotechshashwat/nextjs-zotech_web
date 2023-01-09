import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { elements } from "../Static/Utils";

const Services = () => {
  console.log(elements);
  return (
    <Container align="center" className="servicecontainer">
      <Typography variant="h3" className="headingtext" mt={3}>
        We provide exclusive services
      </Typography>
      <Typography variant="h3" className="headingtext">
        for your business
      </Typography>

      {elements.map((e, index) => {
        const { imgSrc, heading, details } = e;
        return (
          <>
            {index % 2 == 0 ? (
              <Grid
                container
                mt={5}
                data-aos="fade-up"
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: {
                    lg: "row",
                    sm: "column-reverse",
                    xs: "column-reverse",
                  },
                }}
              >
                <Grid item lg={6} xs={12}>
                  <h1
                    variant="h4"
                    justifyContent="center"
                    className="servicecontentheading"
                    // style={{
                    //   fontSize: 34,
                    //   fontWeight: "bold",
                    //   marginTop: "120px",
                    //   color: "black",
                    //   textAlign: "left",
                    // }}
                  >
                    {heading}
                  </h1>
                  <Typography
                    variant="body1"
                    className="servicecontentdetails"
                    // sx={{ marginTop: "10px", textAlign: "left" }}
                  >
                    {details}
                  </Typography>
                </Grid>

                <Grid item lg={6} xs={12}>
                  <Box
                    component="img"
                    className="servicecontentimage"
                    // sx={{
                    //   width: "90%",
                    //   height: "auto",
                    //   marginBottom: "50px",
                    //   borderRadius: "20px",
                    // }}
                    src={imgSrc}
                  />
                </Grid>
              </Grid>
            ) : (
              <Grid
                container
                mt={5}
                data-aos="fade-up"
                key={index}
                justifyContent="space-between"
              >
                <Grid item lg={6} xs={12}>
                  <Box
                    component="img"
                    className="servicecontentimage"
                    // sx={{
                    //   width: "80%",
                    //   height: "auto",
                    //   marginBottom: "50px",
                    //   borderRadius: "20px",
                    // }}
                    src={imgSrc}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <h1
                    variant="h4"
                    className="servicecontentheading"
                    // style={{
                    //   fontSize: 34,
                    //   fontWeight: "bold",
                    //   marginTop: "120px",
                    //   color: "black",
                    //   textAlign: "left",
                    // }}
                  >
                    {heading}
                  </h1>
                  <Typography
                    variant="body1"
                    className="servicecontentdetails"
                    // sx={{ marginTop: "10px", textAlign: "left" }}
                  >
                    {details}
                  </Typography>
                </Grid>
              </Grid>
            )}
          </>
        );
      })}
    </Container>
  );
};

export default Services;
