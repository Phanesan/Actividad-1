import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

const Icon = styled("img")(({
    width: "48px",
    height: "48px",
    objectFit: "contain",
    objectPosition: "center"
}));

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor:'#650000' }}>
        <Toolbar sx={{height:"80px", gap:"30px"}}>
            <Icon src='/icons/icon.png' alt='PokePedia' sx={{display: {xs:'none', sm:'block'}}}></Icon>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: 'block' }}
            >
                PokePedia
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
