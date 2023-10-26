import React,{useState} from 'react'
import { Items } from '../../../layout/Header/styles';
import {  Button } from "@mui/material";
import { Popover, Typography } from "@mui/material";
import DepartmentDropdown from './DepartmentDropdown';

const Departments = () => {
  const [departmentsPopover, setDepartmentsPopover] = useState(null);

const openDepartmentsPopover = (event) => {
  setDepartmentsPopover(event.currentTarget);
};

const closeDepartmentsPopover = () => {
  setDepartmentsPopover(null);
};
  return (
    <Items>
    <div
            onMouseEnter={openDepartmentsPopover}
            onMouseLeave={closeDepartmentsPopover}
          >
            <Button style={{ color: "#7E1717" }}>Department</Button>
            <Popover
              open={Boolean(departmentsPopover)}
              anchorEl={departmentsPopover}
              onClose={closeDepartmentsPopover}
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
                <DepartmentDropdown/>
              </Typography>
            </Popover>
          </div>
          </Items>
  )
}

export default Departments