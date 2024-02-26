import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Item({initImg,initName,initDescription,initMaxStack,initRenewable}) {
  return (
    <Card sx={{ maxWidth: 245 , backgroundColor:"#1a1a1a"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="80"
          image={initImg}
          alt={initName}
          sx={{objectFit:'contain', objectPosition:'center', margin:"10px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
            {initName}
          </Typography>
          <Typography variant="body2" color="white">
            {initDescription}<br/><br/>
          </Typography>
          <Typography variant="body2" color="white">
            Max stacks: {initMaxStack}
          </Typography>
          <Typography variant="body2" color="white">
            Renewable: {initRenewable ? 'Yes':'No'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}