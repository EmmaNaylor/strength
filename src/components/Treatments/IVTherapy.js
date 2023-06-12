import React from "react";
import strengthLogo from "../../assets/strengthLogo.png";
import BookingButton from "../BookingButton";
import "../../styles/treatments.css";
import VitaminAccordion from "./VitaminAccordion";
import IVAccordion from "./IVAccordion";
import iv from '../../assets/vitamin-drip-crop.jpg'

const IVTherapy = () => {
  return (
    <div className="outer-treatments">
      <img className="main-logo-treatments" src={strengthLogo} />
      <section className="treatment-section">
        <h3 className="treatment-heading">IV Nutrient Therapy</h3>
        <p className="treatment-text">
          IV nutrient therapy is a safe and effective way of administering
          essential vitamins, minerals and amino acids to your body, in a way
          which helps your body to improve absorption and the uptake of the
          nutrients. Being Intravenous (IV), a cannular is inserted directly into a vein. This enables the nutrients in
the drip to reach the bodies tissues faster than by absorption of a supplement or food ingested
into the stomach.
        </p>
        <div className="phone-image-container-landscape">
          <img className="wide-treatment-image" src={iv} />
        </div>
      </section>
      <div className="treatment-separator"></div>
      <section className="treatment-section">
        <h3 className="treatment-heading">Benefits</h3>
        <p className="treatment-text">
          These IV infusions have been created by Dr Vincent Wong, Global
          Aesthetic leader, for assisting with:
        </p>
        <div className="condition-grid-solo">
          <ul className="condition-list-solo">
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
          cysteine) in addition to it being produced naturally by the body, and
          ingested in foods.
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
        <IVAccordion />
      </section>
      <div className="treatment-separator"></div>
        <h3 className="treatment-heading">
          How do I book my session with you?
        </h3>
        <p className="treatment-text">
          Use our Contact form to book a session with me.
      </p>
      <BookingButton />
        <div className="treatment-separator"></div>
    </div>
  );
};

export default IVTherapy;
