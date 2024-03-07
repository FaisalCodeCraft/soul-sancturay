import { COLOR } from "@/constants/color";
import { STORIES } from "@/constants/contents";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const SingleStory = ({ params }: any) => {
  return (
    <Box>
      <Box height={{ md: "55vh" }} color={"white"}>
        <Typography
          fontSize={{ md: "3rem", sm: "2rem", xs: "1.5rem" }}
          pt={{ md: 10 }}
          pb={{ md: 0, xs: 3 }}
          textAlign={"center"}
        >
          Stories Details
        </Typography>
      </Box>
      <Box bgcolor={COLOR.gray.light}>
        <Container maxWidth="md">
          {STORIES.map((story, i) => (
            <Box key={i}>
              {story?.id == params.id && (
                <Box>
                  <Typography
                    textAlign={"center"}
                    fontSize={"1.2rem"}
                    fontWeight={"bold"}
                    py={{ md: 7, sm: 4, xs: 3 }}
                  >
                    {story?.title}
                  </Typography>
                  <Typography
                    textAlign={"center"}
                    fontSize={"small"}
                    fontWeight={"bold"}
                    color={COLOR.gray.dark}
                    pb={2}
                  >
                    {story?.postBy}
                  </Typography>
                  <Box
                    width={{ md: "100%" }}
                    mx={"auto"}
                    height={{md:"500px",sm:"400px",xs:"250px"}}
                    position={"relative"}
                  >
                    <Image
                      fill
                      style={{ objectFit: "cover" }}
                      src={story?.poster}
                      alt="nature"
                    />
                  </Box>
                  <Typography color={COLOR.gray.dark} pt={2} pb={{ md: 10 }}>
                    {story?.details}
                  </Typography>
                  <Typography
                    fontSize={{ md: "3rem", sm: "2rem", xs: "1.5rem" }}
                    pt={{ md: 10,sm:6,xs:4 }}
                    pb={{ md: 0, xs: 1 }}
                    textAlign={"center"}
                  >
                    Photo Gallery
                  </Typography>
                  <Grid container py={{md:6,xs:2}} spacing={2}>
                    {STORIES[i].GALLERY.map((pic, i) => (
                      <Grid item md={3} sm={6} xs={12} key={i} >
                        <Box
                          width={{ md: "95%" }}
                          mx={"auto"}
                          height={"200px"}
                          position={"relative"}
                        >
                          <Image
                            fill
                            style={{ objectFit: "cover" }}
                            src={pic}
                            alt="nature"
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}
            </Box>
          ))}
        </Container>
      </Box>
    </Box>
  );
};
export async function generateMetadata({ param }: any) {
  // STORIES.map((story, i) => ({
  //   title: `${story?.mPartnerName} & ${story?.fePartnerName}`,
  // }));
}
export default SingleStory;
