import React from 'react'
import { StudentBox } from '../Style'
import { Typography,Box } from '@mui/material'

const Medical = () => {
  return (
   <StudentBox>
    <Box>
    <h1>Medical Facilities</h1>
      <img src='https://itgopeshwar.ac.in/wp-content/uploads/2017/05/med-1.jpg'/>
 <h2>Health Care</h2>

 <Typography>IT provides medical facility to all its students. College provides periodical medical checkups with a team of doctors for the benefit of the students.
The college has a well-equipped MI room. The college has an emergency vehicle for transportation of sick to nearby hospital 24×7 day</Typography>

    </Box>
   </StudentBox>
  )
}

export default Medical