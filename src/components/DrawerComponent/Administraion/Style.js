import { Box, Card,styled } from "@mui/material";

export const Mainbox=styled(Box)(({theme})=>({
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
  "&>div":{
width:'100%',
background:"linear-gradient(to right ,#F7DFAF,#DEE7F1)",
 
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
    maxWidth: "50%",
    borderRadius: "70px",
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
    display: "flex",
    textAlign: "justify",
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
          width:100,
          borderRadius:'1px'
      },
      "& > p": {
        color: "#0d1057",
        width: 187,
        boxSizing:'border-box',
        display: "flex",
        paddingLeft:'31px',
        alignItems:'center',
        justifyContent:'center',
        textAlign: "center",
        fontWeight:100,
        height:80,
      },
    },
    gridTemplateColumns: "1fr 1fr 1fr   ",
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

  export const WorkingCard=styled(Card)(({theme})=>({
    marginTop:30,
    boxSizing:'border-box',

  padding: theme.spacing(0, 10),
  color:'black',
    "&> div":{
      color:'black',
      borderBottom: '1px solid #d4d4d4',

    },
    [theme.breakpoints.down("sm")]:{
      padding: theme.spacing(0, 3),
    }
  }))