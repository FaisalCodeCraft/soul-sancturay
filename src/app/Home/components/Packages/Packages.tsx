import ButtonComp from "@/components/Button/Button";
import { COLOR } from "@/constants/color";
import { PACKAGES } from "@/constants/contents";
import {
  CheckOutlined,
  CloseOutlined,
  DiamondOutlined,
  WorkspacePremiumOutlined

} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";

const Packages = () => {
  return (
    <Box py={{ md: 10,sm:6,xs:6 }} bgcolor={COLOR.gray.light}>
      <Container maxWidth="lg">
        {/* <Box position={"absolute"} right={0} top={0} width={"300px"} zIndex={-1}>
        <img
          width={"100%"}
          style={{ opacity: 0.8 }}
          src="https://wedding-wonders.bugfinder.net/assets/uploads/content/6332933b3d1851664258875.png"
          alt=""
        />
      </Box> */}
        <Typography fontSize={"2.2rem"} fontWeight={500} textAlign={"center"}>
          Packages
          <Grid container spacing={{md:6}} px={{md:3}}>
            {PACKAGES.map((feature, i) => (
              <Grid item md={4} xs={12} mt={5} key={i}>
                <Box
                  bgcolor={"white"}
                  boxShadow={"0 0 12px 1px lightGray"}
                  p={4}
                >
                  <DiamondOutlined
                    sx={{
                      fontSize: "4em",
                      bgcolor: COLOR.main.electricblue,
                      borderRadius: "50%",
                      p: 0.7,
                      width: "60px",
                      height: "60px",
                      border: `5px solid white`,
                      boxShadow: `0 0 0 1.5px ${COLOR.main.electricblue}`,
                    }}
                  />
                  <Typography fontSize={"1.2rem"} fontWeight={600} my={1.5}>
                    {feature?.title}
                  </Typography>
                  <Typography fontSize={"1.8rem"} fontWeight={600}>
                    <small style={{ fontWeight: "lighter" }}>
                      {feature?.usd}
                    </small>
                    {feature?.price}
                  </Typography>
                  <List sx={{ width: "230px", margin: "auto" }}>
                    <ListItem sx={{ fontSize: "14px",color:COLOR.gray.dark }}>
                      <CheckOutlined fontSize="small" sx={{ mr: 1 }} />
                      {feature?.expressInterest}
                    </ListItem>
                    <ListItem sx={{ fontSize: "14px",color:COLOR.gray.dark }}>
                      <CheckOutlined fontSize="small" sx={{ mr: 1 }} />
                      {feature?.uplaodPics}
                    </ListItem>
                    <ListItem sx={{ fontSize: "14px" ,color:COLOR.gray.dark}}>
                      <CheckOutlined fontSize="small" sx={{ mr: 1 }} />
                      {feature?.profileinfo}
                    </ListItem>
                    <ListItem sx={{ fontSize: "14px" ,color:COLOR.gray.dark}}>
                      {feature?.usd ? (
                        <CheckOutlined fontSize="small" sx={{ mr: 1 }} />
                      ) : (
                        <CloseOutlined fontSize="small" sx={{ mr: 1 }} />
                      )}

                      {feature?.autoMatch}
                    </ListItem>
                  </List>
                  <Button sx={btnStyle}>Purchase Packages</Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Typography>
      </Container>
    </Box>
  );
};

export default Packages;
const btnStyle = {
  backgroundColor: COLOR.main.electricblue,
  color: COLOR.gray.dark,
  width: "200px",
  padding: "5px",
  transition: ".3s",
  border: `5px solid white`,
  boxShadow: `0 0 0 1.5px ${COLOR.main.electricblue}`,
  marginTop: 3,
  "&:hover": {
    backgroundColor: COLOR.main.cyan,
  },
};
