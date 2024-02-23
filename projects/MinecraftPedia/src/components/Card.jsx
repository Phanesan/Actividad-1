import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

export default function ActionAreaCard({_urlImg,_name,_rarity,_renewable,_maxStack}) {

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
          <CardMedia
            component="img"
            height="auto"
            image={_urlImg}
            alt=""
            sx={{width:100}}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rareza: {_rarity}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Renovable: {_renewable ? "Si":"No"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Maximos de stacks: {_maxStack}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}