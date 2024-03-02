import { COLOR } from "@/constants/color";
import {
  CASTS,
  COUNTRIES,
  EDUCATION,
  LANGUAGES,
  OCCUPATIOINS,
  RELIGION,
} from "@/constants/contents";
import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const AdvanceSearch = () => {
  return (
    <Box
      bgcolor={COLOR.gray.light}
      mt={{ md: 12 }}
      py={{ md: 6, sm: 4, xs: 3 }}
      px={{ md: 10, sm: 5, xs: 2 }}
    >
      <Container
        maxWidth="lg"
        sx={{
          bgcolor: "white",
          py: { md: 1 },
          boxShadow: "0 0 12px 1px lightGray",
        }}
      >
        <Typography
          fontSize={{ md: "3rem", sm: "2rem", xs: "1.5rem" }}
          fontWeight={{ md: "normal", xs: "bold" }}
          py={{ md: 5, sm: 2, xs: 2 }}
          textAlign={"center"}
        >
          Advanced Search
        </Typography>
        <Grid container spacing={5} pb={2}>
          {/* Grid item 1 */}
          <Grid item md={6} xs={12}>
            <Grid container>
              <Grid item md={6} xs={12}>
                <FormControl
                  sx={{
                    display: { md: "flex", xs: "block" },
                    flexDirection: "row",
                    alignItems: "center",
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
                    fullWidth
                    type="number"
                    defaultValue={18}
                    sx={{
                      border: "1px solid white",
                      borderRadius: "4px",
                      boxShadow: "0 0 12px 1px lightGray",
                    }}
                    InputProps={{
                      inputProps: {
                        max: 49,
                        min: 18,
                      },
                    }}
                    size="small"
                  />
                </FormControl>
              </Grid>
              <Grid item md={6} xs={12} pl={{ md: 1 }}>
                <FormControl
                  sx={{
                    display: { md: "flex", xs: "block" },
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 0.5,
                  }}
                >
                  <FormLabel
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      marginRight: { md: "5px" },
                    }}
                  >
                    to:{" "}
                  </FormLabel>
                  <TextField
                    fullWidth
                    type="number"
                    defaultValue={50}
                    sx={{
                      border: "1px solid white",
                      borderRadius: "4px",
                      boxShadow: "0 0 12px 1px lightGray",
                    }}
                    InputProps={{
                      inputProps: {
                        max: 49,
                        min: 18,
                      },
                    }}
                    size="small"
                  />
                </FormControl>
              </Grid>
              <Grid md={12} xs={12}>
                <FormControl
                  sx={{
                    display: { md: "flex", xs: "block" },
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
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
                    fullWidth
                    sx={{
                      border: "1px solid white",
                      borderRadius: "4px",
                      boxShadow: "0 0 12px 1px lightGray",
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
              </Grid>
              <Grid md={12} xs={12}>
                <FormControl
                  sx={{
                    display: { md: "flex", xs: "block" },
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <label
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      marginRight: "5px",
                    }}
                  >
                    Religion:
                  </label>
                  <TextField
                    select
                    fullWidth
                    defaultValue={"Any"}
                    sx={{
                      border: "1px solid white",
                      borderRadius: "4px",
                      boxShadow: "0 0 12px 1px lightGray",
                    }}
                    size="small"
                  >
                    <MenuItem value={"Any"}>Any</MenuItem>
                    {RELIGION?.map((religion, i) => (
                      <MenuItem key={i} value={religion}>
                        {religion}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </Grid>
              <Grid md={12} xs={12}>
                <FormControl
                  sx={{
                    display: { md: "flex", xs: "block" },
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <label
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      marginRight: "5px",
                    }}
                  >
                    Education:
                  </label>
                  <TextField
                    select
                    fullWidth
                    defaultValue={"Any"}
                    sx={{
                      border: "1px solid white",
                      borderRadius: "4px",
                      boxShadow: "0 0 12px 1px lightGray",
                    }}
                    size="small"
                  >
                    <MenuItem value={"Any"}>Any</MenuItem>
                    {EDUCATION?.map((edu, i) => (
                      <MenuItem key={i} value={edu}>
                        {edu}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          {/* Grid item 2 */}

          <Grid item md={6} xs={12}>
            <Grid container>
              <Grid item md={6} xs={12}>
                <FormControl
                  sx={{
                    display: { md: "flex", xs: "block" },
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
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
                    Height:{" "}
                  </label>
                  <TextField
                    fullWidth
                    type="number"
                    defaultValue={4}
                    sx={{
                      border: "1px solid white",
                      borderRadius: "4px",
                      boxShadow: "0 0 12px 1px lightGray",
                    }}
                    InputProps={{
                      inputProps: {
                        max: 7,
                        min: 4.5,
                      },
                    }}
                    size="small"
                  />
                </FormControl>
              </Grid>
              <Grid item md={6} xs={12} pl={{ md: 1 }}>
                <FormControl
                  sx={{
                    display: { md: "flex", xs: "block" },
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 0.5,
                  }}
                >
                  <FormLabel
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      marginRight: "5px",
                    }}
                  >
                    to:{" "}
                  </FormLabel>
                  <TextField
                    fullWidth
                    type="number"
                    defaultValue={5.5}
                    sx={{
                      border: "1px solid white",
                      borderRadius: "4px",
                      boxShadow: "0 0 12px 1px lightGray",
                    }}
                    InputProps={{
                      inputProps: {
                        max: 7.5,
                        min: 4.5,
                      },
                    }}
                    size="small"
                  />
                </FormControl>
              </Grid>
              <Grid md={12} xs={12}>
                <FormControl
                  sx={{
                    display: { md: "flex", xs: "block" },
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
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
                    Country:
                  </label>
                  <TextField
                    select
                    fullWidth
                    defaultValue={"Any"}
                    sx={{
                      border: "1px solid white",
                      borderRadius: "4px",
                      boxShadow: "0 0 12px 1px lightGray",
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
              </Grid>
              <Grid md={12} xs={12}>
                <FormControl
                  sx={{
                    display: { md: "flex", xs: "block" },
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <label
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      marginRight: "5px",
                    }}
                  >
                    Language:
                  </label>
                  <TextField
                    select
                    fullWidth
                    defaultValue={"Any"}
                    sx={{
                      border: "1px solid white",
                      borderRadius: "4px",
                      boxShadow: "0 0 12px 1px lightGray",
                    }}
                    size="small"
                  >
                    <MenuItem value={"Any"}>Any</MenuItem>
                    {LANGUAGES?.map((language, i) => (
                      <MenuItem key={i} value={language}>
                        {language}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </Grid>
              <Grid md={12} xs={12}>
                <FormControl
                  sx={{
                    display: { md: "flex", xs: "block" },
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <label
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      marginRight: "5px",
                    }}
                  >
                    Occupation:
                  </label>
                  <TextField
                    select
                    fullWidth
                    defaultValue={"Any"}
                    sx={{
                      border: "1px solid white",
                      borderRadius: "4px",
                      boxShadow: "0 0 12px 1px lightGray",
                    }}
                    size="small"
                  >
                    <MenuItem value={"Any"}>Any</MenuItem>
                    {OCCUPATIOINS?.map((occupation, i) => (
                      <MenuItem key={i} value={occupation}>
                        {occupation}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12} xs={12}>
            <FormControl fullWidth >
            <FormLabel
                  sx={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    mt: { md: 0.7 },
                    mr: { md: 2 },
                  }}
                >
                  Show:
                </FormLabel>
              <FormGroup row>
                
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{
                        color: COLOR.main.cyan ,
                        "&.Mui-checked": {
                          color: COLOR.main.cyan,
                        },
                      }}
                    />
                  }
                  label="Profile with photo"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: COLOR.main.cyan ,
                        "&.Mui-checked": {
                          color: COLOR.main.cyan,
                        },
                      }}
                    />
                  }
                  label="Profile by family only"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: COLOR.main.cyan ,
                        "&.Mui-checked": {
                          color: COLOR.main.cyan,
                        },
                      }}
                    />
                  }
                  label="Featured Profile Only"
                />
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AdvanceSearch;
