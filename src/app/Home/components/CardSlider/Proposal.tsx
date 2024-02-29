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
        fontSize: theme.typography.pxToRem(14),
        color: "#fff",
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
    width: "100px",
  };

  return (
    <Box
      position={"relative"}
      height={"50vh"}
      bgcolor={COLOR.gray.light}
      px={5}
      textAlign={"center"}
    >
      <Box position={"absolute"} width={"50vh"}>
        <Image
          width={250}
          height={250}
          style={{ opacity: 0.3,objectFit:"contain" }}
          src="https://wedding-wonders.bugfinder.net/assets/uploads/content/633292302011f1664258608.png"
          alt=""
        />
      </Box>
      <Slider {...settings}>
        {MARRIAGE_PROPOSALS.map((category, i) => (
          <Box key={i} mt={5} p={2}>
            <Typography
              sx={{
                fontWeight: "lighter",
                fontFamily: "monospace",
                color: "red",
                marginBottom: "15px",
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
                    mb: 1,
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
                  style={{ padding: "0px 5px" }}
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
        <Box mt={5} p={2}>
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
          <Typography >
            <People
              sx={{
                fontSize: "4em",
                bgcolor: COLOR.main.electricblue,
                borderRadius: "50%",
                p:.7,
                width:"60px",
                height:"60px",
                border:`5px solid ${COLOR.gray.light}`,
                boxShadow:`0 0 0 1.5px ${COLOR.main.electricblue}`
              }}
            />
          </Typography>
        </Box>
        <Box mt={5} p={2}>
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
