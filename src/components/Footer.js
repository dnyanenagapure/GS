import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{
      width: '100%',
      py: 3,  // Vertical padding
      px: 0,  // Horizontal padding set to 0
      mt: 'auto',
      bgcolor: '#22263f',
      textAlign: 'center'
    }}>
      <Typography variant="body2" sx={{ color: '#fff' }}>
        © {new Date().getFullYear()} Goldman Sachs
      </Typography>
    </Box>
  );
};

export default Footer;
