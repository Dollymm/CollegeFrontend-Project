import { Box, styled } from "@mui/material";

export const Mainbox=styled(Box)(({theme})=>({
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
  background:"linear-gradient(to right ,#F7DFAF,#DEE7F1)",
  boxSizing:'border-box',
  marginRight:'auto',
  marginLeft:'auto',

  paddingLeft:'60px',
paddingRight:'60px',
  
  // padding: "20px",
  // "&>h1":{

  //   background:'#0D2E71',
  //   color:'white'
  // },
  "& > h1, & > img, & > p": {
    marginBottom: "20px", 
  },
  "& > img": {
    display: "block",
    width: "333px",
    maxWidth: "60%",
    borderRadius: "50%",
    height: "auto",
    padding: 30,
    margin: "0 auto", 
    fontSize: 20,
    color: "#0D2E71",
    [theme.breakpoints.down("sm")]: {
      width: "90%", 
      borderRadius:'30px'
    },
  },
  "& > p": {
    display: "flex",
    textAlign: "center",
    overflow: "hidden",
    width: "100%",
    maxWidth:'100%',
    fontSize: '12.0pt',
    lineHeight: '115%',
    marginRight:'auto',
    [theme.breakpoints.down("sm")]: {
      display: "block", // Change to block display
      
    },
  },

  
}))
  export const Childbox=styled(Box)(({theme})=>({
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    textAlign: "center",
    overflow: "hidden",
    color: "black",
  }))

  export const Container = styled(Box)(({ theme }) => ({
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    // verticalAlign:'baseline',
    // marginBottom: "5rem",
    "& > div": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      '& > img':{
          width:120,
          
      },
      "& > p": {
        color: "#0d1057",
        width: 187,
        display: "flex",
        textAlign: "center",
        fontWeight:600,
        height:80,
      },
    },
    gridTemplateColumns: "1fr 1fr 1fr 1fr  ",
    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr 1fr ",
      "&>div": {
        "& > img": {
          width: 100,
          height: "auto",
        },
        "& > p":{
          fontSize:14
        }
      },
    },
  }));