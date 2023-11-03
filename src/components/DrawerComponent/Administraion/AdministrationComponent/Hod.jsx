import React from 'react'
import { Container } from '../Style';
import { Box,Typography } from '@mui/material';
import { HodImages } from '../../../../constant/DeanImages';
const Hod = () => {
  return (
    <Container>
    
    {HodImages.map((item, id) => (
      <Box key={id}>
      
        <img src={item.img} alt="" />
        
        <div>
        <Typography style={{color:"#0d1057",display:'flex',textAlign:'center',justifyContent:'center',fontWeight:'bold'}}>{item.name}</Typography>
        <Typography style={{color:'#3A3A3A',display:'flex',textAlign:'center',justifyContent:'center'}}>{item.role}</Typography>
        <Typography style={{color:'#3A3A3A',display:'flex',textAlign:'center',justifyContent:'center'}}>{item.moblieNo}</Typography>
        <Typography style={{color:'#3A3A3A',display:'flex',textAlign:'center',justifyContent:'center'}}>{item.gmail}</Typography>
        </div>
      </Box>
    ))}  
  </Container>
  )
}

export default Hod