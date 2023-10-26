import React from "react";
import { Container } from "../Style";
import { Form } from "./AboutItgcompo/Form";

const PlanToVisit = () => {
  return (
    <div>
    <Container>
    <h1>Plan A Visit</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.540338305624!2d79.31609017528838!3d30.392407902001146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909d446cba5503d%3A0x3f651e48498fc8cd!2sInstitute%20of%20Technology%20Gopeshwar!5e0!3m2!1sen!2sin!4v1697297350076!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{border:"0"}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      
      <div>
        <Form/>
      </div>
      </Container>
    </div>
  );
};

export default PlanToVisit;
