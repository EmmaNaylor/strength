import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";


const BookingButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/book");
  };
  return (
    <div className="button-container">
      <Button variant="outline-success" style={{backgroundColor: "#0CB5CF", color: "#ffffff"}} className="book" onClick={handleClick}>
        Book
      </Button>
    </div>
  );
};

export default BookingButton;
