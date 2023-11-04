import React from 'react'
import { Box,Typography } from '@mui/material'
import { Container } from '../../../Administraion/Style'
import { CseFaculty } from '../../../../../constant/FacultyIamges'
const HodFaculty = () => {
  return (
    <Container>
    
    {CseFaculty.map((item, id) => (
      <Box key={id}>
      
        <img src={item.img} alt="" />
        
        <div>
        <Typography style={{color:"#0d1057",display:'flex',textAlign:'center',justifyContent:'center',fontWeight:'bold'}}>{item.name}</Typography>
        <Typography style={{color:'#3A3A3A',display:'flex',textAlign:'center',justifyContent:'center'}}>{item.gmail}</Typography>
        <Typography style={{color:'#3A3A3A',display:'flex',textAlign:'center',justifyContent:'center'}}>{item.number}</Typography>
        <Typography style={{color:'#3A3A3A',display:'flex',textAlign:'center',justifyContent:'center'}}>{item.study}</Typography>
        <Typography style={{color:'#3A3A3A',display:'flex',textAlign:'center',justifyContent:'center'}}>{item.designation}</Typography>
        </div>
      </Box>
    ))}  
  </Container>
  )
}

export default HodFaculty