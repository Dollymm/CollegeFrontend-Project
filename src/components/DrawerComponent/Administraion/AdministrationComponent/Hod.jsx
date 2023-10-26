import React from 'react'
import { Container } from '../Style';
import { Box,Typography } from '@mui/material';
import hod from '../../../../constant/DeanImages'
const Hod = () => {
  return (
    <Container>
    
    {hod.map((item, id) => (
      <Box key={id}>
      
        <img src={item.img} alt="" />
        
        <div>
        <Typography>{item.name}</Typography>
        <Typography>{item.role}</Typography>
        <Typography>{item.moblieNo}</Typography>
        <Typography>{item.gmail}</Typography>
        </div>
      </Box>
    ))}  
  </Container>
  )
}

export default Hod