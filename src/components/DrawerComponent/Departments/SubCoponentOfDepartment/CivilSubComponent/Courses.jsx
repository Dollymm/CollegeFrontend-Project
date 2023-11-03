import { Typography,Box} from "@mui/material";
import React from "react";
import { DepartmentBox } from "../../Style";

const Courses = () => {
  return (
    <DepartmentBox>
    <div>
      <h3>Core Subjects</h3>
      <Typography>
        Being affiliated to the Uttarakhand Technical University, The Civil
        Engineering department of the IT Gopeshwar follows the courses and
        syllabus prescribed by UTU which focus on and provide in-depth studies
        in the following main stream topics:
      </Typography>
      </div>
      <div>
      <ul>
        <li>Strength of Materials</li>
        <li>Fluid Mechanics and Applied Hydraulics</li>
        <li>Surveying</li>
        <li>Structural analysis</li>
        <li>Design of RCC</li>
        <li>Design of Steel Structures Structural</li>
        <li>Soil Mechanics and Foundation Engineering</li>
        <li>Water Resource Engineering</li>
        <li>Irrigation Engineering</li>
        <li>Environmental Engineering</li>
        <li>Highway and Railway Engineering</li>
        <li>Computer Aided Design</li>
        <li>Prestressed Concrete Design</li>
      </ul>
      </div>
      <br />
      <div>
      <h3>Elective Subjects</h3>
      <ul>
        <li>Ground Water Engineering</li>
        <li>Hydraulic Structures</li>
        <li>River Engineering</li>
        <li>Construction Planning & Management</li>
        <li>Advance Highway Engineering</li>
        <li>Air & Water Pollution</li>
        <li>Environmental Impact & Risk Management</li>
        <li>Environmental Management & Sustainable Development</li>
        
      </ul>
      </div>
    </DepartmentBox>
  );
};

export default Courses;
