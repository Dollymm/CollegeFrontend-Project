import { Box, styled } from "@mui/material";

export const  StudentBox= styled(Box)(({ theme }) => ({
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // textAlign:'center',
    // boxSizing:'border-box',
    padding: theme.spacing(0, 10),
    textAlign:'justify',
    // overflowX: "hidden",
    // // flexDirection: "column", 
    // width: "100%",
    // marginTop: 20,
    // textAlign: "center",
    // overflow: "hidden",
    // color: "#0D2E71",
    // padding: "20px",
    "&>div":{
//   width:'100%',
  
   
    "&>h1,&>h2,&>h3":{
      // background:'#0D2E71',
      color:'#0D2E71'
    },
    "& > h1, & > img, & > p": {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      marginBottom: "20px", 
    },
    "& > img": {
      display: "flex",
      alignItems:'center',
      justifyContent:'center',
      width: "503",
      maxWidth: "60%",
    //   borderRadius: "10px",
      height: "auto",
      padding: 30,
      margin: "0 auto", 
      fontSize: 20,
      color: "#0D2E71",
      [theme.breakpoints.down("sm")]: {
        width: "100%", 
      },
    },
  },
    "& > p": {
    //   display: "flex",
    //   textAlign: "justify",
      overflow: "hidden",
      width: "100%",
      maxWidth:'100%',
      [theme.breakpoints.down("sm")]: {
        display: "block", // Change to block display
        padding: "10px",
      }},
      [theme.breakpoints.down("sm")]:{
        padding: theme.spacing(0, 3),
      }
  }));