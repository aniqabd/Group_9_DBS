import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ClaimDetailDisplay.css";
export const ClaimDetailDisplay = (props) => {
  return (
    <div>
   
      <Container
        style={{
          backgroundColor: "#FAFAFA",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "20px",
        }}
      >
        <h4 style={{ paddingBottom: "20px" }}>General Information</h4>
        <Row>
          <Col>
            <div className="detailTitle">Project ID</div>
            <div className="detail">{props.projectID}</div>
          </Col>

          <Col>
            <div className="detailTitle">Claim ID</div>
            <div className="detail">{props.claimID}</div>
          </Col>
          <Col>
            <div className="detailTitle">Currrency</div>
            <div className="detail">{props.currency}</div>
          </Col>
          <Col>
            <div className="detailTitle">Status of Claim</div>
            <div className="detail">{props.claimStatus}</div>
          </Col>
        </Row>
      </Container>

      <Container
        style={{
          backgroundColor: "#FAFAFA",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "20px",
        }}
      >
        <h4 style={{ paddingBottom: "20px" }}>Claim Details</h4>
        <Row>
        <Col>
            <div className="detailTitle">Employee Id</div>
            <div className="detail">{props.employeeId}</div>
          </Col>
          <Col>
            <div className="detailTitle">Amount</div>
            <div className="detail">{props.amount}</div>
          </Col>

          <Col>
            <div className="detailTitle">Purpose</div>
            <div className="detail">{props.purpose}</div>
          </Col>
        
        </Row>
      </Container>
    </div>
  );
};
