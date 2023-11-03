import React from 'react'
import AntiRagging from './Committees/AntiRagging'
import StudentCounsellor from './Committees/StudentCounsellor'
import {IoMdArrowDropdown,IoMdArrowDropup} from 'react-icons/io'
// import {AiOutlineArrowUp} from 'react-icons/ai'
import { useState } from 'react'
import { Box, Button,  Typography } from '@mui/material';
import { WorkingCard } from '../Style'
const WorkingComitees = () => {
  const [ragging,setRagging]=useState(false);
  const [counsellors,setCounsellor]=useState(false);
  const[sc,setSc]=useState(false);
  const [placemnet,setPlacement]=useState(false);
  const [women ,setWomen]=useState(false);
  const [redressal,setRedressal]=useState(false);
  const [antiDrug,setAntiDrug]=useState(false);
  const[quality,setQuality]=useState(false)
  const [media,setMedia]=useState(false)
  return (
    <WorkingCard>
    <Box>
    <Box>
    {
    !ragging ? <IoMdArrowDropdown /> : <IoMdArrowDropup />
   }
        <Button onClick={()=>setRagging(!ragging)}>Anti-Ragging commitee</Button>
    
    </Box>
    {
      ragging && <AntiRagging />
    }
    </Box>
    <Box>
    {
      !counsellors ? <IoMdArrowDropdown/>:<IoMdArrowDropup/>
    }
      <Button onClick={()=>setCounsellor(!counsellors)}>Student counsellor Committee</Button>
      {
        counsellors && <StudentCounsellor/>
      }
    </Box>
    <Box>
    {
      !sc ?<IoMdArrowDropdown/>:<IoMdArrowDropup/>
    }
           <Button onClick={()=>setSc(true)}>sc/st Committee</Button>
      {
        sc &&  <Typography>hiii</Typography>
      
      }
    </Box>

    <Box>
    {
      !placemnet?<IoMdArrowDropdown/>:<IoMdArrowDropup/>
    }
      <Button onClick={()=>setPlacement(true)}>Training and Placemnet Cell</Button>
    </Box>
<Box>
{
 ! women? <IoMdArrowDropdown/>:<IoMdArrowDropup/>
}
  <Button>Women Grievance Committee</Button>
</Box>
<Box>
{
  !redressal?<IoMdArrowDropdown/>:<IoMdArrowDropup/>
}
  <Button>Grievance Redressal Committee</Button>
</Box>
    <Box>
    {
     !antiDrug? <IoMdArrowDropdown/>:<IoMdArrowDropup/>
    }
      <Button>Anti-Drug Committee</Button>
    </Box>
    <Box>
    {
     !quality? <IoMdArrowDropdown/>:<IoMdArrowDropup/>
    }
      <Button>Internal Quality Assurance Cell</Button>
    </Box>
    <Box>
    {
    !media? <IoMdArrowDropdown/>:<IoMdArrowDropup/>
    }
      <Button>Media Cell Committee</Button>
    </Box>
    </WorkingCard>
  )
}

export default WorkingComitees