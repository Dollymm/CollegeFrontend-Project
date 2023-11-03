import { Box, styled } from "@mui/material";

 export const SubItemStyles = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column", 
  alignItems: "flex-start",
  "& li": {
    margin: "8px 0",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },
  "&.clicked": {
    display: "block",
  },
});
export const Container = styled(Box)(({ theme }) => ({
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: 20,
  boxSizing:'border-box',
  // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  // border: '5px solid white',
  padding: theme.spacing(0, 10),
  overflowX: "hidden",
  color: "#0D2E71",
  [theme.breakpoints.down("sm")]: {
    padding:theme.spacing(0,2)
  },
  "&>p":{
    display:'flex',
    textAlign:"justify",
    overflow:"hidden",
    width:500,
    verticalAlign:'baseline',
    wordWrap:'break-word',
    lineHeight:'1.5em'
  },
  "& h1,h4":{
display:'flex',
textAlign:'center',
justifyContent:'center'
  },
  "& > button":{
    color:'#7E1717',
        fontSize:'2vw',
        fontWeight:600,
       border:'none',
       background:'none',

  }
}));

export const Img = styled("img")(({ theme }) => ({
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  width: "50%",
  height: "auto",
  padding: 30,
  fontSize: 20,
  color: "#0D2E71",
  [theme.breakpoints.down("sm")]: {
    width: 300,
    height: 200,
  },
}));

export const Card=styled("Box")(({theme})=>({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign:'center',
  boxSizing:'border-box',
  padding: theme.spacing(0, 10),
  overflowX: "hidden",
  flexDirection: "column", 
  width: "100%",
  marginTop: 20,
  textAlign: "center",
  overflow: "hidden",
  color: "#0D2E71",

  // padding: "20px",
  "&>h1":{
    // background:'#0D2E71',
    color:'#0D2E71'
  },
  "& > h1, & > img, & > p": {
    marginBottom: "20px", 
  },
  "& > img": {
    display: "block",
    // alignItems:'center',
    width: "743",
    maxWidth: "100%",
    borderRadius: "70px",
    height: "auto",
    padding: 30,
    margin: "0 auto", 
    fontSize: 20,
    color: "#0D2E71",
    [theme.breakpoints.down("sm")]: {
      width: "90%", 
    },
  },
  "& > p": {
    display: "flex",
    textAlign: "justify",
    overflow: "hidden",
    width: "100%",
    maxWidth:'100%',
    [theme.breakpoints.down("sm")]: {
      display: "block", // Change to block display
      padding: "10px",
    },
  },
  [theme.breakpoints.down("sm")]:{
    padding: theme.spacing(0, 3),
  }
}));
export const Card2=styled("Box")(({theme})=>({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign:'center',
  flexDirection: "column",
  boxSizing:'border-box',
  padding: theme.spacing(0, 10),
  width: "100%",
  marginTop: 20,
  overflow: "hidden",
  color: "#0D2E71",
  // padding: "20px",
  "&>h1":{
    // background:'#0D2E71',
    color:'#0D2E71'
  },
  "& > h1, & > img, & > p": {
    marginBottom: "20px", 
  },
  "& > img": {
    display: "block",
    width: "333px",
    maxWidth: "60%",
    borderRadius: "70px",
    height: "auto",
    padding: 30,
    margin: "0 auto", 
    fontSize: 20,
    color: "#0D2E71",
    [theme.breakpoints.down("sm")]: {
      width: "90%", 
    },
  },
  "& > p": {
    display: "flex",
    textAlign: "justify",
    overflow: "hidden",
    width: "100%",
    maxWidth:'100%',
    [theme.breakpoints.down("sm")]: {
      display: "block", // Change to block display
      padding: "10px",
    },
  },
  [theme.breakpoints.down("sm")]:{
    padding: theme.spacing(0, 3),
  }
}));
