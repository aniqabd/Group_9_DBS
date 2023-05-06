import React from "react";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";

import { ClaimDetailDisplay } from "../../Components/ClaimDetailDisplay/ClaimDetailDisplay";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
const ClaimDetail = () => {
  const location = useLocation();
  const { employeeId, claimId, currencyId, projectId, status } = location.state;


  

  return (
    <div>
      <Container>
        <h1 style={{ margin: "40px" }}>View Claim Record</h1>
        <Row>
          <div>
            <div>
              <Link
                to={{
                  pathname: "/create-new-claim-record",
                }}
              >
                state:
                {{
                  claimID: claimId,
                  employeeId: employeeId,
                }}
              </Link>
              <Button variant="outline-primary">Edit</Button>{" "}
            </div>
            <Button variant="outline-danger">Delete</Button>{" "}
          </div>
        </Row>
      </Container>

      <ClaimDetailDisplay
        amount="hello"
        projectID={projectId}
        claimID={claimId}
        currency={currencyId}
        claimStatus={status}
        purpose="hello"
        employeeId={employeeId}
      />
    </div>
  );
};

export default ClaimDetail;
