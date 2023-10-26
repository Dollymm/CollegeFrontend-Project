
import React,{useState} from 'react'
import { Items } from '../../../layout/Header/styles'
import {  Button } from "@mui/material";
import { Popover, Typography, Link } from "@mui/material";
import DropDown from './DropDown';

const About = () => {
  const [aboutUsPopover, setAboutUsPopover] = useState(null);
  const openAboutUsPopover = (event) => {
    setAboutUsPopover(event.currentTarget);
  };

  const closeAboutUsPopover = () => {
    setAboutUsPopover(null);
  };

  return (
    <Items>
    <div
            onMouseEnter={openAboutUsPopover}
            onMouseLeave={closeAboutUsPopover}
          >
            <Button style={{ color: "#7E1717" }}>About Us</Button>
            <Popover
              open={Boolean(aboutUsPopover)}
              anchorEl={aboutUsPopover}
              onClose={closeAboutUsPopover}
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
                <DropDown />
              </Typography>
            </Popover>
          </div>
          </Items>
  )
}

export default About
