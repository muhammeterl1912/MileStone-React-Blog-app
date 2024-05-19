import React from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { LinkedIn, Instagram } from '@mui/icons-material';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ display:"fixed",marginBottom:"0"}}>
      <AppBar position="static" color="primary">
        <Toolbar sx={{  display:"flex", justifyContent: "space-between", flexWrap: 'wrap' }}>
          <Box>
            <IconButton 
              size="small"
              href="https://www.linkedin.com/in/muhammet-erol/"
              target="_blank"
            >
              <LinkedIn />
            </IconButton>
            <IconButton 
              size="small"
              href="https://www.instagram.com/muhammeterl1912/"
              target="_blank"
            >
              <Instagram />
            </IconButton>
          </Box>
          <Typography 
            variant="body1" 
            textAlign="center" 
            sx={{ 
              color: 'white',
              display: "flex",
              alignItems: 'center'
            }}
          >
            <span>&copy; {currentYear} Muhammet Erol</span>
          </Typography>
          <Typography variant="body2" sx={{ color: 'white' }}>
            Warsaw, Poland
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;
