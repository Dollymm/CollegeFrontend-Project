import React from "react";

import { Container } from "../Style";
import WhyChhosecomp from "./AboutItgcompo/WhyChhosecomp";
import AboutItgCard from "./AboutItgcompo/AboutItgCard";
import Activites from "./AboutItgcompo/Activites";


const AboutItg = () => {
  return (
    <>
    <Container> <WhyChhosecomp/></Container>

    <Container><AboutItgCard/></Container>
      <section>
      <Activites/>
      </section>
      
      </>
   
  );
};

export default AboutItg;
