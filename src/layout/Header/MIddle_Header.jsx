import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import {  Link } from "@mui/material";
import Academic from "../../components/DrawerComponent/Academic/Academic";
import Adminstration from "../../components/DrawerComponent/Administraion/Adminstration";
import About from "../../components/DrawerComponent/About/About";
import Departments from "../../components/DrawerComponent/Departments/Departments";
import { Box, Toolbar, Button } from "@mui/material";
import StuentsCorner from "../../components/DrawerComponent/Students Corner/StuentsCorner";

import {
  Container,
  Deemd,
  English,
  Hindi,
  Icon,
  Image,
  ImageBox,
  Items,
  Loc,
  Menu,
  Signin,
} from "./styles";
import DrawerComponent from "../Drawer/DrawerComponent";
import Facilities from "../../components/DrawerComponent/Facilites/Facilities";

const MIddle_Header = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleLogin = () => {
    navigate("/register");
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <Container position="sticky">
      <Toolbar sx={{ height: "100%" }}>
        {/* for clg logo */}
        <Icon>
          <ImageBox>
            {/* img */}
            <Image
              src="https://storage.googleapis.com/ezap-prod/colleges/3615/institute-of-technology-gopeshwar-chamoli-logo.png"
              alt=""
            />
          </ImageBox>
          <Box display={"flex"} flexDirection={"column"}>
            <Hindi>प्रौद्योगिकी संस्थान, गोपेश्वर</Hindi>
            <English>Institute of Technology, Gopeshwar</English>
            <Deemd>
              VEER MADHO SINGH BHANDARI UTTARAKHAND TECHNICAL UNIVERSITY,
            </Deemd>
            <Loc>CAMPUS INSTITUTE, Approved By AICTE, NEW DELHI</Loc>
          </Box>
        </Icon>

        <Items>
          <Link to="/" onClick={() => navigate("/")}>
            <Button style={{ color: "#7E1717" }}>Home</Button>
          </Link>
         <div><About/></div>
          <div><Adminstration/></div>
          <div><Academic/></div>
      <div><Departments/></div>
        <div><StuentsCorner/></div>
         <div><Facilities/></div>
        </Items>

        {/* for login */}
        <Signin>
          <button onClick={handleLogin}>Login</button>
        </Signin>

        <Menu onClick={toggleDrawer}>
          <IoIosMenu />
        </Menu>

        <DrawerComponent
          drawerOpen={drawerOpen}
          toggleDrawer={toggleDrawer}
          navigate={navigate}
        />
      </Toolbar>
    </Container>
  );
};

export default MIddle_Header;
