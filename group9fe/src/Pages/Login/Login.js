import React, { useState, useReducer } from "react";
import { login } from "../../Apis/Api";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./Login.css";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

export const Login = () => {
  // const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };
  console.log(formData);

  function handleSubmit() {
    // setSubmitting(true);
    login(formData)
      .then((response) => {
        if (response.data.token) {
          const token = response.data.access_token;
          localStorage.setItem("token", token);
          window.location.reload(false);

          console.log(response.data);
          console.log(formData);
        } else {
          alert("Incorrect authentication");
        }
      })
      .catch((error) => {
        // setSubmitting(false);
        alert("Incorrect authentication");
        return error;
      });
  }

  return (
    <div className="login-bg">
      <div className="login-container" id="pagelayout">
        <h2>Welcome to Group9</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>EmployeeID</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="EmployeeId"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="Password"
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>

        
      </div>
    </div>
  );
};
