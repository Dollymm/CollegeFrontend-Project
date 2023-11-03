import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { Link } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Box, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DropDown from "../../components/DrawerComponent/About/DropDown";
import AdministrationDropDown from "../../components/DrawerComponent/Administraion/AdministrationDropDown";
import AcadmicDropdown from "../../components/DrawerComponent/Academic/AcademicDropdown";
import DepartmentDropdown from "../../components/DrawerComponent/Departments/DepartmentDropdown";
const DrawerComponent = ({ drawerOpen, toggleDrawer, navigate }) => {
  const drawerItems = [
    "HOME",
    "ABOUT",
    "ADMINISTRATION",
    "DEPARTMENTS",
    "ACADEMIC",
    "STUDENT CORNER",
    "FACILITES",
  ];

  // State to control the visibility of the ABOUT and ADMINISTRATION dropdowns
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showAdminDropdown, setShowAdminDropdown] = useState(false);
  const [showAcadmicDropdown, setAcadmicDropdown] = useState(false);
const [showDepartmentDropdown,setDepartmentDropdown]=useState(false)
  // Function to toggle the ABOUT dropdown
  const toggleAboutDropdown = () => {
    setShowAboutDropdown(!showAboutDropdown);
  };

  // Function to toggle the ADMINISTRATION dropdown
  const toggleAdminDropdown = () => {
    setShowAdminDropdown(!showAdminDropdown);
  };
  //function to toggle the Academic dropdown
  const toggleAcademicDropdown = () => {
    setAcadmicDropdown(!showAcadmicDropdown);
  };
//function to toggle the department
const toggleDepartmentDropdown = () => {
  setDepartmentDropdown(!showDepartmentDropdown);
};
  return (
    <Box>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          width: "100%",
        }}
      >
        <List>
          {drawerItems.map((item, index) =>
            item === "HOME" ? (
              <Link href="/" key={index}>
                <ListItem>
                  <ListItemText primary={item} />
                
                </ListItem>
              </Link>
            ) : item === "ABOUT" ? (
              <div key={index}>
                <ListItem onClick={toggleAboutDropdown}>
                  <ListItemText primary={item} />
                  <IconButton
                    onClick={toggleAboutDropdown}
                    size="small"
                    sx={{ marginLeft: "auto" }}
                  >
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </ListItem>
                {showAboutDropdown && <DropDown />}
              </div>
            ) : item === "ADMINISTRATION" ? (
              <div key={index}>
                <ListItem onClick={toggleAdminDropdown}>
                  <ListItemText primary={item} />
                  <IconButton
                    onClick={toggleAdminDropdown}
                    size="small"
                    sx={{ marginLeft: "auto" }}
                  >
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </ListItem>
                {showAdminDropdown && <AdministrationDropDown />}
           
              </div>
              ) : item === "ACADEMIC" ? (
              <div key={index}>
                <ListItem onClick={toggleAcademicDropdown}>
                  <ListItemText primary={item} />
                  <IconButton
                    onClick={toggleAcademicDropdown}
                    size="small"
                    sx={{ marginLeft: "auto" }}
                  >
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </ListItem>
                {showAcadmicDropdown && <AcadmicDropdown />}
                
              </div>
              ) : item === "DEPARTMENTS" ? (
              <div key={index}>
                <ListItem onClick={toggleDepartmentDropdown}>
                  <ListItemText primary={item} />
                  <IconButton
                    onClick={toggleDepartmentDropdown}
                    size="small"
                    sx={{ marginLeft: "auto" }}
                  >
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </ListItem>
                {showDepartmentDropdown && <DepartmentDropdown />}
              
              </div>
            ) : (
              <ListItem
                key={index}
                onClick={() => {
                  navigate(`/${item.toLowerCase()}`);
                  toggleDrawer();
                }}
              >
                <ListItemText primary={item} />
              </ListItem>
              
            )
          )}
        </List>
      </Drawer>
    </Box>
  );
};

export default DrawerComponent;
