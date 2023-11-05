import React from 'react'
import { StudentBox } from '../Style'

import { Container,Paper,Box,Typography,TableContainer,Table,TableBody, TableHead, TableRow, TableCell } from '@mui/material'

const Libaray = () => {
  return (
  <StudentBox>
    <Box>
    <h1>Library</h1>
      <img src='https://itgopeshwar.ac.in/wp-content/uploads/2020/08/IMG20200714100818-1024x768.jpg'/>
   <h2>Libray</h2>
   <Typography>Institute of Technology Library is accomplishing its task of reaching to wider  academic community.The library started with few hundred books and few periodicals. The major portion of the books in the Institute of Technology is, of course related to Engineering. There is an excellent Reference Section stocked with Encyclopedias, dictionaries, handbooks etc.\library was established in 2013-2014. Its started stock was nearly 5000 books later time to time the stock of the books increased. Recently it has nearly 17000 books. The library building centrally with well-equipped furniture and has a sitting accommodation of 60 students.</Typography>
   <br/>
   <Typography>The books are available in the library related to the engineering Branch such as Mechanical, Electrical, Electronics, and computer science and civil. We provide 6 books from library book bank free of cost every sessions well as weekly issue-returns. We also planned for e-books and e-journals subscription in upcoming quarter. Moreover central library have NPTEL local chapter for online courses. The library also received English (Times of Indian and Hindustan Times) and Hindi newspaper (Amar Ujala and Dainik Jagran).</Typography>
   
   <Container sx={{ marginTop: 5 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ fontWeight: 'bold',borderLeft:'1px solid #ddd' }}>
                  <TableCell >S.NO</TableCell>
                  <TableCell>NAME OF MAGAZINE/JOURNALS</TableCell>
                 
                </TableRow>
              </TableHead>
              <TableBody>
              <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Electronics for you</TableCell>
              </TableRow>
              <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Civil Engg & construction review</TableCell>
              </TableRow>
              <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Power line</TableCell>
              </TableRow>
              <TableRow>
              <TableCell>4</TableCell>
              <TableCell>MSG Architecture</TableCell>
              </TableRow>
              <TableRow>
              <TableCell>5</TableCell>
              <TableCell>Electrical India</TableCell>
              </TableRow>
              <TableRow>
              <TableCell>6</TableCell>
              <TableCell>Indian concrete journals</TableCell>
              </TableRow>
              <TableRow>
              <TableCell>7</TableCell>
              <TableCell>Highway Research journals</TableCell>
              </TableRow>
              <TableRow>
              <TableCell>8</TableCell>
              <TableCell>Journal of Intelligent Computing</TableCell>
              </TableRow>
              <TableRow>
              <TableCell>9</TableCell>
              <TableCell>	The IUP Journal of soft skill</TableCell>
              </TableRow>
              <TableRow>
              <TableCell>10</TableCell>
              <TableCell>Proceedings mathematical science	</TableCell>
              </TableRow>
              
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      
    </Box>
  </StudentBox>
  )
}

export default Libaray