import React from 'react'
import { Container,Paper,Box,Typography,TableContainer,Table,TableBody, TableHead, TableRow, TableCell } from '@mui/material'
import { raggingObj } from '../../../../../constant/commitee'
const AntiRagging = () => {
  return (
    <Container>
           <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow
                 sx={{fontWeight:700}}>
                    <TableCell>S.NO</TableCell>
                    <TableCell> Name</TableCell>
                    <TableCell>Designation</TableCell>
                    <TableCell>Nature of Duty</TableCell>
                    <TableCell>Mobile NUmber</TableCell>
                    <TableCell>Email Address</TableCell>
                </TableRow>
    
                </TableHead>
                    <TableBody>
                    {
                        raggingObj.map(data=>{
                            return(
                    <TableRow>
                        <TableCell>{data.sno}</TableCell>
                        <TableCell>{data.name}</TableCell>
                        <TableCell>{data.designation}</TableCell>
                        <TableCell>{data.duty}</TableCell>
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
 
export default AntiRagging