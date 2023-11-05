
import React,{useState} from 'react'
import { Items } from '../../../layout/Header/styles';
import {  Button } from "@mui/material";
import { Popover, Typography } from "@mui/material";
import FacilityDropdown from './FacilityDropdown';

const Facilities = () => {
  const [facilitiesPopover, setFacilityPopover] = useState(null);

  const openFacilityPopover = (event) => {
    setFacilityPopover(event.currentTarget);
  };
  
  const closeFacilitysPopover = () => {
    setFacilityPopover(null);
  };
  return (
    <Items>
    <div
            onMouseEnter={openFacilityPopover}
            onMouseLeave={closeFacilitysPopover}
          >
            <Button style={{ color: "#7E1717" }}>Facilites</Button>
            <Popover
              open={Boolean(facilitiesPopover)}
              anchorEl={facilitiesPopover}
              onClose={closeFacilitysPopover}
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
                <FacilityDropdown/>
              </Typography>
            </Popover>
          </div>
          </Items>
  )
}

export default Facilities