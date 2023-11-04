import { Typography,Box } from '@mui/material'
import React from 'react'
import { DepartmentBox } from '../../../Style'

const Cprogramming = () => {
  return (
    <DepartmentBox>
    <Box paddingLeft={2}>
     
     <h3><b About/></h3>
     <Typography>The lab is installed with all important editors like CodeBlock, Dev C++ provides a dual operating system environment where the students can learn to execute C and C++ programs in all types of environments.</Typography>
 <h3> List of Software and Hardware Software:</h3>
 <ol>
    <li>Turbo C/C++</li>
    <li>Dev C</li>
    <li>GCC</li>
    <li>Visual Studio Code</li>
 </ol>
   <h3><b>Hardware</b></h3>
   <Typography>The lab includes 35 systems with following configurations:</Typography>

   <ol>
   <li>Operating System: Windows 10, UBUNTU 15.04</li>
   <li>Processor: Intel Core i5</li>
   <li>RAM: 4GB</li>
   <li>HDD: 500 GB</li>
   <li>Display: 19" TFT</li>
   <li>Powe Back Up: 15KVA Online UPS</li>
 </ol>

    </Box>
    </DepartmentBox>
  )
}

export default Cprogramming;