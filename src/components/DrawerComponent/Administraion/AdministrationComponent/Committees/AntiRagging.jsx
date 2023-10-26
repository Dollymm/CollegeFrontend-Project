import React from 'react'
import { Container,Paper,Box,Typography,TableContainer,Table,TableBody, TableHead, TableRow, TableCell } from '@mui/material'
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
                    <TableRow>
                        <TableCell>1.</TableCell>
                        <TableCell>Vivek Uniyal</TableCell>
                        <TableCell>Proctor</TableCell>
                        <TableCell>Chairperson</TableCell>
                        <TableCell>97903476</TableCell>
                        <TableCell>vivek.un@12itgopeshwar</TableCell>
                       
                        </TableRow>
                    <TableRow>
                        <TableCell>2.</TableCell>
                        <TableCell>Arvind KUmar</TableCell>
                        <TableCell>HOD,ECE</TableCell>
                        <TableCell>Member</TableCell>
                        <TableCell>8945667</TableCell>
                        <TableCell>arvind@gmail.com</TableCell>
                   
                        </TableRow>
                    <TableRow>
                        <TableCell>3.</TableCell>
                        <TableCell>Abhishek Kumar</TableCell>
                        <TableCell>HOD,EE</TableCell>
                        <TableCell>Member</TableCell>
                        <TableCell>09007789</TableCell>
                        <TableCell>abjisgrk@itgopeshar</TableCell>
                        </TableRow>
                    <TableRow>
                        <TableCell>4.</TableCell>
                        <TableCell>Alok Bhatt</TableCell>
                        <TableCell>HOD,CE</TableCell>
                        <TableCell>Member</TableCell>
                        <TableCell>8790999</TableCell>
                        <TableCell>alokbhatt@gamil.com</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>5.</TableCell>
                            <TableCell>Hemant Chauhan</TableCell>
                            <TableCell>HOD,ME</TableCell>
                            <TableCell>Member</TableCell>
                            <TableCell>899567899</TableCell>
                            <TableCell>hematn@gmail.com</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>6.</TableCell>
                            <TableCell>Varun Prabhar</TableCell>
                            <TableCell>HOD,CSE</TableCell>
                            <TableCell>Member</TableCell>
                            <TableCell>9898999</TableCell>
                            <TableCell>varun@gami.com</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>7.</TableCell>
                            <TableCell>Ajaib Singh</TableCell>
                            <TableCell>HOD,ASHD</TableCell>
                            <TableCell>Member</TableCell>
                            <TableCell>7899877</TableCell>
                            <TableCell>singh@gamil.com</TableCell>
                        </TableRow>
                          
                    </TableBody>
            </Table>
           </TableContainer>
        </Container>
      )
    }
 
export default AntiRagging