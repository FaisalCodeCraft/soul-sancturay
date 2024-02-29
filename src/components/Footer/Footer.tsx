import { COLOR } from "@/constants/color";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <Box
      height={"70vh"}
      position={"relative"}
      bgcolor={COLOR.gray.light}
      mt={10}
    >
      <Box position={"absolute"} width={"50vh"} bottom={0}>
        <Image
        fill
          style={{ opacity: 0.6 }}
          src="https://wedding-wonders.bugfinder.net/assets/uploads/content/63425fd5595131665294293.png"
          alt=""
        />
      </Box>
      <Box p={5}>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item md={3}>
            <Box>
              <img
                width={"170px"}
                src="https://wedding-wonders.bugfinder.net/assets/uploads/logo/logo.png"
                alt="wedding-wonders"
              />
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box>
              <Typography fontWeight={"bold"}>USEFUL LINKS</Typography>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box>
              <Typography fontWeight={"bold"}>USEFUL LINKS</Typography>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box>
              <Typography fontWeight={"bold"}>USEFUL LINKS</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
