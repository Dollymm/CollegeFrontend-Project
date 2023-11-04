import { styled, Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: 20,
  boxSizing: "border-box",
  padding: theme.spacing(0, 10),
  overflowX: "hidden",
  color: "#0D2E71",
  [theme.breakpoints.down("sm")]: {
    padding: 0,
    padding: theme.spacing(0, 3),
  },
  "& > div": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 3,
    flexWrap: "wrap",
    "& > button": {
      width: 80,
      height: 40,
      padding: 0,
      margin: 2,
      borderRadius: "10px",
      background: 'linear-gradient(250deg, #EC3758 0%, #6B0000 56%)',
      color: 'white',
      [theme.breakpoints.down("sm")]: {
        width: 70,
        height: 40,
        fontSize: '0.75rem',
      },
      "&.selected": {
        background: 'linear-gradient(180deg, #005856 0%, #54595F 100%)',
        color: 'white',
      },
    },
  },
  "& > p": {
    display: "flex",
    textAlign: "justify",
    justifyContent: 'center',
    overflow: "hidden",
    width: "100%",
    maxWidth: '100%',
    [theme.breakpoints.down("sm")]: {
      display: "block",
      
    },
  },
}));

export const LabBox=styled('Box')(({ theme }) => ({

  display:'flex',
  alignItems:'flex-start',
  justifyContent:'flex-start',

  "& > div": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection:'column',
    columnGap: 3,
    flexWrap: "wrap",
    marginTop:15,
   
  "&>button":{
    width: 200,
      height: 40,
      padding: 0,
      margin: 2,
      boxSizing:'boderBox',
      // marginTop:7,
      borderRadius: "10px",
      background: 'linear-gradient(180deg, #005856 0%, #54595F 100%)',
      color: 'white',
      textAlign:'flex-start',
      [theme.breakpoints.down("sm")]: {
        width:'100%',
        // paddingLeft:'120px',
        // textAlign:'felx-start',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height: 40,
        fontSize: '0.75rem',
        display:'block'
      },
      
    }
  },
  [theme.breakpoints.down('sm')]:{
    flexDirection:'column'
  },
}))

export const Button=styled('button')(({theme})=>({
  padding: '8px 16px',
  backgroundColor: '#3498db',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'inline-block',
}))

export const DepartmentBox=styled('Box')(({ theme }) => ({
  color:'black',
  "&>div":{

 

  "&>h3":{
    color:'#0D2E71',

  },
  "&>p":{
    color: "black",
    // display: "flex",
    // textAlign: "center",
    // justifyContent: "center",
    // textAlign:'justify',
  }
}
}))