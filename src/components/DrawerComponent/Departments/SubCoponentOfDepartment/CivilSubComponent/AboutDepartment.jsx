import { Typography,Box } from "@mui/material";
import React from "react";

const AboutDepartment = () => {
  return (
    <Box
      style={{
            color: "black",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            textAlign:'justify',
            marginTop:'10px',
            boxSizing:'border-box'
          }}>
      <Typography>
        Civil engineering is considered to be the oldest branch of engineering.
        It is the application of physical and scientific principles for solving
        the problems of society. In civil engineering one gains the knowledge
        about structures, material science, geography, geology, soils,
        hydrology, environment, mechanics and many more. Civil engineering is
        the application of mechanics and physics which helps civil engineers to
        go beyond the imaginations and build structures.
        Thedepartmentofcivilengineeringisdedicatedtothegrowthofstudentsanddepartment
        as well. The faculty and staff are always keen to help students for
        their queries. The department
        <br/>
        aimstoworkforthewelfareofsocietyaswell.Thecourseoutlineofcivilfieldprogrammesgives
        the fundamental knowledge and flexibility as it has different types of
        work to do like designing,
        surveyingandmaintainingastructure,aswellasitprovidesabetterfutureforcivilengineers.The
        principle educational objective of our department is to provide the
        students with fundamental and high tech knowledge and the skills needed
        to resolve the problems related to construction and maintenance of
        infrastructure in harmony with the society and environment.
      </Typography>
    </Box>
  );
};

export default AboutDepartment;
