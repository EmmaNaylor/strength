import React from "react";
import "../styles/conditions.css";

const Loss = () => {
  return (
    <div className="condition-grid">
      <ul className="condition-list-dual">
      <li className="condition-item">Trying to move closer to those talking</li>
        <li className="condition-item">Loss of hearing</li>
        <li className="condition-item">Earache</li>
        <li className="condition-item">Discomfort</li>
        <li className="condition-item">Discharge</li>
        <li className="condition-item">Concentrating harder to listen</li>
      </ul>
      <ul className="condition-list-dual">
      <li className="condition-item">Asking people to
repeat themselves</li>
      <li className="condition-item">Ears feeling full</li>
        <li className="condition-item">Ringing</li>
        <li className="condition-item">Itching</li>
        <li className="condition-item">Dizziness</li>
        <li className="condition-item">Loss of balance</li>
      </ul>
    </div>
  );
};

export default Loss;
