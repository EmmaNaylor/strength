import React from "react";
import { useNavigate } from "react-router-dom";
import strengthLogo from "../../assets/strengthLogo.png";
import massage from "../../assets/massage.jpg";
import massage2 from "../../assets/massage-2.jpg";
import Button from "react-bootstrap/Button";
import "../../styles/treatments.css";

const Massage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div className="outer-treatments">
      <img className="main-logo-treatments" src={strengthLogo} />
      <section className="treatment-section">
        <h3 className="treatment-heading">Massage</h3>
        <p className="treatment-text">
          Massage involves working the soft tissue of the body, to ease
          day-to-day stresses and muscular tension, and promote relaxation. It
          helps to increase delivery of blood and oxygen to the treated areas
          and can also be used in support of other therapies to assist in the
          rehabilitation of muscular injuries.
        </p>
      </section>
      <section className="treatment-section">
        <div className="small-image-container">
          <img className="treatment-image" src={massage} />
        </div>
        <div className="small-image-container">
          <img className="treatment-image" src={massage2} />
        </div>
        <h3 className="treatment-heading">
          What to expect when having a massage
        </h3>
        <p className="treatment-text">
          Before treatment, your therapist will provide a full consultation,
          asking you various questions about your health and lifestyle, to
          ensure treatment is right for you. Most full body massage treatments
          take approximately an hour to two, depending on what needs to be
          worked on, though a “back, neck and shoulder” massage generally will
          not take more than an hour.
        </p>
        <p className="treatment-text">
          Treatments usually take place on a massage table. The treatment
          involves the therapist directly massaging your skin, a nourishing oil
          or cream-based product will generally be used to provide a
          free-flowing massage, and towels carefully placed to ensure your
          modesty and to keep you warm and comfortable throughout the treatment.
        </p>
        <p className="treatment-text">
          Essential oils can be used if required.
        </p>
      </section>
      <section className="treatment-section">
        <h3 className="treatment-heading">What are the benefits of Massage?</h3>
        <p className="treatment-text">
          Massage is used by people for a variety of reasons. Some use it to
          simply relax and unwind, while others have regular massages to help
          them manage or cope with specific physical, mental or emotional
          problems. Many athletes have a massage before and after training and
          competing, to stay in optimum condition and aid recovery.
        </p>
      </section>
      <section className="treatment-section">
        <h3 className="treatment-heading">
          Is there any scientific or medical support for the benefits of
          massage?
        </h3>
        <p className="treatment-text">
          There is a growing body of evidence to suggest that massage can be
          effective in helping to treat certain chronic conditions, such as
          fibromyalgia and low back pain. This{" "}
          <a
            className="proper-link"
            href="https://www.nice.org.uk/guidance/conditions-and-diseases/musculoskeletal-conditions/low-back-pain"
            target="_blank"
          >
            guideline
          </a>{" "}
          produced in November 2016 by the National Institute for Health and
          Clinical Excellence (NICE), manual therapies (including massage) are
          recommended for the early management of persistent, non-specific low
          back pain.
        </p>
      </section>
      <div className="button-container">
        <Button
          variant="outline-success"
          className="book"
          onClick={handleClick}
        >
          Book
        </Button>
      </div>
    </div>
  );
};

export default Massage;
