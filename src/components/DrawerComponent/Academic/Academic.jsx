import React,{useState} from 'react'
import { Items } from '../../../layout/Header/styles'
// import { IoIosMenu } from "react-icons/io";
import { Popover, Typography, Link } from "@mui/material";
import AcademicDropdown from '../Academic/AcademicDropdown'
import {  Button } from "@mui/material";


const Academic = () => {
  const [academicPopover,setAcademicPopover]=useState(null)
  const openAcdemic = (event) => {
    setAcademicPopover(event.currentTarget);
  };

  const closeAcademic = () => {
    setAcademicPopover(null);
  };

  return(
  <Items>
  <div onMouseEnter={openAcdemic} onMouseLeave={closeAcademic}>
  <Button style={{ color: "#7E1717" }}>ACADEMIC</Button>
  <Popover
    open={Boolean(academicPopover)}
    anchorEl={academicPopover}
    onClose={closeAcademic}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
  >
    <Typography>
      <AcademicDropdown />
    </Typography>
  </Popover>
</div>
</Items>
  )}
export default Academic