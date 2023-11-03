import { Typography,Box } from '@mui/material'
import React from 'react'
import { DepartmentBox } from '../../../Style'

const Survey = () => {
  return (
    <DepartmentBox>
   <Box paddingLeft={2}>
    <h3> Lab Incharge:Mr. Manish Negi</h3>
    <h3><b About/></h3>
    <Typography>The survey lab is used for surveying exercises and is equipped with all latest instrumentation viz levels, total stations, and GPS receivers sets for conducting ground surveying works.</Typography>
<h3> Equopment-</h3>
<Typography>theodolite, total station , auto level , plain tables , various types of campass and chain etc</Typography>
  
  <h3>List of Experiment</h3>
  <ol>
  <li>Study of different types of topographical maps and to prepare conventional symbols chart.</li>
  <li>To measure bearings of a closed traverse by prismatic compass and to adjust the traverse by graphical method.</li>
  <li>To find out reduced levels of given points using dumpy/Auto level.</li>
  <li>To perform fly leveling with a Auto /tilting level.</li>
  <li>To study parts of a vernier / Electronic theodolite and practice for taking angle measurements.</li>
  <li>To measure vertical angle of given points by Electronic theodolite.</li>
  <li>To measure horizontal angle between two objects by repetition method with three repetitions.</li>
  <li>To measure horizontal angle by method of reiteration</li>
  <li>To set out a simple circular curve by Rankine‟s method.</li>
</ol>
<img src=''/>
   </Box>
   </DepartmentBox>
  )
}

export default Survey