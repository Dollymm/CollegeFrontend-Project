import React from "react";
import { Box, Typography } from "@mui/material";
import { Container, Grid, Paper } from "@mui/material";
// import { Container } from "../Style";


const Programmes = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Programes</h1>
        </Grid>
        <Grid item xs={4 } padding={2}>
          {/* <Paper>Part 1</Paper> */}
          <img src="https://itgopeshwar.ac.in/wp-content/uploads/elementor/thumbs/CIVIL1-p01d61nokjgd9aya33a61boq74ary3w9qdc2ipr3lo.jpg" />
          <Box>
            <h3>COMPUTER SCIENCE & ENGINEERING</h3>
            <Typography>
              Computer Science has the power to change the world. This course
              offer a flexible and facinating programmes for the students who
              wish to acquire high skills in computers & applications, all
              supported by world class staff and facilities. The curriculum
              provides the students with a technical perspective on major issues
              of computer application, programming, languages and web enabled
              services.
            </Typography>
            <img src="https://itgopeshwar.ac.in/wp-content/uploads/elementor/thumbs/ELECTRICAL-p01d61nokjgd9aya33a61boq74ary3w9qdc2ipr3lo.jpg" />
            <h3>ELECTRONICS & COMMUNICATION ENGINEERING</h3>
            <Typography>
              In modern society, scope of electronics engineering is very vast
              that applied in every field. Development of world that includes
              every area such as telecommunications, satellite, microelectronics
              etc are the outcome of talented engineers. ECE is all about
              working with electronic science & communication equipments such as
              mobiles, fridge, transmitters, fulfilling the daily requirements
              of the people.
            </Typography>
            <img src="https://itgopeshwar.ac.in/wp-content/uploads/elementor/thumbs/ME-LAB-SML-1-p01d5zs06vdsm310e2gwwc5t0ck1ipot2413k5tvy4.jpg"

            />
          </Box>
        </Grid>
        <Grid item xs={4} spacing={3}>
          <Box>
            <h3>CIVIL ENGINEERING</h3>
            <Typography>Considered as one of the core engineering disciplines. Civil engineering branch deals with designing surveying constructing and maintaining structural works. The engineers of this stream learn methods to identity, consume sustainably and natural resources. It also includes the construction and supervision of things that public use in daily lives like buildings, roads, water pipelines, bridges, dams etc. and provides a better opportunity in career perspectives.</Typography>
         <img src="https://itgopeshwar.ac.in/wp-content/uploads/elementor/thumbs/ITGSLIDER-1-1-p01d64h751k884u6mmi1qsz3z9wvl77gqraiyjmx30.jpg"/>
         <h3>ELECTRICAL ENGINEERING</h3>
         <Typography>Its vision is to be a catalyst in imparting quality education and conducting valued research for the benefit of society. Some of our important areas of teaching are basic electrical, electrical machine, power electronics, measurement and instrumentation ,circuits and systems, electric drives and power system . The vision of the department is to establish itself as a center of excellence in terms of research and teaching in its chosen areas.</Typography>
         <img src="https://itgopeshwar.ac.in/wp-content/uploads/elementor/thumbs/ELECTRONICS-1-p01d63jcy7ixwivjs43f6b7ndw1idi3qemn1h9ob98.jpg"/>
          <h3>MECHANICAL ENGINEERING</h3>
          <Typography>
Mechanical Engineering is considered to be the core branch in engineering. You can work related to mechanical system design, analysis, manufacturing maintenance using fundamental Physics principle and offers analytical solution to problem using Mathematical model. The design of this course aims to provide the basics and analytical skills which gives students valuable hands on industrial experiences.</Typography>
          </Box>
        </Grid>
        <Grid item xs={4} columnSpacing={3}>
        <Box>
<h3>Admission Criteria</h3>
<Typography>1.Admission for 1st year B.Tech. course through Uttarakhand State Online Counseling or through direct Admission on the basis of 10+2 marks (PCM).</Typography>
     <Typography>2.Admission for the lateral entry of B.Tech. course through Uttarakhand State Online Counseling (UKSEE) or through direct Admission on the basis of Diploma/B.Sc. marks.</Typography> 
     
     <Box>
        <h4>Qualification & Eligibility Requirements</h4>
        <Typography>1.Passed Intermediated examination from a recognized boards, with at-least 45% marks in PCM (40% in case of candidate belonging to reserved category in Science stream).</Typography>
    <Typography>2.Passed diploma Examination from an AICTE approved institute, with at-least 50% Marks (45% in case of candidate belonging to reserved category in appropriate branch of Engineering).</Typography>
    <Typography>3.Passed B.Sc. Degree from a recognized university as defined by UGC, with at-least 50% marks (45% in case of candidate belonging to reserved category) and passed XII standard with Mathematics.</Typography>
     <h5>By Phone</h5>
     <Typography>988230303</Typography>
     <Typography>Monday to Saturday 9.00am – 5.00pm</Typography>
     </Box>
     <Box>
        <h4>By Postal Mail</h4>

        <Typography>Institute of Technology, Gopeshwar
Kothiyalsain, Chamoli, Uttarakhand-246424</Typography>
<Typography>Apply Online
You can apply directly via online application.</Typography>

     </Box>
        </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Programmes;
