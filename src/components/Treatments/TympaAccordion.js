import Accordion from "react-bootstrap/Accordion";

import React from "react";
import "../../styles/accordion.css";

const ColonicAccordion = () => {
  return (
    <div className="accordion-container">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header style={{ color: "#036c7b" }}>
            Why Hearing Health Matters
          </Accordion.Header>
          <Accordion.Body>
            <div className="flex-wrapper-inner">
              <p className="treatment-text-2">
              Good ear and hearing health is important to people of
all ages and helps us to get the most out of life. When
our ability to hear deteriorates it requires more energy
for us to listen and participate in daily life, which can
lead to becoming socially isolated as people find it
harder to engage with loved ones.
                          </p>
                          <p className="treatment-text-2">
Whilst it is common for certain people to attend
routine health check-ups such as eye and teeth
procedures on a regular basis, our ears are often left
forgotten. This should not be the case. Hearing loss
has huge social implications on our quality of life.
Hearing loss, if left untreated, can lead to increased
risk of falls, social isolation, and is also known to
be the single largest modifiable risk factor for the
prevention of dementia. Not only that we are often
unaware of what we cannot hear, that’s why regular
ear and hearing health check-ups are essential.
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Why Tympa Treatment</Accordion.Header>
          <Accordion.Body>
            <div className="flex-wrapper-inner">
              <p className="treatment-text-2">
              The Tympa system is the world’s first all-in-one ear and
hearing healthcare assessment device. It brings together
three different diagnostic and treatment systems into
one hand-held portable system. The Tympa allows you
to perform; high-definition digital otoscopy (to capture
HD image and video), microsuction wax removal
(the industry gold standard), and carry out a hearing
screening, all in a single 30-minute appointment.
              </p>
              <p className="treatment-text-2">
              All patient images and video are stored in our secure
cloud, making it easy to keep track of your patients’ ear
and hearing health record. This can be quickly and easily
shared, via a professional PDF, with ENT surgeons,
audiologists or GPs, should the patient need onward
specialist treatment.
              </p>
              <p className="treatment-text-2">
              Our “Remote Review” feature allows access to remote
advice and guidance from Audiologists and ENT
specialist surgeons, if a second opinion is required.
              </p>
              <p className="treatment-text-2">
              Our “Remote Review” feature allows access to remote
advice and guidance from Audiologists and ENT
specialist surgeons, if a second opinion is required.
              </p>
              <p className="treatment-text-2">
              Our “Remote Review” feature allows access to remote
advice and guidance from Audiologists and ENT
specialist surgeons, if a second opinion is required.
              </p>
            </div>
          </Accordion.Body>
              </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>After Care</Accordion.Header>
          <Accordion.Body>
            <div className="flex-wrapper-inner">
              <p className="treatment-text-2">
              Do not put anything into the ear canal after treatment
              </p>
              <p className="treatment-text-2">
              After wax removal some people describe their ear canal as being
“airy” or “itchy” please do not be tempted to insert anything into the
ear – this can cause an infection. For itchiness – we advise the use
of Earol spray only
              </p>
              <p className="treatment-text-2">
              Keep the ear dry for up to 48 hours if possible to enable the canal to
settle after the wax removal.
              </p>
              <p className="treatment-text-2">
              If showering please use cotton wool or gauze covered in petroleum
Jelly to place into the ear – to keep water out. No water submersion.
              </p>
              <p className="treatment-text-2">
              Keep hearing aid domes clean
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
              <Accordion.Item eventKey="3">
          <Accordion.Header>Contraindications</Accordion.Header>
          <Accordion.Body>
            <p className="treatment-text-2">
            Microsuction will not be performed in these circumstances:
            </p>
            <div className="treatment-grid">
              <ul className="condition-list">
                <li className="condition-item">
                  Children under 18
                </li>
                <li className="condition-item">Outer Ear infection – Current or recurrent</li>
                <li className="condition-item">Middle Ear infection - Current or within 90 days</li>
                <li className="condition-item">
                Abrasions/ inflammation of ear canal – current or within 90 days
                </li>
                <li className="condition-item">Current active eczema or psoriasis (pain inflammation exudate or irritation)</li>
                <li className="condition-item">Ear Surgery – within 90 days or just to pinna.</li>
                <li className="condition-item">Sudden onset hearing loss – within 1/52</li>
                <li className="condition-item">
                Tinnitus causing suicidal ideations, psychological crisis or hallucinations
auditory or visual
                </li>
                <li className="condition-item">Any symptom NOT explained by ear wax – including but not limited to:
weakness/ facial weakness, speech or visual changes, numbness, headaches</li>
                <li className="condition-item">Inability to stay still</li>
                <li className="condition-item">
                Foreign object
                </li>
              </ul>
            </div>
            <p className="treatment-text">
              If currently have any of the following please telephone for a
              discussion, you must have assessment to view in the ear before decisions can be made in
full
            </p>
            <div className="treatment-grid">
              <ul className="condition-list">
                <li className="condition-item">Anticoagulant/ antiplatelet medication</li>
                <li className="condition-item">
                History of previous complications from wax removal procedures
                </li>
                <li className="condition-item">
                Ear pain – Current or within last 90 days.
                </li>
                <li className="condition-item">Perforations or recently healed perforations</li>
                <li className="condition-item">
                Grommets
                </li>
                              <li className="condition-item">History of vertigo</li>
                              <li className="condition-item">Tinnitus</li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ColonicAccordion;
