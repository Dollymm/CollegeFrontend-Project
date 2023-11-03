import React from "react";
import { Grid, Typography } from "@mui/material";
import { Container } from "../../Style";
import { FaRegGem, FaSnowflake } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import { TbFocus2 } from "react-icons/tb";
import {RiFlightTakeoffLine,RiFocus2Line} from 'react-icons/ri'
const iconSize = 48;
const containerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
// height: '100vh', // You can adjust the height as needed
const iconStyles = {
  fontSize: iconSize,
  transition: "color 0.3s", // Add a smooth transition for color change.
  cursor: "pointer", // Add a pointer cursor on hover.
};

const WhyChhosecomp = () => {
  const [iconColor, setIconColor] = React.useState({});

  const handleIconHover = (iconName) => {
    setIconColor((prevColors) => ({
      ...prevColors,
      [iconName]: "#DD5151",
    }));
  };

  const handleIconLeave = (iconName) => {
    setIconColor((prevColors) => ({
      ...prevColors,
      [iconName]: "",
    }));
  };
  return (
    <>
      <Container>
        <h1>Why To Choose ITG</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <div style={containerStyles}>
              <FaRegGem
                style={{ ...iconStyles, color: iconColor.FaRegGem }}
                onMouseEnter={() => handleIconHover("FaRegGem")}
                onMouseLeave={() => handleIconLeave("FaRegGem")}
              />
            </div>
            <h4>QUALIFIED TEACHER</h4>

            <Typography>
              A quality universal primary education will remain a distant dream
              for millions of students living in countries without enough
              trained teachers in classrooms. Teachers are the core of any
              education system. Hiring and training new and already established
              teachers is fundamental to protecting students' ability to learn
              in college. Teachers are the core of any education system. Hiring
              and training new and already established teachers is fundamental.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div style={containerStyles}>
              <HiComputerDesktop
                style={{ ...iconStyles, color: iconColor.HiComputerDesktop }}
                onMouseEnter={() => handleIconHover("HiComputerDesktop")}
                onMouseLeave={() => handleIconLeave("HiComputerDesktop")}
              />
            </div>
            <h4>EQUIPPED CLASS ROOMS</h4>
            <Typography>
              A classroom is a learning space, a room in which classes are held.
              The key element in classroom management, whether using technology
              or not, is to ensure that students are actively participating in
              the learning process, not simply receiving it. There are many new
              technological advances that can be found in today’s classrooms,
              and the integration of technology into classrooms has brought
              learning to an entirely new level.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div style={containerStyles}>
              <FaSnowflake
                style={{ ...iconStyles, color: iconColor.FaSnowflake }}
                onMouseEnter={() => handleIconHover("FaSnowflake")}
                onMouseLeave={() => handleIconLeave("FaSnowflake")}
              />
            </div>
            <h4>ADVANCED STUDY PLANS</h4>
            <Typography>
              ITG offers higher education in Engineering, Technology and allied
              Sciences relevant to the current and projected needs of the
              society. Besides promoting research and disseminating knowledge
              gained therefrom, it fosters cooperation between the academic and
              industrial communities.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div style={containerStyles}>
              <TbFocus2
                style={{ ...iconStyles, color: iconColor.TbFocus2 }}
                onMouseEnter={() => handleIconHover("TbFocus2")}
                onMouseLeave={() => handleIconLeave("TbFocus2")}
              />
            </div>
            <h4>FOCUS ON TARGET</h4>
            <Typography>
              ITG is a key technology focused college. Our focus is not only in
              academics but also in various practical & industrial connect
              programs. We maintain close interaction with the industries for on
              the job training of the students as well as for fine-tuning of its
              academic programme in consultation with the industries.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div style={containerStyles}>
              <RiFlightTakeoffLine
                style={{ ...iconStyles, color: iconColor.RiFlightTakeoffLine }}
                onMouseEnter={() => handleIconHover("RiFlightTakeoffLine")}
                onMouseLeave={() => handleIconLeave("RiFlightTakeoffLine")}
              />
            </div>
            <h4>ADVANCED TEACHING</h4>
            <Typography>
              Advanced Teaching Methods for the Technology Classroom provides a
              comprehensive, critical approach to meeting the new challenges of
              technology in the classroom. Advanced Teaching Methods for the
              Technology Classroom presents an introduction to teaching
              educational technology, design, and engineering. It also contains
              strategies for innovation by examining the what, why, and how of
              technology education.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div style={containerStyles}>
              <RiFocus2Line
                style={{ ...iconStyles, color: iconColor.RiFocus2Line }}
                onMouseEnter={() => handleIconHover("RiFocus2Line")}
                onMouseLeave={() => handleIconLeave("RiFocus2Line")}
              />
            </div>
            <h4>FOUCUS ON SUCCESS</h4>
            <Typography>
              ITG is a key technology focused college. Our focus is not only in
              academics but also in various practical & industrial connect
              programs. We maintain close interaction with the industries 
              for on
              the job training of the students as well as for fine-tuning of its
              academic programme in consultation with the industries.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default WhyChhosecomp;
