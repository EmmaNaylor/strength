import Accordion from "react-bootstrap/Accordion";

import React from "react";
import "../../styles/treatments.css";

const VitaminAccordion = () => {
  return (
    <div className="accordion-container">
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{color: '#036c7b'}}>Symptoms of Deficiency</Accordion.Header>
        <Accordion.Body>
          <div className="flex-wrapper-inner">
            <p className="treatment-text-2">
              Vitamin B12 deficiency can cause many symptoms, including:
            </p>

            <div className="condition-grid">
              <ul className="condition-list">
                <li className="condition-item">Lack of energy</li>
                <li className="condition-item">Weakness</li>
                <li className="condition-item">Shortness of Breath</li>
                <li className="condition-item">Poor sleep</li>
                <li className="condition-item">Constipation</li>
                <li className="condition-item">Loss of appetite</li>
                <li className="condition-item">Weight loss</li>
                <li className="condition-item">Anaemia</li>
                <li className="condition-item">Poor memory</li>
                <li className="condition-item">
                  Soreness of the mouth or tongue
                </li>
              </ul>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Benefits</Accordion.Header>
        <Accordion.Body>
          <div className="flex-wrapper-inner">
            <p className="treatment-text-2">The main benefits include:</p>

            <div className="condition-grid">
              <ul className="condition-list">
                <li className="condition-item">Increased energy</li>
                <li className="condition-item">Better sleep</li>
                <li className="condition-item">Improved mood</li>
                <li className="condition-item">Faster metabolism</li>
                <li className="condition-item">Better cognitive focus</li>
                <li className="condition-item">Sharper mental clarity</li>
                <li className="condition-item">Less fatigue</li>
                <li className="condition-item">Prevents Anaemia</li>
                <li className="condition-item">Healthy skin, hair & nails</li>
              </ul>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Contraindications</Accordion.Header>
          <Accordion.Body>
          <p className="treatment-text-2">
            You must not have this treatment if you have:
          </p>
          <div className="condition-grid">
            <ul className="condition-list">
              <li className="condition-item">High blood pressure</li>
              <li className="condition-item">Congestive heart failure</li>
              <li className="condition-item">Liver disease</li>
              <li className="condition-item">
                Kidney disease (or currently on dialysis)
              </li>
              <li className="condition-item">
                A previous severe allergic reaction to hydroxocobalamin, Vitamin
                B12, or cyanocobalamin (Nascobal, Cobolin, Cyomin, and others).
              </li>
            </ul>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
};

export default VitaminAccordion;
