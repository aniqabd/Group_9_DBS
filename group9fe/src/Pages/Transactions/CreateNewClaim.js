import Form from "react-bootstrap/Form";
import { InputGroup, Row, Button } from "react-bootstrap";
import { useState } from "react";

// const [form, setForm] = useState({
//     first_name: '',
//     last_name: '',
//     mobile: '',
//     email: '',
//     address1: '',
//     address2: '',
//     city: '',
//     a_state: '',
//     pin: '',
//     menu: '',
//     order: ''
// });
function CreateNewClaim() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    date: "",
    claim_amount: "",
    purpose: "",
    previous_claim_boolean: "",
    previous_claim_id: "",
    charge_to_default_dept: "",
    alternative_dept_code: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitButton = (e) => {
    e.preventDefault();
    console.log(form);
    resetButton();
  };

  const resetButton = () => {
    setForm({
      first_name: "",
      last_name: "",
      date: "",
      claim_amount: "",
      purpose: "",
      previous_claim_boolean: "",
      previous_claim_id: "",
    });
  };

  return (
    <form className="container mt-3 mb-3">
      <h3>Create a new claim record</h3>
      <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="name"
            name="first_name"
            value={form.first_name}
            onChange={handleChange}
            className="form-control"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="name"
            name="last_name"
            value={form.last_name}
            onChange={handleChange}
            className="form-control"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="formBasicDate" className="col col-sm-6">
          <Form.Label>Date</Form.Label>
          <InputGroup>
            <Form.Control
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="formBasicAmount" className="col col-sm-6">
          <Form.Label>Claim Amount</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              aria-label="Amount (to the nearest dollar)"
              type="claim_amount"
              name="claim_amount"
              value={form.claim_amount}
              onChange={handleChange}
            />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="formBasicPurpose">
          <Form.Label>Purpose</Form.Label>
          <Form.Control
            className="form-control"
            type="text"
            name="purpose"
            value={form.purpose}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>
      {/* <Row className="mb-3">
        <Form.Group
          controlId="formBasicPreviousClaimBoolean"
          className="col col-sm-6"
        >
          <Form.Label>Do you have a previous claim?</Form.Label>
          <Form.Select
            defaultValue="Choose..."
            className="form-control"
            name="previous_claim_boolean"
            value={form.previous_claim_boolean}
            onChange={handleChange}
          >
            <option value="True">No</option>
            <option value="False">Yes</option>
          </Form.Select>
        </Form.Group>
        <Form.Group
          controlId="formBasicPreviousClaimId"
          className="col col-sm-6"
        >
          <Form.Label>If yes, input the ID of your previous claim</Form.Label>
          <Form.Control
            className="form-control"
            type="number"
            name="previous_claim_id"
            value={form.previous_claim_id}
            onChange={handleChange}
          />
        </Form.Group>
      </Row> */}
      <Row className="mb-3">
        <Form.Group
          controlId="formBasicChargeToDefaultDept"
          className="col col-sm-6"
        >
          <Form.Label>Charge to default department</Form.Label>
          <Form.Select
            defaultValue="False"
            className="form-control"
            name="charge_to_default_dept"
            value={form.charge_to_default_dept}
            onChange={handleChange}
          >
            <option value="0">No</option>
            <option value="1">Yes</option>
          </Form.Select>
        </Form.Group>
        <Form.Group
          controlId="formBasicAlternativeDept"
          className="col col-sm-6"
        >
          <Form.Label>Select Alternative Department</Form.Label>
          <Form.Select
            defaultValue="0"
            className="form-control"
            name="alternative_dept_code"
            value={form.alternative_dept_code}
            onChange={handleChange}
          >
            <option value="101">101 Sales</option>
            <option value="102">102 Marketing</option>
            <option value="103">103 Human Resources</option>
            <option value="104">104 Finance</option>
            <option value="105">105 Information Technology</option>
            <option value="106">106 Customer Service</option>
            <option value="107">107 Engineering</option>
            <option value="108">108 Research and Development</option>
            <option value="109">109 Procurement</option>
            <option value="110">110 Insurance</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
          <button
            type="submit"
            onClick={submitButton}
            className="me-4 btn btn-success btn-lg btn-block"
          >
            Submit
          </button>
          <button
            type="reset"
            onClick={resetButton}
            className="me-4 btn btn-danger btn-lg btn-block"
          >
            Cancel
          </button>
        </Form.Group>
      </Row>
    </form>
  );
}

export default CreateNewClaim;
