import React from 'react';
import { Container, Paper, TableContainer, Table, TableBody, TableRow, TableCell, Typography } from '@mui/material';
// import Button from '../../Style'
const Syllabus = () => {
    const buttonStyle = {
        padding: '8px 16px',
        backgroundColor: '#0D2E71',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
      };
  return (
    <Container sx={{ marginTop: 5 }}>
      <TableContainer component={Paper} sx={{ width: '100%' }}>
        <Table sx={{minWidth:500,
          '@media (max-width: 600px)': {
            minWidth: 300,
          },}}>
          <TableBody>
            <TableRow>
              <TableCell>First Year</TableCell>
              <TableCell>
                <a href=''><button style={buttonStyle}>Download</button></a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Second Year</TableCell>
              <TableCell>
                <a href=''><button style={buttonStyle}>Download</button></a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Third Year</TableCell>
              <TableCell>
                <a href=''><button style={buttonStyle}>Download</button></a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fourth Year</TableCell>
              <TableCell>
                <a href=''><button style={buttonStyle}>Download</button></a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Syllabus;
