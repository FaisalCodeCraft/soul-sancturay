import { Box, Container, Grid } from "@mui/material";
import React from "react";
import FpHeader from "../components/FpHeader/FpHeader";
import { COLOR } from "@/constants/color";
import FmFilter from "../components/FmFilter/FmFilter";
import FmProfiles from "../components/FmProfiles/FmProfiles";

const FpContainer = () => {
  return (
    <Box>
      <FpHeader />
      <Box bgcolor={COLOR.gray.light} px={{md:10}} py={{ md: 10, sm: 5, xs: 2 }}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item md={4} xs={12}>
              <FmFilter />
            </Grid>
            <Grid item md={8} xs={12}>
              <FmProfiles />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default FpContainer;
