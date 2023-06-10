import React from "react";
import "../styles/about.css";
import strengthLogo from "../assets/strengthLogo.png";
import jacky from "../assets/jacky.jpg";
import FHT from "../assets/FHT-Logo.png"

const Terms = () => {
  return (
    <div className="outer-about">
      <img className="main-logo-about" src={strengthLogo} />
      <section className="about-section">
        <h3 className="welcome">Terms and Conditions</h3>
        <p className="about-text">
        In our desire to be fair to all clients, the following policies are honoured:
        </p>
        <p className="about-text">
            If you wish to move appointments 24 hours notice is required to ensure you do not lose the fee: 48 hours notice is required when cancelling an appointment. This allows for someone else to book. If you are unable to give us 48 hours advance notice, you will be charged your deposit.
        </p>
        <p className="about-text">
        Late Arrivals: your session may be shortened in order to accommodate others whose appointments follow yours. Depending upon how late you arrive, your therapist will determine if there is enough time remaining to start the treatment. Regardless of the length of the treatment given, you will be responsible for payment for the full session.
        </p>
        <p className="about-text">
        No-shows: Anyone who forgets or consciously chooses to forgo their appointment for whatever reason will be considered a "no-show". Under these circumstances the deposit is non-refundable.
        </p>
        <p className="about-text">
        Out of respect and consideration to your therapist and other customers, please plan accordingly and be on time.
        </p>
        <p className="about-text">
        A Strength In You has the right to decline treatment due to contraindications and Information given at time of assessment. We also have the right to request confirmation and or consent from your GP or Medical Consultant that they are aware, and happy that you can continue with the treatment. Withholding medical information is done so at your own risk and no practitioner can be held responsible for undesired outcomes.
        </p>
        <p className="about-text">
        Deposits must be paid to secure appointment.
        </p>
      </section>
    </div>
  );
};

export default Terms;
