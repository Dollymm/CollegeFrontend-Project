import React from 'react'
import { CseImges } from '../../../../constant/DepartmentImges';
import Carousel from 'react-multi-carousel'
import { Box, Typography, styled } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};
const Image = styled(Box)(({theme})=> ({
    marginTop:'30px',
    width: '50%',
    height: 130,
    objectFit: 'cover',
    transition: 'transform 0.8s ease-in-out',
    background: 'black',
    // argin:0,
    // padding:0,m
    [theme.breakpoints.down('sm')]:{
        height:230,
        width:'100%'

    },
    [theme.breakpoints.down('md')]:{
        height:180,
    }
   
}))

const CseSwipeImages = () => {
    
  return (
    <Carousel   swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={5000}
    keyBoardControl={true}
    customTransition="ease .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    spacing={false}
    
    >
       
       
        {

            CseImges.map(data=>(
                <Image 
                style={{
                    background: `url(${data.imgPath}) no-repeat center center`,
                    backgroundSize: 'cover',
                  
                  }} alt='banner' >
                   

                  </Image>
            ))
        }
        

    </Carousel>
  )
}

export default CseSwipeImages