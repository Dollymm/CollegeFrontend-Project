import { Box, Typography } from "@mui/material";
import React from "react";
import { DepartmentBox } from "../../Style";

const VisionMission = () => {
  return (
   <>
   <DepartmentBox>
   <Box>
      <h3>Vision</h3>
      <Typography>
        To ensure participation in nation building by moulding up dynamic,
        competent and environmentally cognizant civil engineering graduates,
        capable of taking up professional challenges, imparting their profound
        knowledge and outstanding skills.
      </Typography>
      </Box>
      <Box>
      <h3>Mission</h3>
      <Typography>M1. To achieve excellence in the field of civil engineering and allied research</Typography>
   <Typography>M2. To promote innovative thinking in the minds of budding engineers and providing them a platform to showcase their talents</Typography>
   <Typography>M3. To update the curriculum and teaching methodologies as per the recent trends in technology and latest market demands by continues interaction with the industries</Typography>
   <Typography>M4. To instill moral and ethical values in students to mould them as individuals with social obligation</Typography>
   </Box>
   <Box>
   <h3>Program Educational Objective</h3>
   <Typography><b>PEO-1:</b>To provide students with a solid foundation in mathematical, scientific and engineering fundamentals required to solve engineering problems and also to pursue higher studies.</Typography>
   <Typography><b>PEO-2:</b>To prepare  students for successful career in research related to environment sustainability</Typography>
   <Typography><b>PEO-3:</b>To help students show good competency and social commitment in their work culture</Typography>
   <Typography><b>PEO-4:</b>To promote student awareness of the life-long learning and to introduce them to professional ethics and codes of professional practice</Typography>
</Box>
<Box>
  <h3> Program Outcomes</h3>
  <Typography><b>PO1:</b>Apply knowledge of mathematics, science, and engineering for solving complex Civil Engineering problems.</Typography>
  <Typography><b>PO2:</b> Analyze and solve complex Civil Engineering problems using the principles of mathematics, natural sciences and Engineering sciences.</Typography>
  <Typography><b>PO3:</b>Design safe and sustainable structures / processes that are useful for the society by solving complex Civil Engineering problems.</Typography>
  <Typography><b>PO4:</b>Design various systems in the field of Civil Engineering by applying the concepts to investigate, conduct experiments and interpret data using appropriate codal provisions.</Typography>
  <Typography><b>PO5:</b>Apply appropriate modern tools and software for modeling and solution for Civil Engineering projects.</Typography>
  <Typography><b>PO6:</b>Apply building bye-laws and standards specified by the nodal agencies for the execution of Civil Engineering projects.</Typography>
  <Typography><b>PO7:</b>Understand environmental pollution problems, green building concepts and demonstrate sustainable engineering practices for Civil Engineering projects.</Typography>
</Box>
</DepartmentBox>
    </>
  );
};

export default VisionMission;
