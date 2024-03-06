import { Box, Typography } from '@mui/material'
import React from 'react'

const FpHeader = () => {
  return (
    <Box height={"55vh"} color={"white"}>
       <Typography
          fontSize={{ md: "3rem", sm: "2rem", xs: "1.5rem" }}
          pt={10}
          textAlign={"center"}
        >
          Featured Members
        </Typography>
    </Box>
  )
}

export default FpHeader