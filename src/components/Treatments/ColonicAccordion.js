import Accordion from "react-bootstrap/Accordion";

import React from "react";
import "../../styles/accordion.css";

const ColonicAccordion = () => {
  return (
    <div className="accordion-container">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header style={{ color: "#036c7b" }}>
            Treatment Advicey
          </Accordion.Header>
          <Accordion.Body>
            <div className="flex-wrapper-inner">
              <p className="treatment-text-2">
                Please remember this therapy, from A Strength In You is
                performed by a medical practitioner, respect and dignity will be
                maintained at all times. The tube may leak or could make noises;
                this is all part of the procedure. Embarrassment should not be
                felt at any point.
              </p>
              <p className="treatment-text-2">
                Also, PLEASE REMEMBER… your practitioner has been where you are,
                on many occasions, for many other practitioners and for many
                treatments!
              </p>
              <p className="treatment-text-2">
                The number of colonic hydrotherapy treatments a person requires
                will depend upon the goals, intestinal health, dietary habits
                and lifestyle choices the person makes.
              </p>
              <p className="treatment-text-2">
                We generally recommend at least doing a series of 3 treatments
                in 10 days to achieve optimal benefits for the body.
              </p>
              <p className="treatment-text-2">
                Persons, who have had the three, may then require maintenance
                colonics from once a month to once every three months to aid
                their health regime.
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Treatment Aftercare</Accordion.Header>
          <Accordion.Body>
            <div className="flex-wrapper-inner">
              <p className="treatment-text-2">
                The majority of persons feel good after a colonic hydrotherapy
                treatment and do not experience any unwanted side-effects.
              </p>
              <p className="treatment-text-2">
                However here are a few simple measures that will ensure you
                continue to benefit from the treatment and assist in relieving
                any discomfort you may feel.
              </p>
              <p className="treatment-text-2">
                A small amount of water is absorbed during the treatment and you
                may notice an increased need to urinate. This is normal, and
                will subside quickly.
              </p>
              <p className="treatment-text-2">
                Drink plenty of fluids. If digestion is weak, do not drink
                fluids with meals or for 30 minutes before or 1 hour after
                meals. It is best to avoid excess alcohol for about 24 hours
                post colonic.
              </p>
              <p className="treatment-text-2">
                You may experience some flatulence and bowel sounds – this is
                due to the bowel bacteria multiplying back up to strength for up
                to 48 hours after the treatment. Probiotic supplements can be
                useful, and a helpful intake of fruits and vegetables would be
                of benefit
              </p>
              <p className="treatment-text-2">
                Don’t expect a bowel movement the next day: depending upon your
                condition, it may take several days before normal bowel
                movements resume.
              </p>
              <p className="treatment-text-2">
                Avoid rigorous exercise for 24 hours after treatment.
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Contraindications</Accordion.Header>
          <Accordion.Body>
            <p className="treatment-text-2">
              PLEASE DO NOT BOOK if you have any of the following conditions or
              illnesses:
            </p>
            <div className="treatment-grid">
              <ul className="condition-list">
                <li className="condition-item">
                  Inflammatory bowel disease: (Crohns, Ulcerative colitis and
                  Diverticulitis)
                </li>
                <li className="condition-item">Heart/Kidney disease</li>
                <li className="condition-item">Fissures/Fistulase</li>
                <li className="condition-item">
                  Cancer of the rectum/bowel/ liver or Kidney
                </li>
                <li className="condition-item">Pregnancy</li>
                <li className="condition-item">Liver cirrhosis</li>
                <li className="condition-item">Abdominal hernia</li>
                <li className="condition-item">
                  Rectal Bleeding or severe bleeding haemorrhoids
                </li>
                <li className="condition-item">Recent colorectal surgery</li>
                <li className="condition-item">Bowel perforation</li>
                <li className="condition-item">
                  Long term use of oral steroids
                </li>
              </ul>
            </div>
            <p className="treatment-text">
              Minimum age for treatment is 16 years old. There is no maximum age
              as long as you have none of the contra-indications listed.
            </p>
            <p className="treatment-text">
              Any surgeries of the abdomen, colon, rectum within the last 6
              months MUST BE DISCUSSED FULLY and may need a Consultants consent
              before proceeding with the treatment.
            </p>
            <p className="treatment-text">
              If currently have any of the following please telephone for a
              discussion as again, may need General Practitioner/Consultant
              consent to treatment:
            </p>
            <div className="treatment-grid">
              <ul className="condition-list">
                <li className="condition-item">Severe cardiac disease</li>
                <li className="condition-item">
                  Uncontrolled hypo/ hyper-tension
                </li>
                <li className="condition-item">
                  Aneurysm (anywhere must be discussed)
                </li>
                <li className="condition-item">GI haemorrhage/ perforation</li>
                <li className="condition-item">
                  Liver disease, HIV/Aids, Hepatitis
                </li>
                <li className="condition-item">Active fistulas / fissures</li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ColonicAccordion;
