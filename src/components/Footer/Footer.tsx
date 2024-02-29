import { COLOR } from "@/constants/color";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Telegram,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Box position={"relative"} bgcolor={COLOR.gray.light} mt={10} px={3}>
      <Box position={"absolute"} width={"50vh"} bottom={0}>
        <Image
          fill
          style={{ opacity: 0.6 }}
          src="https://wedding-wonders.bugfinder.net/assets/uploads/content/63425fd5595131665294293.png"
          alt=""
        />
      </Box>
      <Box p={5}>
        <Grid container spacing={3} justifyContent={"center"}>
          <Grid item md={2.5}>
            <Box mt={-1}>
              <Image
                width={190}
                height={60}
                src="https://wedding-wonders.bugfinder.net/assets/uploads/logo/logo.png"
                alt="wedding-wonders"
              />
            </Box>
            <List sx={{ mt: 1 }}>
              <ListItem
                disableGutters
                sx={{
                  fontSize: ".9rem",
                  color: COLOR.gray.dark,
                  textDecoration: "none",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Email:</span>
                info@metrimony.com
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  fontSize: ".9rem",
                  color: COLOR.gray.dark,
                  textDecoration: "none",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Phone:</span>
                +1 800 123 456 789
              </ListItem>
              <Box display={"flex"} alignItems={"center"} mt={1}>
                <Facebook
                  fontSize="small"
                  sx={{
                    "&:hover": {
                      color: "red",
                    },
                  }}
                />
                <Twitter
                  fontSize="small"
                  sx={{
                    mx: 1,
                    "&:hover": {
                      color: "red",
                    },
                  }}
                />
                <LinkedIn
                  fontSize="small"
                  sx={{
                    mr: 1,
                    "&:hover": {
                      color: "red",
                    },
                  }}
                />

                <Instagram
                  fontSize="small"
                  sx={{
                    "&:hover": {
                      color: "red",
                    },
                  }}
                />
              </Box>
            </List>
          </Grid>
          <Grid item md={3}>
            <Box>
              <Typography fontWeight={"bold"} fontFamily={"monospace"}>
                USEFUL LINKS
              </Typography>
              <List disablePadding sx={{ mt: 2 }}>
                <ListItem disableGutters>
                  <Box
                    sx={{
                      "& a": {
                        fontSize: ".9rem",
                        color: COLOR.gray.dark,
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
                <ListItem disableGutters>
                  <Box
                    sx={{
                      "& a": {
                        fontSize: ".9rem",
                        color: COLOR.gray.dark,
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
                <ListItem disableGutters>
                  <Box
                    sx={{
                      "& a": {
                        fontSize: ".9rem",
                        color: COLOR.gray.dark,
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
                <ListItem disableGutters>
                  <Box
                    sx={{
                      "& a": {
                        fontSize: ".9rem",
                        color: COLOR.gray.dark,
                        textDecoration: "none",
                        "&:hover": {
                          color: "red",
                        },
                      },
                    }}
                  >
                    <Link href={"/FeaturedProfile"}>
                      {" "}
                      Featured&nbsp;Profile{" "}
                    </Link>
                  </Box>
                </ListItem>
                <ListItem disableGutters>
                  <Box
                    sx={{
                      "& a": {
                        fontSize: ".9rem",
                        color: COLOR.gray.dark,
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
                        fontSize: ".9rem",
                        color: COLOR.gray.dark,
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
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box>
              <Typography fontWeight={"bold"} fontFamily={"monospace"}>
                QUICK SEARCH
              </Typography>
              <List disablePadding sx={{ mt: 2 }}>
                <ListItem disableGutters>
                  <Box
                    sx={{
                      "& a": {
                        fontSize: ".9rem",
                        color: COLOR.gray.dark,
                        textDecoration: "none",
                        "&:hover": {
                          color: "red",
                        },
                      },
                    }}
                  >
                    <Link href={"/"}> Faq </Link>
                  </Box>
                </ListItem>
                <ListItem disableGutters>
                  <Box
                    sx={{
                      "& a": {
                        fontSize: ".9rem",
                        color: COLOR.gray.dark,
                        textDecoration: "none",
                        "&:hover": {
                          color: "red",
                        },
                      },
                    }}
                  >
                    <Link href={"/Search"}> Contact </Link>
                  </Box>
                </ListItem>
                <ListItem disableGutters>
                  <Box
                    sx={{
                      "& a": {
                        fontSize: ".9rem",
                        color: COLOR.gray.dark,
                        textDecoration: "none",
                        "&:hover": {
                          color: "red",
                        },
                      },
                    }}
                  >
                    <Link href={"/LatestProfile"}> Terms & Condition </Link>
                  </Box>
                </ListItem>

                <ListItem disableGutters>
                  <Box
                    sx={{
                      "& a": {
                        fontSize: ".9rem",
                        color: COLOR.gray.dark,
                        textDecoration: "none",
                        "&:hover": {
                          color: "red",
                        },
                      },
                    }}
                  >
                    <Link href={"/Donate"}> Privacy Policy </Link>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box>
              <Typography fontWeight={"bold"} fontFamily={"monospace"}>
                SUBSCRIBE NEWSLETTER
              </Typography>
              <Typography
                sx={{
                  my: 3,
                  fontSize: ".9rem",
                  color: COLOR.gray.dark,
                  textDecoration: "none",
                }}
              >
                Stay in the loop! Subscribe to our newsletter for exclusive
                update,tips and promotions
              </Typography>
              <Box
                display={"flex"}
                bgcolor={"white"}
                border={`1px solid ${COLOR.gray.dark}`}
              >
                <TextField
                fullWidth
                  type="email"
                  label="Enter Your Email"
                  size="small"
                  variant="standard"
                  InputProps={{
                    style: { border: "none", background: "white" },
                    disableUnderline: true,
                  }}
                />
                <Button sx={{ bgcolor: "black",borderRadius:0,color:"white", "&:hover": {bgcolor: "black",color:"red"} }}>
                  <Telegram />
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
