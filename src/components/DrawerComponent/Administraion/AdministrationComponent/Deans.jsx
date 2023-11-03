import React from 'react'
import { Container } from '../Style';
import { Box,Card,Typography } from '@mui/material';

import { DeanImages1 } from '../../../../constant/DeanImages';

const Deans = () => {
  return (
    <Container>
    
    {DeanImages1.map((item, id) => (
      <Box key={id}>
      
        <img src={item.img} alt="" />
        
        <div>
        <Typography style={{color:"#0d1057",display:'flex',textAlign:'center',justifyContent:'center',fontWeight:'bold'}}>{item.name}</Typography>
        <Typography style={{color:'#3A3A3A',display:'flex',textAlign:'center',justifyContent:'center'}}>{item.role}</Typography>
        <Typography style={{ color:'#3A3A3A',display:'flex',textAlign:'center',justifyContent:'center'}}>{item.moblieNo}</Typography>
        <Typography style={{ color:'#3A3A3A',display:'flex',textAlign:'center',justifyContent:'center'}}>{item.gmail}</Typography>
        </div>
      </Box>
    ))}  
  </Container>
);
};
  
export default Deans