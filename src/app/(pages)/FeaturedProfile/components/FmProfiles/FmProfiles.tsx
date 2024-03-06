"use client";
import { COLOR } from "@/constants/color";
import { FEATURED_MEMBERS } from "@/constants/contents";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const FmProfiles = () => {
  const onCurrentPage = 3;
  const [page, setPage] = React.useState(1);
  const handleChange = (e: any, data: any) => {
    setPage(data);
  };
  const members = page * onCurrentPage;
  const remainingMembers = members - onCurrentPage;
  return (
    <Box>
      {FEATURED_MEMBERS.slice(remainingMembers, members).map((member, i) => (
        <Box
          key={i}
          bgcolor={"white"}
          display={"flex"}
          flexDirection={{ md: "row", xs: "column" }}
          alignItems={"center"}
          borderRadius={"4px"}
          boxShadow={"0px 0px 4px 0px lightGray"}
          px={{md:5,sm:3,xs:2}}
          mb={2}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            mt={{ md: 2, xs: 5 }}
            pr={{ md: 5 }}
            pb={{md:2}}
          >
            <Image
              width={220}
              height={220}
              style={{
                borderRadius: "50%",
                textAlign: "center",
                marginBottom: "16px",
                objectFit: "cover",
                border: `2px solid ${COLOR.gray.dark}`,
              }}
              src={member.image_url}
              alt={member?.name}
            />
            <Typography fontSize={"1.2rem"}>{member?.name}</Typography>
            <Typography mt={1}>
              <span style={{ fontWeight: "bold", color: COLOR.gray.dark }}>
                Age:{" "}
              </span>
              {member?.age}
            </Typography>
          </Box>
          <Box mt={{md:-4}} pb={2} textAlign={{ md: "left", xs: "center" }}>
            <Typography>
              <span style={{ fontWeight: "bold", color: COLOR.gray.dark }}>
                Marital Status:{" "}
              </span>
              {member?.marital_status}
            </Typography>
            <Typography>
              <span style={{ fontWeight: "bold", color: COLOR.gray.dark }}>
                Gender:{" "}
              </span>{" "}
              {member?.gender}
            </Typography>
            <Typography my={0.7}>
              <span style={{ fontWeight: "bold", color: COLOR.gray.dark }}>
                Profession:{" "}
              </span>{" "}
              {member?.profession}
            </Typography>
            <Typography mb={"2px"}>
              <span style={{ fontWeight: "bold", color: COLOR.gray.dark }}>
                From:{" "}
              </span>
              {member?.location}
            </Typography>
          </Box>
        </Box>
      ))}
      <Stack spacing={2} >
        <Pagination
          sx={{
            ".MuiPaginationItem-root": {
              border: "1px solid red",
              bgcolor: "white",
              "&.Mui-selected": {
                bgcolor: "rgb(254, 141, 141)",
                color: "white",
                "&:hover": { bgcolor: "rgb(254, 141, 141)", color: "white" },
              },

              "&:hover": { bgcolor: "rgb(254, 141, 141)", color: "white" },
            },
              '& > .MuiPagination-ul': {
                justifyContent: 'center',
              },
          }}
          count={Math.ceil(FEATURED_MEMBERS.length / onCurrentPage)}
          page={page}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </Box>
  );
};

export default FmProfiles;
