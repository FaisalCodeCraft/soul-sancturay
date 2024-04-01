import { COLOR } from "@/constants/color";
import styles from "./HappyStories.module.css";
import { STORIES } from "@/constants/contents";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HappyStories = () => {
  return (
    <Box bgcolor={COLOR.gray.light} pb={{ md: 6 }} position={"relative"}>
      <Typography
        fontSize={{ md: "3rem", sm: "2rem", xs: "1.5rem" }}
        py={{ md: 7, sm: 3, xs: 2 }}
        textAlign={"center"}
      >
        Success Stories
      </Typography>
      <Container maxWidth="lg">
        <Grid container spacing={3} px={{ md: 2 }}>
          {STORIES.map((story, i) => (
            <Grid item md={4} sm={6} xs={12} key={i}>
              <Box width={{ md: 340 }}>
                <Link
                  href={`/SuccessStories/${story?.id}`}
                  className={styles.container}
                  style={{
                    display: "flex",
                    marginBottom: "20px",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Image
                    width={340}
                    height={240}
                    className={styles.image}
                    src={story?.poster}
                    alt="nature"
                  />
                  <div className={styles.contents}>
                    <Typography fontSize={"1.3rem"} fontWeight={"bold"}>
                      {`${story?.mPartnerName} & ${story?.fePartnerName}`}
                    </Typography>
                    <Typography fontWeight={"bold"} mt={1}>
                      {story?.successDate}
                    </Typography>
                  </div>
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* <Box position={"absolute"}  top={-50} right={-260} width={"400px"}>
        <Image
          width={300}
          height={380}
          style={{ opacity: 0.8 }}
          src="https://wedding-wonders.bugfinder.net/assets/uploads/content/6332933b3d1851664258875.png"
          alt=""
        />
      </Box> */}
    </Box>
  );
};

export default HappyStories;
