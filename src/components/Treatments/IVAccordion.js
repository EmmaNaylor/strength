import Accordion from "react-bootstrap/Accordion";

import React from "react";
import "../../styles/treatments.css";

const VitaminAccordion = () => {
  return (
    <div className="accordion-container">
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{color: '#036c7b'}}>Role of Glutathione</Accordion.Header>
        <Accordion.Body>
          <div className="flex-wrapper-inner">
            <p className="treatment-text-2">
            Glutathione has many important functions in the body, including:
            </p>

            <div className="condition-grid">
              <ul className="condition-list">
              <li className="condition-item">Improved protein, enzyme, and bilirubin levels in the blood</li>
              <li className="condition-item">Reduces oxidative stress by either stimulating or reducing the body’s immunological response</li>
              <li className="condition-item">Glutathione works to protect cell mitochondria by eliminating free radicals</li>
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
              <li className="condition-item">Making DNA, the building blocks of proteins and cells</li>
        <li className="condition-item">Supporting immune function</li>
        <li className="condition-item">Helping in the formation of sperm cells</li>
        <li className="condition-item">Breaking down some free radicals</li>
        <li className="condition-item">Benefitting the functioning of some enzymes</li>
        <li className="condition-item">Transportation of mercury out of the brain</li>
        <li className="condition-item">Helping the liver and gallbladder detoxify and emulsify fats</li>
              </ul>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
};

export default VitaminAccordion;
