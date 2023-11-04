import { Typography, Box } from "@mui/material";
import React from "react";
import { DepartmentBox } from "../../Style";

const AboutDepartment = () => {
  return (
    <DepartmentBox>
      <Typography textAlign={"justify"}>
        The core courses offered by the Department of Computer Engineering are
        B.Tech Degree in Computer Science and Engineering . These courses are
        aimed at providing theoretical and practical knowledge of Computer
        Science. The subjects in Bachelor’s level programme include Computer
        Architecture and Organisation,Automata Languages and Computation,Data
        Stuctures and Algorithms, Database Management Systems,Language
        Processor,Computer Networks,Advanced Architecture and Parallel
        Processing ,Software Engineering, Digital Signal Processing ,Analysis
        and Design of Algorithms etc.
        <br />
        The curriculum also includes management papers like Industrial
        Organization and Management. In order to bridge the gap between
        knowledge and its true application, students are required to undertake
        seminars, mini-project and main project that put them through an
        industry-like situation. The course produces an ideal computer engineer,
        well-equipped to meet the challenges of the rapidly growing IT
        industry.Computer Science has the power to change the world. This course
        offer a flexible and facinating programmes for the students who wish to
        acquire high skills in computers & applications, all supported by world
        class staff and facilities. The curriculum provides the students with a
        technical perspective on major issues of computer application,
        programming, languages and web enabled services.
      </Typography>
    </DepartmentBox>
  );
};

export default AboutDepartment;
