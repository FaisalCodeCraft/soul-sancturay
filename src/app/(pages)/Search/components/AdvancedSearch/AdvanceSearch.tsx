import ButtonComp from "@/components/Button/Button";
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
import Image from "next/image";
import React from "react";

const AdvanceSearch = () => {
  return (
    <Box
      bgcolor={COLOR.gray.light}
      mt={{ md: 12 }}
      py={{ md: 6, sm: 4, xs: 3 }}
      px={{ md: 12, sm: 5, xs: 2 }}
      position={"relative"}
      overflow={"hidden"}
    >
       <Box
        position={"absolute"}
        top={-30}
        left={-65}
        width={"400px"}
      >
        <Image
          width={300}
          height={380}
          style={{ opacity: 0.8 }}
          src="https://wedding-wonders.bugfinder.net/assets/uploads/content/6332933b3d1851664258875.png"
          alt=""
        />
      </Box>
      <Container
        maxWidth="md"
        sx={{
          bgcolor: "white",
          borderRadius: "4px",
          py: { md: 1 },
          boxShadow: " 0px 0px 12px 1px lightGray",
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
          </Grid>
          {/* Grid item 2 */}

          <Grid item md={6} xs={12} mt={{ md: 0, sm: 0, xs: -5 }}>
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
          <Grid item md={12} xs={12}>
            <FormControl fullWidth>
              <label
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  marginTop: 0.7,
                }}
              >
                Show:
              </label>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{
                        color: "rgb(254, 141, 141)",
                        "&.Mui-checked": {
                          color: "rgb(254, 141, 141)",
                        },
                        "&:hover": {
                          bgcolor: "transparent",
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
                        color: "rgb(254, 141, 141)",
                        "&.Mui-checked": {
                          color: "rgb(254, 141, 141)",
                        },
                        "&:hover": {
                          bgcolor: "transparent",
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
                        color: "rgb(254, 141, 141)",
                        "&.Mui-checked": {
                          color: "rgb(254, 141, 141)",
                        },
                        "&:hover": {
                          bgcolor: "transparent",
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
        <Box pb={2} mt={3}>
          <ButtonComp title="Search" width="100px" />
        </Box>
      </Container>

      <Box
        position={"absolute"}
        bottom={-30}
        right={-180}
        width={"400px"}
      >
        <Image
          width={300}
          height={380}
          style={{ opacity: 0.8 }}
          src="https://wedding-wonders.bugfinder.net/assets/uploads/content/6332933b3d1851664258875.png"
          alt=""
        />
      </Box>
    </Box>
  );
};

export default AdvanceSearch;
