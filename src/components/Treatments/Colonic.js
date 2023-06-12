import React from "react";
import strengthLogo from "../../assets/strengthLogo.png";
import colonic from '../../assets/colonic-bed.JPG'
import machine from '../../assets/colonic-machine.jpeg'
import BookingButton from "../BookingButton";
import "../../styles/treatments.css";
import ColonicAccordion from "./ColonicAccordion";

const Colonic = () => {
  return (
    <div className="outer-treatments">
      <img className="main-logo-treatments" src={strengthLogo} />
      <section className="treatment-section">
        <h3 className="treatment-heading">Colonic Hydrotherapy</h3>
        <p className="treatment-text">
          Colonic hydrotherapy is a gentle, safe and effective method to cleanse
          and remove accumulated toxic waste material from the colon using
          warmed filtered water.
        </p>
        <p className="treatment-text">
          The therapy cleanses the whole large bowel from rectum to caecum,
          improving bowel function, improving wellbeing and natural immunity.
        </p>
      </section>
      <div className="phone-image-container-landscape">
          <img className="wide-treatment-image" src={colonic} />
        </div>
      <section className="treatment-section">
        <h3 className="treatment-heading">
          Why should I have Colonic Hydrotherapy?
        </h3>
        <div className="condition-grid">
          <ul className="condition-list-solo">
            <li className="condition-item">Hydrates the large colon</li>
            <li className="condition-item">
              Cleanses the colon of old hard waste material and harmful toxins
              caused by our lifestyle; eating fast and heavily processed foods;
              stress of life/work and pathogens from pollution
            </li>
            <li className="condition-item">
              Stimulation of the liver to encourage more bile production. Bile
              breaks down the substances we ingest, supporting the immune
              system, thus decreasing toxic overload
            </li>
            <li className="condition-item">
              The natural PH of the gut is restored
            </li>
            <li className="condition-item">
              A hydrated and cleaner colon provides a healthy environment for
              good bacteria to grow
            </li>
            <li className="condition-item">
              The peristaltic action of the bowel is stimulated and
              strengthened, promoting regular bowel movement
            </li>
            <li className="condition-item">
              Better absorption of nutrients from our nutritional intake
            </li>
            <li className="condition-item">
              Irritable Bowel symptoms can be eased, reduced or eliminated
            </li>
            <li className="condition-item">
              Treatments can result in increased energy, advanced mental
              clarity, clearer skin, improved circulation and enhanced immunity
            </li>
          </ul>
        </div>
        <div className="treatment-separator"></div>
        <h3 className="treatment-heading">How does the treatment work?</h3>
        <p className="treatment-text">
          In the clinic we use the natural closed gravity fed system with
          filtered water, a process from an ancient design. It is the safest,
          gentlest and most effective colonic, providing the greatest level of
          control working with the persons own bowel activity.
        </p>
        <p className="treatment-text">
          Colonic hydrotherapy gently fills the colon with warmed, filtered
          water through a small sterile rectal tube. As the water is released,
          it carries with it any material that has built up in the large bowel,
          such as trapped gas, toxins and matter.
        </p>

        <div className="treatment-separator"></div>
        <h3 className="treatment-heading">The Consultation</h3>
        <p className="treatment-text">
          During your consultation a detailed medical history will be taken,
          helping the practitioner determine whether treatment is an appropriate
          treatment for you to receive and whether it will help you achieve the
          results you are expecting.
        </p>
        <p className="treatment-text">
          During this consultation the potential risks and aftercare
          recommendations are discussed.
        </p>

        <div className="treatment-separator"></div>
        <h3 className="treatment-heading">Preparation for treatment</h3>
        <div className="condition-grid">
          <ul className="condition-list-solo">
            <li className="condition-item">
              Try to drink at least 2 to 3 litres of water per day for the week
              before your treatment
            </li>
            <li className="condition-item">
              Eat foods helpful to your body the day of the treatment
            </li>
            <li className="condition-item">
              No food should be consumed in the two hours before your treatment
            </li>
            <li className="condition-item">
              Try to avoid dairy products, red meats, shellfish, processed
              carbohydrates, carbonated beverages and alcohol for as long as you
              can leading up to your appointment
            </li>
          </ul>
        </div>
        <div className="treatment-separator"></div>
        <h3 className="treatment-heading">The Treatment</h3>
        <div className="condition-grid">
          <ul className="condition-list-solo">
            <li className="condition-item">
              Your practitioner will check through your consent forms and
              medical history.
            </li>
            <li className="condition-item">
              You will be made comfortable on a treatment couch whilst
              maintaining privacy and dignity.
            </li>
            <li className="condition-item">
              You will be provided with a gown (and disposable underwear if you
              require), and asked to remove clothing from the waist down. Socks
              can be kept on for warmth and comfort
            </li>
            <li className="condition-item">
              You will sit on the bed, then lay on your left side
            </li>
            <li className="condition-item">
              The practitioner will explain as they insert the rectal tube for
              the colonic hydrotherapy, as you will be asked to breathe
              slowly and deeply.
            </li>
            <li className="condition-item">
              Warm filtered water will then be introduced into the
              rectal tube which is at body temperature, to help loosen any
              impacted faeces and to encourage the body’s own natural
              peristaltic action.
            </li>
            <li className="condition-item">
              Water and waste will then be observed leaving via the outlet tube;
              this will go straight into a waste conduit
            </li>
            <li className="condition-item">
              After the treatment, the water will be stopped. The tube is removed and
              you will be encouraged to go to the toilet to eliminate any
              waste matter or water left in your colon
            </li>
          </ul>
        </div>
        <div className="phone-image-container">
          <img className="wide-treatment-image" src={machine} />
        </div>
        <ColonicAccordion />
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

export default Colonic;
