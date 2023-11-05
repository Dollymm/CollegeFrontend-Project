import React from 'react'
import { StudentBox } from '../../Facilites/Style';
import { SportsEvents } from '../../../../constant/StudentCornerImages';
import { Box, Grid, Card, CardMedia } from '@mui/material';
const Sports = () => {
  return (
    <StudentBox>
    <Grid container spacing={2}>
      {SportsEvents.map((item, id) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
          <Box>
            <CardMedia
              component="img"
              image={item.imagePath}
              alt={`Cultural Image ${id}`}
              style={{ height: 'auto',width:'50%',marginTop:'20px' }} // Adjust the height as needed
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  </StudentBox>
  )
}

export default Sports