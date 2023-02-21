import React from "react";
import strengthLogo from "../../assets/strengthLogo.png";
import BookingButton from "../BookingButton";
import "../../styles/treatments.css";
import VitaminAccordion from "./VitaminAccordion";

const IVTherapy = () => {
  return (
    <div className="outer-treatments">
      <img className="main-logo-treatments" src={strengthLogo} />
      <section className="treatment-section">
        <h3 className="treatment-heading">IV Nutrient Therapy</h3>
        <p className="treatment-text">
          IV nutrient therapy is a safe and effective way of administering
          essential vitamins, minerals and amino acids to your body in a way
          which helps your body to improve absorption and the uptake of the
          nutrients. IV therapy is scientifically proven to deliver an improved
          sense of wellbeing and support to the body.
        </p>
      </section>
      <section className="treatment-section">
        <h3 className="treatment-heading">Benefits</h3>
        <p className="treatment-text">
          Using intravenous nutrition therapy the nutrients are delivered
          directly to the bloodstream by a cannula to assist with the body’s own
          processes of healing itself.
        </p>
        {/* <div className="treatment-separator"></div> */}
        <p className="treatment-text-2">
          These IV infusions have been created by Dr Vincent Wong, Global
          Aesthetic leader, for assisting with :
        </p>
        <div className="condition-grid">
          <ul className="condition-list">
            <li className="condition-item">Anti-Aging</li>
            <li className="condition-item">Skin lightening and brightening</li>
            <li className="condition-item">Wellness</li>
            <li className="condition-item">Sports performance / Fat burner</li>
            <li className="condition-item">Total Hydration</li>
          </ul>
        </div>
        <div className="treatment-separator"></div>
        <h3 className="treatment-heading">Vitamin B12 Injections</h3>
        <p className="treatment-text">
          Vitamin B12 is one of the B vitamins essential to health. It helps to
          make DNA and keep the body’s blood cells & nervous system healthy.
        </p>
        <p className="treatment-text">
          Vitamin B12 is found only in animal foods and is not available from
          plant foods, unless artificially added. For this reason, vegans and
          vegetarians can be at risk of B12 deficiency.
        </p>
        <p className="treatment-text">
          People who eat animal products usually believe they are getting enough
          B12 from their intake. They may be consuming enough B12 in food and
          supplements, but they may not necessarily be absorbing it. This can be
          for many reasons, and many of the ways we cook foods can also kill the
          beneficial properties.
        </p>
        <p className="treatment-text">
          B12 can be taken orally as supplements, but there may still be
          absorption problems. During this treatment Vitamin B12 is injected
          intramuscularly, this bypasses the digestive process and directly
          introduces it into the bloodstream for rapid use by the body.
        </p>
        <VitaminAccordion />
        <div className="treatment-separator"></div>
        <h3 className="treatment-heading">Glutathione Injections</h3>
        <p className="treatment-text">
          Glutathione is an antioxidant produced in cells. It is mainly
          comprised of the three amino acids: (glutamine, glycine, and
          cysteine)in addition to it being produced naturally by the body, and
          ingested in foods.
        </p>
        <p className="treatment-text">
          We must be aware, the cooking and processing of foods can reduce their
          health benefits massively, hence the need for supplements.
        </p>
        <p className="treatment-text">
          In addition to being produced naturally by the body, and ingested in
          foods. As we are more than aware the cooking and processing of foods
          can reduce their health benefits massively.
        </p>
        <p className="treatment-text">
          Glutathione can be given intravenously, topically, or as an inhalant.
          It is also available as an oral supplement in capsule and liquid form.
          However intravenous delivery of the antioxidant is superior to any
          other process.
        </p>
        <p className="treatment-text">
          Glutathione is a powerful antioxidant that is made in the body’s
          cells. Levels decrease as a result of aging, stress, lack of sleep and
          toxin exposure.
        </p>
        <div className="flex-wrapper">
          <div className="flex-wrapper-inner">
            <h3 className="treatment-heading">Role of Glutathione</h3>
            <p className="treatment-text-2">
              Glutathione has many important functions in the body, including:
            </p>

            <div className="condition-grid">
              <ul className="condition-list">
                <li className="condition-item">
                  Making DNA, the building blocks of proteins and cells
                </li>
                <li className="condition-item">Supporting immune function</li>
                <li className="condition-item">
                  Helping in the formation of sperm cells
                </li>
                <li className="condition-item">
                  Breaking down some free radicals
                </li>
                <li className="condition-item">
                  Benefitting the functioning of some enzymes
                </li>
                <li className="condition-item">
                  Transportation of mercury out of the brain
                </li>
                <li className="condition-item">
                  Helping the liver and gallbladder detoxify and emulsify fats.s
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-wrapper-inner">
            <h3 className="treatment-heading">Benefits</h3>
            <p className="treatment-text-2">The main benefits include:</p>

            <div className="condition-grid">
              <ul className="condition-list">
                <li className="condition-item">
                  Improved protein, enzyme, and bilirubin levels in the blood.
                </li>
                <li className="condition-item">
                  Reduces oxidative stress by either stimulating or reducing the
                  body’s immunological response.
                </li>
                <li className="condition-item">
                  Glutathione works to protect cell mitochondria by eliminating
                  free radicals.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <BookingButton />
    </div>
  );
};

export default IVTherapy;
