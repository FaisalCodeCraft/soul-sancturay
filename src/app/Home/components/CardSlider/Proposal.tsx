"use client";
import { MARRIAGE_PROPOSALS } from "@/constants/contents";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { COLOR } from "@/constants/color";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { People } from "@mui/icons-material";
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
        color: COLOR.gray.dark,
        opacity: 1,
      },
    },
  },
}));

// home page components
const Proposal = () => {
  const pathname = usePathname();

  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    scroll: "none",
    arrows: false,
    dotsClass: `slick-dots ${classes.dots}`,
    initialSlide: 0,
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
          dots: true,

        },
      },
    ],
  };

  return (
    <Box
      position={"relative"}
      bgcolor={COLOR.gray.light}
      height={{md:"50vh",xs:"35vh"}}
      px={5}
      textAlign={"center"}
      my={{xs:4}}
    >
      <Box position={"absolute"} width={{md:"300px"}} height={{md:"280px",xs:"150px"}} left={-80}>
        <Image
          fill
          style={{ opacity: 0.3, objectFit: "contain" }}
          src="https://wedding-wonders.bugfinder.net/assets/uploads/content/633292302011f1664258608.png"
          alt=""
        />
      </Box>
      <Slider {...settings}>
        {MARRIAGE_PROPOSALS.map((category, i) => (
          <Box key={i} mt={{md:5,sm:3,xs:1}} p={{md:2}}>
            <Typography
              sx={{
                fontWeight: "lighter",
                fontFamily: "monospace",
                color: "red",
                marginBottom: {md:"15px"},
              }}
            >
              {category?.title}
            </Typography>

            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexWrap={"wrap"}
              mb={"18px"}
            >
              {MARRIAGE_PROPOSALS[i].BY_CATEGORY?.map((item, i) => (
                <Typography
                  sx={{
                    cursor:"pointer",
                    mb: {md:1},
                    ":last-child": {
                      borderRight: "none",
                    },
                    borderRight: "1.5px solid black",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                    color: COLOR.gray.dark,
                  }}
                  key={i}
                >
                  {item}
                </Typography>
              ))}
              <Box
                sx={{
                  "& a": {
                    color: pathname === "/Search" ? COLOR.main.cyan : "black",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  },
                  mt: -0.7,
                  fontWeight: "medium",
                  pl: 1,
                }}
              >
                <Link href={"/Search"} key={i}>
                  {" "}
                  More...{" "}
                </Link>
              </Box>
            </Box>
          </Box>
        ))}
        <Box mt={{md:5}} p={2}>
          <Typography
            sx={{
              fontWeight: "lighter",
              fontFamily: "monospace",
              color: "red",
              marginBottom: "15px",
            }}
          >
            Best Matches
          </Typography>
          <Typography>
            <People
              sx={{
                fontSize: "4em",
                bgcolor: COLOR.main.electricblue,
                borderRadius: "50%",
                p: 0.7,
                width: "60px",
                height: "60px",
                border: `5px solid ${COLOR.gray.light}`,
                boxShadow: `0 0 0 1.5px ${COLOR.main.electricblue}`,
              }}
            />
          </Typography>
        </Box>
        <Box mt={{md:5}} p={2}>
          <Typography
            sx={{
              fontWeight: "lighter",
              fontFamily: "monospace",
              color: "red",
              marginBottom: "15px",
            }}
          >
            Verified profiles
          </Typography>
        </Box>
      </Slider>
    </Box>
  );
};

export default Proposal;
