import { Box, Container, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const QuickSearch = (props: Props) => {
  return (
   <Box color={"white"}>
    <Container maxWidth="lg">
      <Typography>Quick Search</Typography>
      <Box></Box>
    </Container>
   </Box>
  )
}

export default QuickSearch