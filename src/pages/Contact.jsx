import React, { useState, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import strengthLogo from "../assets/strengthLogo.png";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import "../styles/contacts.css";

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const contactForm = useRef();
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    navigate("/home");
  };

  const contactJacky = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    setShow(true)

    emailjs
      .sendForm(
        "service_m88xoni",
        "template_df968j8",
        contactForm.current,
        "3_nlZ1YmfRa-FyB8d"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="outer-form">
      <Form ref={contactForm} onSubmit={contactJacky} validated>
        <img className="main-logo-treatments" src={strengthLogo} />
        <h3 className="contact-heading">Contact Jacky at A Strength In You</h3>
        <Form.Group className="mb-3" controlId="validationCustom01">
          <Form.Label>Your Name (required)</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter your name"
            name="from_name"
          />
          <Form.Control.Feedback type="invalid">
            Please provide your name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom02">
          <Form.Label>Your Email (required)</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter your email"
            name="email"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom03">
          <Form.Label>Your Number</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter your number"
            name="number"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid contact number
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom04">
          <Form.Label>Your Message</Form.Label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Please let us know why you're getting in contact with us today"
            name="message"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <p className="consent-heading">Contact Consent</p>
          <Form.Check
            required
            type="checkbox"
            label=" I agree for A Strength in You to use this information to contact me
            whilst processing my enquiry"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <p className="consent-heading">Privacy Policy</p>
          <Form.Check
            required
            type="checkbox"
            label="By submitting this form I agree to the Privacy Policy"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <button
          className="contact-button"
          type="submit"
          value="Send"
          // onClick={handleShow}
        >
          Submit
        </button>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thanks for your message, Jacky will be in touch as soon as possible.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
