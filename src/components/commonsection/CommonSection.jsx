//import React from "react";
//import { Container } from "reactstrap";
import "./CommonSection.css";

const CommonSection = (props) => {
  return (
    <section className="common__section">
    <h2 className="text-white">{props.title}</h2>
      {/* <Container>
        
      </Container> */}
    </section>
  );
};

export default CommonSection;