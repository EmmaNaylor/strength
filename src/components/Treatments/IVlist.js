import React from "react";
import "../../styles/conditions.css";

const IVList = () => {
  return (
    <div className="condition-grid">
      <ul className="condition-list-dual">
        <li className="condition-item">Improved protein, enzyme, and bilirubin levels in the blood</li>
        <li className="condition-item">Reduces oxidative stress by either stimulating or reducing the body’s immunological response</li>
        <li className="condition-item">Glutathione works to protect cell mitochondria by eliminating free radicals</li>
      </ul>
      <ul className="condition-list-dual">
        <li className="condition-item">Making DNA, the building blocks of proteins and cells</li>
        <li className="condition-item">Supporting immune function</li>
        <li className="condition-item">Helping in the formation of sperm cells</li>
        <li className="condition-item">Breaking down some free radicals</li>
        <li className="condition-item">Benefitting the functioning of some enzymes</li>
        <li className="condition-item">Transportation of mercury out of the brain</li>
        <li className="condition-item">Helping the liver and gallbladder detoxify and emulsify fats</li>
      </ul>
    </div>
  );
};

export default IVList;
