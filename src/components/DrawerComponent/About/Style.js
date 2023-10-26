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
  textAlign: "center",
  overflow: "hidden",
  color: "#0D2E71",
  "&>p":{
    display:'flex',
    textAlign:"center",
    overflow:"hidden",
    width:500,
  },"& > button":{
    color:'#7E1717',
        fontSize:'2vw',
        fontWeight:600,
       border:'none',
       background:'none',

  }
}));

export const Img = styled("img")(({ theme }) => ({
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
  flexDirection: "column", 
  width: "100%",
  marginTop: 20,
  textAlign: "center",
  overflow: "hidden",
  color: "#0D2E71",
  // padding: "20px",
  "&>h1":{
    background:'#0D2E71',
    color:'white'
  },
  "& > h1, & > img, & > p": {
    marginBottom: "20px", 
  },
  "& > img": {
    display: "block",
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
    textAlign: "center",
    overflow: "hidden",
    width: "100%",
    maxWidth:'100%',
    [theme.breakpoints.down("sm")]: {
      display: "block", // Change to block display
      padding: "10px",
    },
  },
}));
export const Card2=styled("Box")(({theme})=>({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign:'center',
  flexDirection: "column", 
  width: "100%",
  marginTop: 20,
  textAlign: "center",
  overflow: "hidden",
  color: "#0D2E71",
  // padding: "20px",
  "&>h1":{
    background:'#0D2E71',
    color:'white'
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
    textAlign: "center",
    overflow: "hidden",
    width: "100%",
    maxWidth:'100%',
    [theme.breakpoints.down("sm")]: {
      display: "block", // Change to block display
      padding: "10px",
    },
  },
}));
