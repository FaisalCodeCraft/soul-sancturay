import { COLOR } from "@/constants/color";
import { Search } from "@mui/icons-material";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";

type Props = {};

const QuickSearch = (props: any) => {
  const handleSearch = () => {
    console.log("search")
  };
  return (
    <Box color={"white"} my={{ md: 8, sm: 4, xs: 2 }}>
      <Container maxWidth="md">
        <Typography
          fontSize={{ md: "3rem", sm: "2rem", xs: "1.5rem" }}
          my={2}
          textAlign={"center"}
        >
          Quick Search
        </Typography>

        <Box
          p={{ md: 3, sm: 2, xs: 1 }}
          border={`1px solid ${COLOR.main.cyan}`}
          borderRadius={"4px"}
          // width={{md:"500px",sm:"300px",xs:"100%"}}
          // m={"auto"}
        >
          <Box
            display={"flex"}
            bgcolor={"white"}
            border={`1px solid ${COLOR.gray.dark}`}
            borderRadius={"4px"}
          >
            <TextField
              fullWidth
              type="email"
              size="small"
              placeholder="Enter Name"
              variant="standard"
              InputProps={{
                sx: {
                  border: "none",
                  background: "white",
                  color: "black",
                  marginTop: 0.6,
                  ml: 1,
                  p: { md: 1 },
                },
                disableUnderline: true,
              }}
            />
            <Button
              // onClick={handleSearch}
              sx={{
                bgcolor: "black",
                borderRadius: "0px 4px 4px 0px",
                color: "white",
                "&:hover": { bgcolor: "black", color: "red" },
              }}
            >
              <Search />
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default QuickSearch;
