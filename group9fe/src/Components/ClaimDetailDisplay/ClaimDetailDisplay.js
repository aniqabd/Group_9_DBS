import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ClaimDetailDisplay.css";
export const ClaimDetailDisplay = (props) => {
  return (
    <div>
      <h1 style={{ margin: "40px" }}>View Claim Record</h1>
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
            <div className="detail">{props.projectID} 124</div>
          </Col>

          <Col>
            <div className="detailTitle">Claim ID</div>
            <div className="detail">{props.claimID} 124</div>
          </Col>
          <Col>
            <div className="detailTitle">Currrency</div>
            <div className="detail">{props.currency} 124</div>
          </Col>
          <Col>
            <div className="detailTitle">Status of Claim</div>
            <div className="detail">{props.claimStatus} Approve</div>
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
            <div className="detailTitle">Project ID</div>
            <div className="detail">{props.projectID} 124</div>
          </Col>

          <Col>
            <div className="detailTitle">Claim ID</div>
            <div className="detail">{props.claimID} 124</div>
          </Col>
          <Col>
            <div className="detailTitle">Currrency</div>
            <div className="detail">{props.currency} 124</div>
          </Col>
          <Col>
            <div className="detailTitle">Status of Claim</div>
            <div className="detail">{props.claimStatus} Approve</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
