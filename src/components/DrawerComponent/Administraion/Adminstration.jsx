import React,{useState} from 'react'
import {  Button } from "@mui/material";
import { Items } from '../../../layout/Header/styles'
// import { IoIosMenu } from "react-icons/io";
import { Popover, Typography, Link } from "@mui/material";
import AdministrationDropDown from './AdministrationDropDown';
const Adminstration = () => {
  const [adminPopover, setAdminPopover] = useState(null);
  const openAdminPopover = (event) => {
    setAdminPopover(event.currentTarget);
  };

  const closeAdminPopover = () => {
    setAdminPopover(null);
  };
  return (
    <Items>
    <div onMouseEnter={openAdminPopover} onMouseLeave={closeAdminPopover}>
            <Button style={{ color: "#7E1717" }}>ADMINISTRATION</Button>
            <Popover
              open={Boolean(adminPopover)}
              anchorEl={adminPopover}
              onClose={closeAdminPopover}
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
                <AdministrationDropDown />
              </Typography>
            </Popover>
          </div>
          </Items>
  )
}

export default Adminstration