"use client";
import { COLOR } from "@/constants/color";
import {
  AccountCircleOutlined,
  LoginOutlined,
  PersonAddOutlined,
} from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  // console.log(cartLenght)
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [navShadow, setNavShadow] = React.useState(false);
  const [color, setColor] = React.useState(false);


  const changeBgColor = () => {
    if (window.scrollY >= 5) {
      setNavShadow(true);
      setColor(true);
    } else {
      setNavShadow(false);
      setColor(false);
    }
  };
  
  if (typeof window !== 'undefined') {
    window.addEventListener("scroll", changeBgColor);
  }
 
  const pathname = usePathname();

  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);

  const drawer = (
    // toggle for small screen
    <Box
      onClick={() => handleDrawerToggle()}
      style={{ textAlign: "center" }}
      px={3}
    >
      <List>
        <ListItem>
          <Link href="/Home" style={{ color: "black", textDecoration: "none" }}>
            Home
          </Link>
        </ListItem>
        <ListItem disableGutters={true}>
          <Link
            href="#about"
            style={{ color: "black", textDecoration: "none" }}
          >
            About
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="#courses"
            style={{ color: "black", textDecoration: "none" }}
          >
            Courses
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="#whyUS"
            style={{ color: "black", textDecoration: "none" }}
          >
            WhyUs
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="#services"
            style={{ color: "black", textDecoration: "none" }}
          >
            Services
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="#contact"
            style={{ color: "black", textDecoration: "none" }}
          >
            Contact
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box position={"relative"}>
      <AppBar
        component="nav"
        style={{
          boxShadow: "none",
          transition: "all .3s ease",
          backgroundColor: color ? "white" : "transparent",
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            boxShadow: navShadow ? "1px 1px 8px gray" : "none",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ display: { sm: "flex", md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <List>
            <ListItem>
              <Link
                href="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <Image
                width={180} height={60}
                  src="https://wedding-wonders.bugfinder.net/assets/uploads/logo/logo.png"
                  alt="wedding-wonders"
                />
              </Link>
            </ListItem>
          </List>
          <List disablePadding style={{ display: "flex" }}>
            <ListItem disableGutters>
            
              <Box
                sx={{
                  "& a": {
                    color:
                      pathname === "/"
                        ? "red"
                        : color
                        ? "black"
                        : "white",
                    textDecoration: "none",
                    "&:hover": {
                      color: "red",
                    },
                  },
                }}
              >
                <Link href={"/"}> Home </Link>
              </Box>
            </ListItem>
            <ListItem >
            
              <Box
                sx={{
                  "& a": {
                    color:
                      pathname === "/Search"
                        ? "red"
                        : color
                        ? "black"
                        : "white",
                    textDecoration: "none",
                    "&:hover": {
                      color: "red",
                    },
                  },
                }}
              >
                <Link href={"/Search"}> Search </Link>
              </Box>
            </ListItem>
            <ListItem >
            
              <Box
                sx={{
                  "& a": {
                    color:
                      pathname === "/LatestProfile"
                        ? "red"
                        : color
                        ? "black"
                        : "white",
                    textDecoration: "none",
                    "&:hover": {
                      color: "red",
                    },
                  },
                }}
              >
                <Link href={"/LatestProfile"}> Latest&nbsp;Profile </Link>
              </Box>
            </ListItem>
            <ListItem >
            
              <Box
                sx={{
                  "& a": {
                    color:
                      pathname === "/FeaturedProfile"
                        ? "red"
                        : color
                        ? "black"
                        : "white",
                    textDecoration: "none",
                    "&:hover": {
                      color: "red",
                    },
                  },
                }}
              >
                <Link href={"/FeaturedProfile"}> Featured&nbsp;Profile </Link>
              </Box>
            </ListItem>
            <ListItem >
            
              <Box
                sx={{
                  "& a": {
                    color:
                      pathname === "/SuccessStories"
                        ? "red"
                        : color
                        ? "black"
                        : "white",
                    textDecoration: "none",
                    "&:hover": {
                      color: "red",
                    },
                  },
                }}
              >
                <Link href={"/SuccessStories"}> Success&nbsp;Stories </Link>
              </Box>
            </ListItem>
            <ListItem disableGutters>
            
              <Box
                sx={{
                  "& a": {
                    color:
                      pathname === "/Donate"
                        ? "red"
                        : color
                        ? "black"
                        : "white",
                    textDecoration: "none",
                    "&:hover": {
                      color: "red",
                    },
                  },
                }}
              >
                <Link href={"/Donate"}> Donate </Link>
              </Box>
            </ListItem>
          
          </List>

          <List className={styles.dropdown}>
            <Typography>
              <AccountCircleOutlined
                sx={{ color: color ? "black" : "white" }}
              />
            </Typography>
            <Box className={styles.dropdownContent}>
              <ListItem sx={{ py: 1 }}>
                <Box
                  border={`1.5px solid ${COLOR.main.cyan}`}
                  borderRadius={"50%"}
                  width={"48px"}
                  height={"48px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  mr={1}
                  p={2}
                >
                  <LoginOutlined
                    fontSize="large"
                    sx={{
                      bgcolor: COLOR.main.cyan,
                      p: 0.7,
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                    }}
                  />
                </Box>
                LOGIN
              </ListItem>
              <Divider />

              <ListItem sx={{ py: 1 }}>
                <Box
                  border={`1.5px solid ${COLOR.main.cyan}`}
                  borderRadius={"50%"}
                  width={"48px"}
                  height={"48px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  mr={1}
                  p={2}
                >
                  <PersonAddOutlined
                    fontSize="large"
                    sx={{
                      bgcolor: COLOR.main.cyan,
                      p: 0.7,
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                    }}
                  />
                </Box>
                REGISTER
              </ListItem>
            </Box>
          </List>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          style={{
            display: "block",

            // "& .MuiDrawer-paper": {
            //   boxSizing: "border-box",
            //   width: drawerWidth,
            // },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
    </Box>
  );
};
export default Navbar;

const drawerWidth = 200;
