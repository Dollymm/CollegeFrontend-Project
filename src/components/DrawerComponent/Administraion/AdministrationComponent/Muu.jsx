import React from 'react'
import { Container,Paper,Box,Typography,TableContainer,Table,TableBody, TableHead, TableRow, TableCell } from '@mui/material'
const Muu = () => {
  return (
   
        <Container sx={{ marginTop: 5 }}>
           <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow
                 sx={{fontWeight:'bold'}}>
                    <TableCell>S.NO</TableCell>
                    <TableCell>Industry Name</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>MoU Copy</TableCell>
                </TableRow>
    
                </TableHead>
                    <TableBody>
                    <TableRow>
                        <TableCell>1.</TableCell>
                        <TableCell>Commet Accessories Pvt Ltd.</TableCell>
                        <TableCell>11/07/2019</TableCell>
                        <TableCell>MoU 1</TableCell>
                        </TableRow>
                    <TableRow>
                        <TableCell>2.</TableCell>
                        <TableCell>Ensino Research and Development Pvt Ltd.</TableCell>
                        <TableCell>1/07/2019</TableCell>
                        <TableCell>MoU 2</TableCell>
                        </TableRow>
                    <TableRow>
                        <TableCell>3.</TableCell>
                        <TableCell>Perfect Power Ltd.</TableCell>
                        <TableCell>11/07/2019</TableCell>
                        <TableCell>MoU 3</TableCell>
                        </TableRow>
                    <TableRow>
                        <TableCell>4.</TableCell>
                        <TableCell>Benpour Technologies Pvt Ltd.</TableCell>
                        <TableCell>11/07/2019</TableCell>
                        <TableCell>MoU 4</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>5.</TableCell>
                            <TableCell>Programming Days,Dehradun</TableCell>
                            <TableCell>11/07/2020</TableCell>
                            <TableCell>MoU 5</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>6.</TableCell>
                            <TableCell>G.s Pahari food Products</TableCell>
                            <TableCell>13/09/2023</TableCell>
                            <TableCell>MoU 6</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>7.</TableCell>
                            <TableCell>Careeer Ahead</TableCell>
                            <TableCell>12/08/2023</TableCell>
                            <TableCell>MoU7</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>8.</TableCell>
                            <TableCell>MSME Tachnology CenterKaniya ,Ramnagar</TableCell>
                            <TableCell>3/10/2023</TableCell>
                            <TableCell>MoU 8</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>9.</TableCell>
                            <TableCell>Advance Tech India Pvt Ltd.</TableCell>
                            <TableCell>16/11/2023</TableCell>
                            <TableCell>MoU 9</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>10.</TableCell>
                            <TableCell>National Institue of Electronices & Information Technologies ,Haridwar</TableCell>
                            <TableCell>17/05/2024</TableCell>
                            <TableCell>MoU 10</TableCell>
                        </TableRow>
                    </TableBody>
            </Table>
           </TableContainer>
        </Container>
      )
    }

export default Muu