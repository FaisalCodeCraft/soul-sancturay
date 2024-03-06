import ButtonComp from "@/components/Button/Button";
import { CASTS, COUNTRIES, EDUCATION, LANGUAGES, OCCUPATIOINS, RELIGION } from "@/constants/contents";
import { Box, FormControl, FormLabel, Grid, MenuItem, TextField, Typography } from "@mui/material";
import React from "react";

const FmFilter = () => {
  return (
    <Box
      boxShadow={"0px 0px 12px 0px lightGray"}
      borderRadius={"4px"}
      p={{md:4,sm:3,xs:2}}
      bgcolor={"white"}
    >
        <Grid container>
          <Typography pb={3} fontWeight={"bold"}>Filter Featured Members here</Typography>
            {/* Grid item 1 */}
        <Grid item md={12} xs={12}>
            <Grid container>
              <Grid item md={6} xs={12}>
                <FormControl
                  sx={{
                    display: { md: "flex", xs: "block" },
                    mt: 0.5,
                  }}
                >
                  <label
                    style={{
                      marginBottom: "8px",
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
                      boxShadow: "inset 0px 0px 1px 1px lightGray",
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
                    display: { md: "flex", xs: "block", },
                    mt:.3
                  }}
                >
                  <FormLabel
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      mb: "8px",
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
                      boxShadow: "inset 0px 0px 1px 1px lightGray",
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
                    my: 2,
                  }}
                >
                  <label
                    style={{
                      marginBottom: "8px",
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
                      boxShadow: "inset 0px 0px 1px 1px lightGray",
                    }}
                    size="small"
                  >
                    <MenuItem value={"Any"}>Any</MenuItem>
                      <MenuItem  value={"Male"}>
                        Male
                      </MenuItem>
                      <MenuItem  value={"Female"}>
                        Female
                      </MenuItem>
                  </TextField>
                </FormControl>
              </Grid>
              <Grid md={12} xs={12}>
                <FormControl
                  sx={{
                    display: { md: "flex", xs: "block" },
                    my: 2,
                  }}
                >
                  <label
                    style={{
                      marginBottom: "8px",
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
                      boxShadow: "inset 0px 0px 1px 1px lightGray",
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
                    mb: 2,
                  }}
                >
                  <label
                    style={{
                      marginBottom: "8px",
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
                      boxShadow: "inset 0px 0px 1px 1px lightGray",
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
                    mb: 2,
                  }}
                >
                  <label
                    style={{
                      marginBottom: "8px",
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
                      boxShadow: "inset 0px 0px 1px 1px lightGray",
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
            <Grid container>
              <Grid item md={6} xs={12}>
                <FormControl
                  sx={{
                    display: { md: "flex", xs: "block" },
                  }}
                >
                  <label
                    style={{
                      marginBottom: "8px",
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
                      boxShadow: "inset 0px 0px 1px 1px lightGray",
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "rgb(254, 141, 141)"
                        }
                      }
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
                    mt:.1

                  }}
                >
                  <FormLabel
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      mb: "5px",
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
                      boxShadow: "inset 0px 0px 1px 1px lightGray",
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "rgb(254, 141, 141)"
                        }
                      }
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
                    my: 2,
                  }}
                >
                  <label
                    style={{
                      marginBottom: "8px",
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
                      boxShadow: "inset 0px 0px 1px 1px lightGray",
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "rgb(254, 141, 141)"
                        }
                      }
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
                    mb: 2,
                  }}
                >
                  <label
                    style={{
                      marginBottom: "8px",
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
                      boxShadow: "inset 0px 0px 1px 1px lightGray",
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "rgb(254, 141, 141)"
                        }
                      }
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
                    mb: 2,
                  }}
                >
                  <label
                    style={{
                      marginBottom: "8px",
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
                      boxShadow: "inset 0px 0px 1px 1px lightGray",
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "rgb(254, 141, 141)"
                        }
                      }
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
          <Box pb={2} mt={3}>
          <ButtonComp title="Search" width="260px" />
        </Box>
        </Grid>
    </Box>
  );
};

export default FmFilter;
