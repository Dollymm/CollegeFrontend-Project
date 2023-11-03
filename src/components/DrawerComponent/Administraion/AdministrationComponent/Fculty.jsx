import React from 'react'
import { Container } from '../Style';
import { Box,Typography } from '@mui/material';
import { facultyImage } from '../../../../constant/DeanImages';

const Fculty = () => {
  return (
    <Container>
  
    {facultyImage.map((item, id) => (
      <Box key={id}>
      
        <img src={item.img} alt="" />
        
        <div>
        <Typography style={{color:"#0d1057",display:'flex',textAlign:'center',justifyContent:'center',fontWeight:'bold'}}>{item.name}</Typography>
        <Typography style={{color:'#3A3A3A',display:'flex',textAlign:'center',justifyContent:'center'}}>{item.incharge1}</Typography>
        <Typography style={{color:'#3A3A3A',display:'flex',textAlign:'center',justifyContent:'center'}}>{item.incharge2}</Typography>
        <Typography style={{color:'#3A3A3A',display:'flex',textAlign:'center',justifyContent:'center'}}>{item.incharge3}</Typography>
        </div>
      </Box>
    ))}  
  </Container>
  )
}

export default Fculty