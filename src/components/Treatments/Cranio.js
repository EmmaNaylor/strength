import React from "react";
import { useNavigate } from "react-router-dom";
import strengthLogo from "../../assets/strengthLogo.png";
import cranio from "../../assets/jacky-cranio-zoom.jpeg";
import cranio3 from "../../assets/jacky-cranio.jpeg";
import BookingButton from "../BookingButton";
import "../../styles/treatments.css";

const Cranio = () => {
  return (
    <div className="outer-treatments">
      <img className="main-logo-treatments" src={strengthLogo} />
      <section className="treatment-section">
        <h3 className="treatment-heading">CranioSacral Therapy</h3>
        <p className="treatment-text">
          I am very proud to be one of few practitioners in the region able to
          offer CranioSacral therapy to my clients. CranioSacral Therapy is a
          type of body work that can create dynamic improvements in your life.
          It helps to relieve pain and dysfunction improving whole-body health
          and performance. Answers to my most frequently asked questions about
          this dynamic and exciting treatment are below. Contact me directly if
          you have any other questions.
        </p>
      </section>    
      <div className="phone-image-container-landscape">
          <img className="wide-treatment-image" src={cranio3} />
      </div>
      <div className="treatment-separator"></div>  
      <section className="treatment-section">
        <h3 className="treatment-heading">What is the CranioSacral System?</h3>
        <p className="treatment-text">
          The CranioSacral system consists of the bones, soft tissues, and fluid
          that surround the brain and spinal cord.
        </p>
        <div className="treatment-separator"></div>
        <h3 className="treatment-heading">
          How can CranioSacral Therapy help me?
        </h3>
        <p className="treatment-text">
          Our tissues tighten and change with everyday stresses and strains.
          Other experiences from physical injuries to emotional trauma can
          create or add restrictions, these can radiate out from – or into the
          CranioSacral system and can compromise the central nervous system and
          the function of other areas of your body. This therapy is a light
          touch that can release tensions to allow the entire body to relax and
          self-correct by freeing the system to perform at its best.
        </p>
        <div className="treatment-separator"></div>
        <h3 className="treatment-heading">
          What should I expect during my Therapy?
        </h3>
        <p className="treatment-text">
          A typical session takes place in a quiet setting, you would remain
          fully clothed and relax on a comfortable treatment couch. We begin by
          evaluating the rhythm and motion of the CranioSacral system before
          intervention, locating areas of restriction in the body tissues or the
          fluid motion. Delicate, precise and effective manual techniques are
          then used to release the bodies tissues. While many
          techniques are carried out from the head and lower back, we may also
          work on other parts of the body, as sometimes we experience symptoms
          in areas which are not actually the source of the problem. Your
          session will last up to an hour.
        </p>
        <div className="phone-image-container-landscape">
          <img className="wide-treatment-image" src={cranio} />
      </div>
        <div className="treatment-separator"></div>
        <h3 className="treatment-heading">
          What you might notice during CranioSacral Therapy?
        </h3>
        <p className="treatment-text">
          Your experience of treatment is highly individual and is likely to
          change over time. You may feel warmth, heat or even a pulsing
          sensation. The majority of clients experience a feeling of very deep
          relaxation.
        </p>
        <div className="treatment-separator"></div>
        <h3 className="treatment-heading">
          How do I book my session with you?
        </h3>
        <p className="treatment-text">
          Use our Contact form to book a session with me.
        </p>
        <div className="treatment-separator"></div>
      </section>
      <BookingButton />
    </div>
  );
};

export default Cranio;
