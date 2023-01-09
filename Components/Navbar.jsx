import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import Drawer1 from "./Drawer";
import { navbar } from "../Static/Utils";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  const [color, setColor] = useState(false);
  const [show, setShow] = useState();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    setOpen(!open);
  };

  const navRef = React.useRef();
  navRef.current = color;

  React.useEffect(() => {
    if (show >= 120) {
      setColor(true);
    } else {
      setColor(false);
    }
  }, [show]);

  // window.addEventListener("scroll", function (event) {
  //   let scroll_y = this.scrollY;
  //   setShow(scroll_y);
  // });

  return (
    <>
      <Drawer1 open={open} setOpen={setOpen} />

      <AppBar
        component="nav"
        id="nav"
        sx={{
          backgroundColor: color ? "#1c1c1c" : "transparent",
          height: "90px",
          boxShadow: "none",
        }}
      >
        <Container>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h2"
              sx={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "white",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                margin: "10px",
              }}
            >
              Zotech
            </Typography>

            <Box
              component="div"
              sx={{
                display: { xs: "none", sm: "block" },
                marginLeft: "auto",
              }}
            >
              {navbar.map((e, index) => (
                <Link href={e.path}>
                  <Button
                    key={index}
                    sx={{
                      marginLeft: "10px",
                      color: "white",
                      "&:hover": {
                        borderBottom: "2px solid white",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {e.name}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
