import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import Image from "next/image";
import { COLOR } from "@/constants/color";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "85%",
  width: "80%",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
};

const FmDetailModal = (props: any) => {
  const { featuredMember, featuredMemberModal, onClose } = props;

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={featuredMemberModal}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={featuredMemberModal}>
          <Box
            bgcolor={COLOR.gray.light}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"4px"}
            boxShadow={"0px 0px 4px 0px lightGray"}
            px={{ md: 20, sm: 6, xs: 2 }}
            mb={2}
            sx={style}
          >
            <Box
              mt={{ md: 2, xs: 5 }}
              pb={{ md: 2 }}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box width={160} height={160} position={"relative"} top={50}>
                <Image
                  fill
                  style={{
                    borderRadius: "50%",
                    marginBottom: "16px",
                    objectFit: "cover",
                    border: `2px solid ${COLOR.gray.dark}`,
                  }}
                  src={featuredMember.image_url}
                  alt={featuredMember?.name}
                />
              </Box>
              <Box
                width={"100%"}
                height={140}
                position={"absolute"}
                top={0}
                zIndex={-1}
              >
                <Image
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  src="https://img.freepik.com/premium-photo/businessman-hold-cloud-icon-cloud-computing-concept-connect-smart-phone-cloud-computing-network-information-technologist-with-smart-phone-big-data-concept_150455-14085.jpg?size=626&ext=jpg&ga=GA1.1.1776656138.1710154044&semt=ais"
                  alt={featuredMember?.name}
                />
              </Box>
              <Typography
                fontSize={"1.2rem"}
                fontWeight={"bold"}
                mt={{ md: 7 }}
              >
                {featuredMember?.name}
              </Typography>
              <Typography mt={1}>
                <span style={{ fontWeight: "bold", color: COLOR.gray.dark }}>
                  Age:{" "}
                </span>
                {featuredMember?.age}
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold", color: COLOR.gray.dark }}>
                  Gender:{" "}
                </span>{" "}
                {featuredMember?.gender}
              </Typography>
            </Box>
            <Grid container  pt={2} px={{md:3}} spacing={4}>
              <Grid item md={7} xs={12}>
              <Typography fontSize={"1.3rem"} fontWeight={"bold"} pb={1}>Personal Info:</Typography>

                <Box pb={2} width={{ md: "80%" }}>

                  <Typography>
                    <span
                      style={{ fontWeight: "bold", color: COLOR.gray.dark }}
                    >
                      Marital Status:{" "}
                    </span>
                    {featuredMember?.marital_status}
                  </Typography>
                  <Typography my={0.7}>
                    <span
                      style={{ fontWeight: "bold", color: COLOR.gray.dark }}
                    >
                      Profession:{" "}
                    </span>{" "}
                    {featuredMember?.profession}
                  </Typography>
                  <Typography mb={"2px"}>
                    <span
                      style={{ fontWeight: "bold", color: COLOR.gray.dark }}
                    >
                      From:{" "}
                    </span>
                    {featuredMember?.location}
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={5} xs={12}>
                <Typography fontSize={"1.3rem"} fontWeight={"bold"} pb={1}>Description</Typography>
                <Typography fontSize={"15px"}>
                  {featuredMember?.about}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default FmDetailModal;
const btnStyle = {
  border: "1px solid rgb(238,44,130)",
  borderRadius: "8px",
  px: 3,
  mt: 2,
  fontSize: "small",
};
