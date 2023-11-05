import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { events } from "../../../../../constant/eventsmaterial";

export const Events = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", flexWrap: "wrap",gap:0 }}>
        {events.map((item, id) => (
          <Box
            key={id}
            sx={{
              width: "100%",
              "@media (min-width: 768px)": {
                width: "50%",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                textAlign: "center",
                width:"100%",
                // paddingLeft:'50px',
                
              }}
            >
              <img src={item.imgPath} alt="" style={{ width: "100%" }} />
              {/* <Typography sx={{ color: 'black' }}>{item.description}</Typography> */}
            </Box>
          </Box>
        ))}
      </Box>
      <div>
        <Typography
          style={{
            color: "black",
            display: "flex",
            justifyContent: "center",
            textAlign:'justify',
            marginTop:'10px'
          }}
        >
          Industrial Visit to Dam site of Vishnugad Hydro Power Project, THDC,
          Pipalkoti A educational trip was organized by Civil Engineering
          Department in coordination with internship cell on 10 & 11 March, 2018
          to Dam site of Vishnugad Hydro Power Project, THDC, Pipalkoti. Group
          of 30 students accompanied by 2 faculties (Mr. Sumit Juyal & Mr. Ved
          Prakash) visited the on day 1. On day 2 students were accompanied by
          Mr. Lalit Kumar and Mr. Abhishek Agrawal. At the dam site these groups
          were briefed about the construction work and state of art practices in
          Dam and Tunnel construction by Mr. Hardev Pant (Sr. Manager) and Mr.
          Girdhari Lal (Manager) of THDC.
        </Typography>
      </div>
    </Container>
  );
};
