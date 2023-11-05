
import React,{useState} from 'react'
import { Items } from '../../../layout/Header/styles';
import {  Button } from "@mui/material";
import { Popover, Typography } from "@mui/material";
import StudentDropdown from './StudentDropdown';

const StuentsCorner = () => {
  const [studentPopover, setStudentPopover] = useState(null);

  const openStudentPopover = (event) => {
    setStudentPopover(event.currentTarget);
  };
  
  const closeStudentPopover = () => {
    setStudentPopover(null);
  };
  return (
    <Items>
    <div
            onMouseEnter={openStudentPopover}
            onMouseLeave={closeStudentPopover}
          >
            <Button style={{ color: "#7E1717" }}>Student Corner</Button>
            <Popover
              open={Boolean(studentPopover)}
              anchorEl={studentPopover}
              onClose={closeStudentPopover}
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
                <StudentDropdown/>
              </Typography>
            </Popover>
          </div>
          </Items>
  )
}

export default StuentsCorner