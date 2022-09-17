import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box mt="50px" bgcolor="#fff3f4">
      <Stack gap="30px" alignItems="center" px="40px" pt="20px">
      <Typography variant="h5"  mt="5px" textAlign="center">
        MUSCLE HUB: <br/> Hustle For Muscle
      </Typography>
        <Typography variant="h6" pb="20px" >
          Made with ❤️ by <a href='https://www.linkedin.com/in/jaskaran-singh-dev/' target="_blank" rel="noreferrer">Jaskaran Singh</a>
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
