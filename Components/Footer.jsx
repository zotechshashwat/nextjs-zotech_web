import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box component="div" sx={{ backgroundColor: "#1c1c1c",marginTop:"70px" }}>
        <Container>
          <Grid container>
            <Grid item lg={12} xs={12}>
              <Typography
                variant="h1"
                fontWeight="bold"
                color="white"
                align="center"
              >
                Zotech
              </Typography>
            </Grid>
          </Grid>
        </Container>

        <Box mt={1}>
          <Container>
            <Grid container mt={4}>
              <Grid item lg={6} xs={12}>
                <Typography
                  variant="h6"
                  color="white"
                  sx={{
                    textAlign: { md: "center", lg: "left", xs: "center" },
                  }}
                >
                  About Us
                </Typography>
                <Typography
                  color="white"
                  sx={{ textAlign: { md: "center", lg: "left", xs: "center" } }}
                >
                  Zotech Solution Pvt. Ltd. is highly committed to deliver
                  services that are excellent in quality & cost-effective. We
                  strive to lead global IT market by powerful tech methodologies
                  to create outstanding products.
                </Typography>
              </Grid>
              <Grid item lg={3} xs={12}>
                <Typography
                  variant="h6"
                  color="white"
                  sx={{
                    marginTop: { xs: "20px" },
                  }}
                >
                  Corporate Office
                </Typography>
                <Typography color="white">
                  A/301 , RJD Business Hub, Nagina Vadi Rd, New Pushpakunj
                  Society, Katargam, Surat, Gujarat 395004
                </Typography>
              </Grid>
              <Grid item lg={3} xs={12}>
                <Typography
                  variant="h6"
                  color="white"
                  sx={{
                    marginTop: { xs: "20px" },
                  }}
                >
                  Contact Us
                </Typography>
                <Typography color="white">
                  Phone no:
                  <a
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                    href="tel: 9512596661"
                  >
                    +91 9512596661
                  </a>
                </Typography>
                <Typography color="white" mt={3}>
                  <a
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                    href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZBXHfhKXpRGjJgMbbjMSxLXkFWRnXgmDtJLMJqBcXGsZgpVddNwbjfKcwNQpswXvpZljv"
                  >
                    info@zotech.in
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Container>
          <Box
            variant="div"
            sx={{
              textAlign: "center",
              border: "white",
              borderTop: "2px solid white",
              py: "10px",
              marginTop: "40px",
              color: "white",
            }}
          >
            <Typography sx={{ marginBottom: "10px" }}>
              © 2020-2022 Zotech PVT. All rights reserved
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;