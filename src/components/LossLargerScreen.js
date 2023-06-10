import React from "react";
import "../styles/conditions.css";

const LossLargerScreen = () => {
  return (
    <div className="condition-grid">
          <ul className="condition-list-dual">
          <li className="condition-item">Moving closer to those talking</li>
      <li className="condition-item">Loss of hearing</li>
        <li className="condition-item">Earache</li>
        <li className="condition-item">Discomfort</li>
      </ul>
          <ul className="condition-list-dual">
          <li className="condition-item">Asking people to
repeat themselves</li>
      <li className="condition-item">Ringing</li>
        <li className="condition-item">Itching</li>
              <li className="condition-item">Loss of balance</li>
      </ul>
          <ul className="condition-list-dual">
          <li className="condition-item">Concentrating harder
                  to listen</li>
                  <li className="condition-item">Ears feeling full</li>
              <li className="condition-item">Dizziness</li>
              <li className="condition-item">Discharge</li>
      </ul>
    </div>
  );
};

export default LossLargerScreen;
