"use client";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { COLOR } from "@/constants/color";
import { Box, Typography } from "@mui/material";
import { FEATURED_MEMBERS } from "@/constants/contents";
import Image from "next/image";

// stepper style
const useStyles: any = makeStyles((theme: Theme) => ({
  dots: {
    "& li.slick-active button::before": {
      color: COLOR.main.cyan,
    },
    "& li": {
      "& button::before": {
        fontSize: theme.typography.pxToRem(12),
        color: "gray",
        opacity: 1,
      },
    },
  },
}));

// home page components
const FeaturedMembers = () => {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    scroll: "none",
    arrows: false,
    dotsClass: `slick-dots ${classes.dots}`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          speed: 500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          arrows: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Box
      position={"relative"}
      px={{ md: 5,xs:0 }}
      textAlign={"center"}
      py={{ md: 15, sm: 8, xs: 4 }}
      pb={{ xs: 6 }}
    >
      <Typography fontSize={{ md: "2rem" }} fontWeight={"bold"} pb={{ md: 4 }}>
        LATEST FEATURED MEMBERS
      </Typography>
      <Box
        position={"absolute"}
        left={-150}
        top={0}
        width={"300px"}
        zIndex={-99}
      >
        <Image
          width={300}
          height={350}
          style={{ opacity: 0.8, objectFit: "cover" }}
          src="https://wedding-wonders.bugfinder.net/assets/uploads/content/6332933b3d1851664258875.png"
          alt=""
        />
      </Box>
      <Slider {...settings}>
        {FEATURED_MEMBERS.map((member, i) => (
          <Box key={i} mt={{ md: 5, sm: 3, xs: 2 }} pb={5}>
            <Box width={"220px"} m={"auto"}>
              <Image
                width={220}
                height={220}
                style={{
                  borderRadius: "50%",
                  textAlign: "center",
                  marginBottom: "16px",
                  objectFit: "cover",
                }}
                src={member.image_url}
                alt={member?.name}
              />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Typography>{member?.name}</Typography>
              <Typography mt={1}>
                <span style={{ fontWeight: "bold" }}>Age: </span>
                {member?.age}
              </Typography>
              <Typography
                my={1}
              >{`${member?.marital_status},${member?.gender}`}</Typography>
              <Typography>{member?.profession}</Typography>
              <Typography mb={"2px"} mt={1}>
                <span style={{ fontWeight: "bold" }}>From: </span>
                {member?.location}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default FeaturedMembers;
