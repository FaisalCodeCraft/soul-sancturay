import ButtonComp from "@/components/Button/Button";
import { COLOR } from "@/constants/color";
import { CASTS, COUNTRIES } from "@/constants/contents";
import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box pb={3}>
      <Grid container alignItems={"center"} height={"80vh"}>
        <Grid item md={7} p={4}>
          <Box px={5} color={"white"}>
            <Typography
              overflow={"hidden"}
              color={"white"}
              fontSize={{ md: "4rem", sm: "2rem" }}
              lineHeight={{ md: "68px" }}
            >
              Find Your Perfect Soul Mate!
            </Typography>
            <Typography mt={{ md: 2 }} fontSize={"1.1rem"}>
              {` Finding your perfect soul mate is like discovering the missing
              piece to your puzzle of life. It's about connecting with someone
              who understands you deeply, shares your values, and brings out the
              best in you. Your soul mate is the person who complements you in
              every way, making you feel whole and cherished. Together, you
              navigate life's joys and challenges hand in hand, creating a bond
              that withstands the test of time.`}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={5} p={4}>
          <Box
            border={`1.2px solid ${COLOR.main.electricblue}`}
            borderRadius={"8px"}
            zIndex={999}
            color={"white"}
            pb={4}
            mx={5}
          >
            <Typography
              textAlign={"center"}
              color={COLOR.gray.dark}
              bgcolor={COLOR.main.electricblue}
              borderRadius={"5px 5px 0px 0px"}
              p={1.5}
              mb={2}
            >
              Search Members
            </Typography>
            <FormControl fullWidth>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FormControlLabel
                  value="female"
                  control={
                    <Radio
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: COLOR.main.electricblue,
                        },
                      }}
                    />
                  }
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={
                    <Radio
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: COLOR.main.electricblue,
                        },
                      }}
                    />
                  }
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
            <FormControl
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                mt: 0.5,
              }}
            >
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginRight: "5px",
                }}
              >
                Age:{" "}
              </label>
              <TextField
                type="number"
                defaultValue={18}
                sx={{
                  border: "1px solid white",
                  borderRadius: "4px",
                  boxShadow: "0px 0px 6px 2px gray",
                }}
                InputProps={{
                  inputProps: {
                    max: 49,
                    min: 18,
                  },

                  style: { color: "white" },
                }}
                size="small"
              />
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  margin: "0px 5px",
                }}
              >
                to
              </label>
              <TextField
                type="number"
                defaultValue={50}
                sx={{
                  border: "1px solid white",
                  borderRadius: "4px",
                  boxShadow: "0px 0px 6px 2px gray",
                }}
                InputProps={{
                  inputProps: {
                    max: 50,
                    min: 18,
                  },
                  style: { color: "white" },
                }}
                size="small"
              />
            </FormControl>
            <FormControl
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                my: 2,
              }}
            >
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginRight: "5px",
                }}
              >
                Cast:
              </label>
              <TextField
                select
                defaultValue={"Any"}
                SelectProps={{
                  style: {
                    width: "150px",
                    color: "white",
                  },
                }}
                sx={{
                  border: "1px solid white",
                  borderRadius: "4px",
                  boxShadow: "0px 0px 6px 2px gray",
                }}
                size="small"
              >
                <MenuItem value={"Any"}>Any</MenuItem>
                {CASTS?.map((cast, i) => (
                  <MenuItem key={i} value={cast}>
                    {cast}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
            <FormControl
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                my: 2,
              }}
            >
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginBottom: "6px",
                }}
              >
                Country:
              </label>
              <TextField
                select
                defaultValue={"Any"}
                SelectProps={{
                  style: {
                    width: "300px",
                    color: "white",
                    top: 0,
                  },
                }}
                sx={{
                  border: "1px solid white",
                  borderRadius: "4px",
                  boxShadow: "0px 0px 6px 2px gray",
                }}
                size="small"
              >
                <MenuItem value={"Any"}>Any</MenuItem>
                {COUNTRIES?.map((country, i) => (
                  <MenuItem key={i} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
            <ButtonComp title="Search" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
