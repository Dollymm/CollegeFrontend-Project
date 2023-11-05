import React from "react";
import { StudentBox } from "../Style";
import { Box, Typography } from "@mui/material";

const Security = () => {
  return (
    <StudentBox>
      <Box>
        <h1>Security</h1>
        <img src="https://img.freepik.com/free-photo/cctv-security-technology-with-lock-icon-digital-remix_53876-104935.jpg?size=626&ext=jpg&ga=GA1.1.378154401.1681917429&semt=ais" />
        <h2>Scurity</h2>
        <Typography>
          Our round-the-clock security provides a safe learning environment bt
          protecting the students, staff and physical assets, while encouraging
          positive behaviour that foster academic excellence.
        </Typography>

        <h2>Services</h2>
        <Typography>
          Monitoring and controlling access to campus facilities providing
          surveillance of private records, materials and valuable equipment.
          tracking truancy and inappropriate student behaviour video
          surveillance and access control for cost-effective campus-wide
          protection, managing parking permit and vehicle identification.
        </Typography>
      </Box>
    </StudentBox>
  );
};

export default Security;
