import React from "react";
import { Col, Row } from "react-bootstrap";

function Techstack({ data }) {
  return (
    <div style={{ marginTop: "50px" }}>
      <h2 style={{fontSize:'48px',fontWeight:'700'}}>SKILLS</h2>
      <Row
        style={{
          justifyContent: "center",
          paddingBottom: "50px",
        }}
      >
        {data.map((skill, index) => (
          <Col key={index} xs={6} sm={6} md={3} lg={3} className="tech-icons">
            <div style={{ textAlign: "center" }}>
              <img src={skill.image.url} alt={skill.name} style={{ width: "80%", height: "auto" }} />
              <p>{skill.name}</p>
              <progress value={skill.percentage} max="100" style={{ width: "80%" }} />
            
              <p>{skill.percentage}%</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Techstack;
