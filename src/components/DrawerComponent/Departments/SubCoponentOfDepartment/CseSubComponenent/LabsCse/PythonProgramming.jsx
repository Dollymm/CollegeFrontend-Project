import React from 'react'
import { DepartmentBox } from '../../../Style'
import { Box,Typography } from '@mui/material'
const PythonProgramming = () => {
  return (
    <DepartmentBox>
    <Box paddingLeft={2}>
     
     <h3><b>About</b> </h3>
     <Typography>Day by day Linux is becoming popular and useful for professionals. This characteristic has enticed us to set up Computer Science & Engineering Lab or Unix</Typography>
 <h3> List of Softwares and Hardware Softwares: </h3>
<ul>
    <li>Python</li>
    <li>Editor</li>
    <li>Visual Studio Code</li>
</ul>
   
   <h3>Hardware</h3>
   <ul>
  <li>Operating System: Windows 10, UBUNTU 15.04, Red Hat</li>
  <li>Processor: Intel Core i5</li>
  <li>RAM: 4GB</li>
  <li>HDD: 500 GB</li>
  <li>Display: 19" TFT</li>
  <li>Powe Back Up: 15KVA Online UPS</li>
 </ul>

    <h3>List of practical</h3>
    <ol>
        <li>Installation & working with IDE</li>
        <li>How to declare and use variables and operators</li>
        <li>Programming using Basic Libraries (Numpy, Pandas, SK Learn etc)</li>
        <li>To write a Python program to print HELLO INDIA.</li>
        <li>To write a Python program that takes in command line arguments as input and print the number of arguments.</li>
        <li>To write a Python program find the division of student.</li>
        <li>To write a program implements Fibonacci series.</li>
        <li>To write a Python program for factorial.</li>
        <li>To write a Python program to use of functions.</li>
        <li>To write a Python program to implement list.</li>
    </ol>

    </Box>
    </DepartmentBox>
  )
}

export default PythonProgramming