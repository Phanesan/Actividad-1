import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    
    <Stack spacing={2} sx={{paddingBottom:'30px'}}>
      <Typography sx={{display:'flex',justifyContent:'center',paddingTop:'30px'}} color={'white'}>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
}