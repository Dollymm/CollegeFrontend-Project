import React from 'react';
import { StudentBox } from '../../Facilites/Style';
import { CulturalImages } from '../../../../constant/StudentCornerImages';
import { Box, Grid, Card, CardMedia } from '@mui/material';

const Cultural = () => {
  return (
    <StudentBox>
      <Grid container spacing={2}>
        {CulturalImages.map((item, id) => (
          <Grid item xs={12} sm={6} md={4} lg={6} key={id}>
            <Box>
              <CardMedia
                component="img"
                image={item.imagePath}
                alt={`Cultural Image ${id}`}
                style={{ height: 'auto' }} // Adjust the height as needed
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </StudentBox>
  );
};

export default Cultural;
