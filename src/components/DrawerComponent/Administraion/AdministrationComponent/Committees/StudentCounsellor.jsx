import React from 'react'
import { Container,Paper,TableContainer,Table,TableBody, TableHead, TableRow, TableCell } from '@mui/material'
import { StudentCounsellorobj } from '../../../../../constant/commitee'
const StudentCounsellor = () => {
  return (
    <Container>
    <TableContainer component={Paper}>
     <Table>
         <TableHead>
         <TableRow
          sx={{fontWeight:700}}>
             <TableCell>S.NO</TableCell>
             <TableCell> Name</TableCell>
             <TableCell>Mobile Number</TableCell>
             <TableCell>Email id</TableCell>
           
         </TableRow>

         </TableHead>
             <TableBody>
             {
                 StudentCounsellorobj.map(data=>{
                     return(
             <TableRow>
                 <TableCell>{data.sno}</TableCell>
                 <TableCell>{data.name}</TableCell>
                 <TableCell>{data.number}</TableCell>
                 <TableCell>{data.email}</TableCell>
                
                 </TableRow>
                     )
                 })
             }
            
                   
             </TableBody>
     </Table>
    </TableContainer>
 </Container>
  )
}

export default StudentCounsellor