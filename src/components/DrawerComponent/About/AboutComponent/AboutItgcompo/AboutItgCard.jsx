import React from 'react'
import { Typography, Grid } from '@mui/material';
import { Container } from '../../Style';
import AboutButton from './AboutButton';
const AboutItgCard = () => {
  return (
    <Container>
     <h1>About ITG</h1>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6}>
        <section>
         
          <Typography>
            <b>Institute of Technology, Gopeshwar</b> is one of the Four constituent colleges of Uttarakhand Technical University that was established in <b>October 2013</b> with the approval of Uttarakhand Government. IT Gopeshwar is approved by <b>AICTE, Ministry of HRD, New Delhi.</b> IT Gopeshwar is an Institute that aims to promote technological advancement in the state of Uttarakhand. It provides such a conducive environment to its students in which they become intellectually capable, innovative, and entrepreneurial professionals. IT Gopeshwar also provides <b>educational training</b> that promotes and emphasizes social awareness as well as the development of professional skills among the students. Here, the knowledge of the students is broadened, deepened, and enriched as the institute provides solutions that benefit humanity and the natural environment. IT Gopeshwar offers <b>B.Tech. Degree programs</b> in the following streams:
          </Typography>
        </section>
        <div >
        <ul style={{color:'#800000'}}>
  <li>
    <a>Civil Engineering</a>
  </li>
  <li>
    <a>Computer Science Engineering</a>
  </li>
  <li>
    <a>Mechanical Engineering</a>
  </li>
  <li>
    <a>Electrical Engineering</a>
  </li>
  <li>
    <a>Electronics and Communication Engineering</a>
  </li>
</ul>
</div>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <div><AboutButton/></div>
        </Grid>
      
    </Grid>
  </Container>
   
  )
}

export default AboutItgCard