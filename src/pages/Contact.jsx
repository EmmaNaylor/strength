import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import strengthLogo from "../assets/strengthLogo.png";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [number, setNumber] = useState();

  const contactJacky = (e) => {
    e.preventDefault();
    console.log("emailingJacky");
    console.log(name, email, number, message);
  };
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Form>
        <img className="main-logo-treatments" src={strengthLogo} />
        <h3 className="treatment-heading">
          Contact Jacky at A Strength In You
        </h3>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name (required)</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Email (required)</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicNumber"
          onChange={(e) => setNumber(e.target.value)}
        >
          <Form.Label>Your Number</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicMessage"
          onChange={(e) => setMessage(e.target.value)}
        >
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            type="text-area"
            placeholder="Please let us know why you're getting in contact with us today"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <p>
            I agree for A Strength in You to use this information to contact us
            whilst processing the enquiry
          </p>
          <Form.Check required type="checkbox" label="Contact Consent" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <p>By submitting this form I agree to the Privacy Policy</p>
          <Form.Check required type="checkbox" label="Privacy Policy" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={contactJacky}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
