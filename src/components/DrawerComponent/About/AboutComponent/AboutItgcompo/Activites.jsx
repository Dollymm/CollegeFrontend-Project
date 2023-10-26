import React from 'react'
import {  Typography, Grid } from "@mui/material";
import { Container,Img } from "../../Style";
const Activites = () => {
  return (
    <Container>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>

      <div>
        <Img src="https://itgopeshwar.ac.in/wp-content/uploads/2020/07/IMG-20200720-WA0013.jpg"></Img>
        <h1>CAMPUS AREA</h1>
        <Typography>
          A truly green campus, it puts into practice the very principles it
          teaches in its classrooms. An architectural delight, the campus has
          been planned to provide a setting that enhances learning, while
          simultaneously showcasing the concept of modern green buildings.
        </Typography>
      </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <div>
        <Img src="https://itgopeshwar.ac.in/wp-content/uploads/2017/05/DSCN1551-scaled.jpg"></Img>
        <h1>SPORTS ACTIVITIES</h1>
        <Typography>
          Sports activities are given utmost importance. Our students
          regularly participate in all sports competitions and bring laurels
          to the institution and themselves.The atmosphere and surroundings of
          the institution are conducive for developing sports personalities
          and sports activities.
        </Typography>
      </div>
      
      </Grid>
      <Grid  item xs={12} sm={6} md={4}>
      <div>
        <Img src="https://itgopeshwar.ac.in/wp-content/uploads/2017/05/4-1.jpg"></Img>
        <h1>SEMINAR HALL</h1>
        <Typography>
          ITG have aesthetically designed Seminar Hall where all the important
          workshops and seminars are held. The seminar hall is facilitated
          with the latest technology and is well equipped with multimedia
          projectors. It can accommodate upto 350 students and interactive
          sessions are taken up by the management, faculty, staff & students.
          </Typography>
      </div>
      </Grid>
     </Grid>
      </Container>
  )
}

export default Activites